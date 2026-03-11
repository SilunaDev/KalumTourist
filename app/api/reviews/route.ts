import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/firebase';
import cloudinary from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const country = formData.get('country') as string;
    const review = formData.get('review') as string;
    const rating = parseInt(formData.get('rating') as string);
    const image = formData.get('image') as File;

    // Validate inputs
    if (!name || !country || !review || !rating || !image) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Upload image to Cloudinary
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'customer-reviews',
          resource_type: 'image',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    // Save review to Firebase Realtime Database
    const db = getDb();
    const reviewsRef = db.ref('reviews');
    const newReviewRef = reviewsRef.push();
    
    const reviewData = {
      id: newReviewRef.key,
      name,
      country,
      review,
      rating,
      image: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      status: 'pending', // pending, approved, rejected
      createdAt: Date.now(),
    };

    await newReviewRef.set(reviewData);

    return NextResponse.json({
      message: 'Review submitted successfully! It will be reviewed by our admin team.',
      success: true,
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const db = getDb();
    const reviewsRef = db.ref('reviews');
    
    // Get only approved reviews
    const snapshot = await reviewsRef
      .orderByChild('status')
      .equalTo('approved')
      .once('value');

    const reviews: any[] = [];
    snapshot.forEach((child) => {
      reviews.push(child.val());
    });

    // Sort by creation date (newest first)
    reviews.sort((a, b) => b.createdAt - a.createdAt);

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
