# SEO Setup Guide for Era Eliya Tours

## ✅ Implemented SEO Features

### 1. **Enhanced Metadata**
- Comprehensive title and description
- Keywords optimization for Sri Lanka tourism
- Open Graph tags for social media sharing
- Twitter Card metadata
- Canonical URLs

### 2. **Technical SEO**
- `sitemap.xml` - Automatically generated at `/sitemap.xml`
- `robots.txt` - Automatically generated at `/robots.txt`
- `manifest.json` - Web app manifest for PWA support
- Structured Data (JSON-LD) for TravelAgency schema

### 3. **Search Engine Optimization**
- Mobile-friendly configuration
- Theme colors for browsers
- Proper HTML lang attribute
- Meta tags for better indexing

---

## 🚀 Next Steps - IMPORTANT!

### Step 1: Register with Search Engines

#### **Google Search Console** (Most Important)
1. Go to: https://search.google.com/search-console
2. Add property: `https://eraeliyatours.com`
3. Verify ownership using one of these methods:
   - **HTML tag method** (Recommended):
     - Copy the verification code from Google Search Console
     - Add it to `app/layout.tsx` in the `verification.google` field
   - DNS verification (via Vercel)
   - HTML file upload

4. After verification:
   - Submit your sitemap: `https://eraeliyatours.com/sitemap.xml`
   - Request indexing for your homepage
   - Monitor indexing status

#### **Bing Webmaster Tools**
1. Go to: https://www.bing.com/webmasters
2. Add site: `https://eraeliyatours.com`
3. Verify and submit sitemap

### Step 2: Submit Your Sitemap
Once verified in search consoles, submit:
- **Sitemap URL**: `https://eraeliyatours.com/sitemap.xml`
- **Robots URL**: `https://eraeliyatours.com/robots.txt`

### Step 3: Request Indexing
In Google Search Console:
1. Use "URL Inspection" tool
2. Enter: `https://eraeliyatours.com`
3. Click "Request Indexing"
4. Repeat for important pages

### Step 4: Create Quality Content
Add a blog or articles section with content like:
- "Top 10 Places to Visit in Sri Lanka"
- "Sri Lanka Travel Guide 2026"
- "Best Time to Visit Sri Lanka"
- "Sri Lankan Cultural Experiences"

### Step 5: Build Backlinks
- List your business on:
  - Google My Business
  - TripAdvisor
  - Booking.com
  - Local Sri Lankan tourism directories
  - Travel forums and blogs

### Step 6: Social Media Integration
Update `app/page.tsx` with your actual social media URLs:
```typescript
"sameAs": [
  "https://www.facebook.com/eraeliyatours",
  "https://www.instagram.com/eraeliyatours",
  "https://twitter.com/eraeliyatours"
]
```

### Step 7: Performance Optimization
- Optimize images (compress and use WebP format)
- Enable Vercel Analytics
- Monitor Core Web Vitals in Google Search Console

---

## 📊 Monitoring Your SEO Progress

### Check Indexing Status
1. **Google**: Search `site:eraeliyatours.com`
2. **Bing**: Search `site:eraeliyatours.com`

### Tools to Use
- Google Search Console (essential)
- Google Analytics (track visitors)
- Bing Webmaster Tools
- PageSpeed Insights: https://pagespeed.web.dev/

---

## ⏱️ Timeline Expectations

- **24-48 hours**: Google discovers your sitemap
- **1-2 weeks**: Homepage gets indexed
- **2-4 weeks**: All pages indexed
- **1-3 months**: Start seeing organic traffic
- **3-6 months**: Ranking improvements for keywords

---

## 🔍 Target Keywords Added

Your site is now optimized for these keywords:
- Sri Lanka tours
- Sri Lanka travel packages
- Era Eliya Tours
- Sri Lanka tourism
- Tour packages Sri Lanka
- Sri Lanka vacation
- Travel Sri Lanka
- Sri Lanka tour operator
- Sri Lanka holidays
- And more...

---

## 📝 Important Notes

1. **Don't forget to add your Google Search Console verification code** in `app/layout.tsx`
2. Keep content fresh and updated
3. Page loading speed matters - optimize images
4. Mobile-friendliness is crucial (already implemented)
5. Get reviews on Google, TripAdvisor, etc.
6. Be patient - SEO takes time!

---

## 🆘 Troubleshooting

**If not indexed after 2 weeks:**
1. Check Google Search Console for errors
2. Verify robots.txt allows crawling: `https://eraeliyatours.com/robots.txt`
3. Check sitemap is accessible: `https://eraeliyatours.com/sitemap.xml`
4. Request indexing again
5. Check for manual actions/penalties in Search Console

**To check if your site is indexed:**
- Google: `site:eraeliyatours.com`
- Should show your pages if indexed

---

## 📞 Support

If you need help:
1. Check Google Search Console Help Center
2. Review Vercel SEO documentation
3. Monitor analytics regularly

**Deploy these changes to Vercel now!** After deployment:
1. Register with Google Search Console
2. Submit your sitemap
3. Request indexing

Good luck! 🚀
