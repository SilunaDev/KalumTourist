# Email Setup Instructions

## Gmail Setup for Contact Form

To enable email sending from the contact form, follow these steps:

### 1. Enable 2-Step Verification on Gmail
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left menu
3. Under "How you sign in to Google", click **2-Step Verification**
4. Follow the steps to enable it

### 2. Generate App Password
1. Still in Google Account Settings → Security
2. Click on **App passwords** (appears after enabling 2-Step Verification)
3. In "Select app" dropdown, choose **Mail**
4. In "Select device" dropdown, choose **Other (Custom name)**
5. Type "LankaHorizon Website" or any name
6. Click **Generate**
7. Copy the 16-character password (it will look like: xxxx xxxx xxxx xxxx)

### 3. Update .env.local File
1. Open the `.env.local` file in the project root
2. Replace the values:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASSWORD=xxxxxxxxxxxx (the 16-char app password, no spaces)
   ```
3. Save the file

### 4. Restart Development Server
After updating `.env.local`, restart your dev server:
```bash
npm run dev
```

## Testing
- Fill out the contact form on your website
- Check **dinewwimalasinghe@gmail.com** inbox for the test email
- The email will be formatted nicely with all form details

## Important Notes
- Never commit `.env.local` to Git (it's already in .gitignore)
- Keep your app password secure
- Emails are sent to: dinewwimalasinghe@gmail.com (for testing)
- To change recipient, edit `app/api/contact/route.ts` line 39

## Contact Information Displayed
- Phone: +94 77 746 9391
- Email: kalumns5@gmail.com
- Facebook: Kalum Bandara
- WhatsApp link included
- Instagram link included
