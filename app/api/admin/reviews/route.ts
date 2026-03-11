import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/firebase';

// Get all reviews (pending, approved, rejected) for admin
export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const db = getDb();
    const reviewsRef = db.ref('reviews');
    
    let snapshot;
    if (status && status !== 'all') {
      snapshot = await reviewsRef
        .orderByChild('status')
        .equalTo(status)
        .once('value');
    } else {
      snapshot = await reviewsRef.once('value');
    }

    let reviews: any[] = [];
    snapshot.forEach((child) => {
      reviews.push(child.val());
    });

    // Apply search filter if provided
    if (search) {
      const searchLower = search.toLowerCase();
      reviews = reviews.filter(
        (r) =>
          r.name.toLowerCase().includes(searchLower) ||
          r.country.toLowerCase().includes(searchLower) ||
          r.review.toLowerCase().includes(searchLower)
      );
    }

    // Sort by creation date (newest first)
    reviews.sort((a, b) => b.createdAt - a.createdAt);

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error fetching admin reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

// Update review status (approve/reject)
export async function PATCH(request: NextRequest) {
  try {
    // Check admin authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { reviewId, status } = await request.json();

    if (!reviewId || !status || !['approved', 'rejected', 'pending'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid reviewId or status' },
        { status: 400 }
      );
    }

    const db = getDb();
    const reviewRef = db.ref(`reviews/${reviewId}`);
    
    // Check if review exists
    const snapshot = await reviewRef.once('value');
    if (!snapshot.exists()) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    // Update status
    await reviewRef.update({
      status,
      updatedAt: Date.now(),
    });

    return NextResponse.json({
      message: `Review ${status} successfully`,
      success: true,
    });
  } catch (error) {
    console.error('Error updating review status:', error);
    return NextResponse.json(
      { error: 'Failed to update review status' },
      { status: 500 }
    );
  }
}

// Delete review
export async function DELETE(request: NextRequest) {
  try {
    // Check admin authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = request.nextUrl;
    const reviewId = searchParams.get('reviewId');

    if (!reviewId) {
      return NextResponse.json(
        { error: 'Review ID is required' },
        { status: 400 }
      );
    }

    const db = getDb();
    const reviewRef = db.ref(`reviews/${reviewId}`);
    
    // Get review data before deletion (to delete image from Cloudinary if needed)
    const snapshot = await reviewRef.once('value');
    if (!snapshot.exists()) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    // Delete review
    await reviewRef.remove();

    return NextResponse.json({
      message: 'Review deleted successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    );
  }
}
