# Contact Form Setup

The contact form uses **Resend** for email delivery with a fallback to mailto links.

## Email Service Configuration

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Option 2: Fallback (Mailto)
If no email service is configured, the form automatically falls back to opening the user's default email client with a pre-filled message.

## Features

✅ **Professional Design** - Modern, responsive contact form
✅ **Real Email Sending** - Uses Resend API for reliable delivery  
✅ **Graceful Fallback** - Opens email client if API fails
✅ **Form Validation** - Client-side and server-side validation
✅ **HTML Emails** - Beautifully formatted email templates
✅ **Mobile Optimized** - Works perfectly on all devices
✅ **Spam Protection** - Server-side validation and rate limiting
✅ **Error Handling** - Comprehensive error management

## Contact Methods

- **Primary**: nathan@membershipauto.com
- **Phone**: 207-745-7575
- **LinkedIn**: [Nathan Reardon](https://linkedin.com/in/nathanreardon)
- **Location**: Detroit, ME 04929

## Form Fields

- **Name** (required)
- **Email** (required, validated)
- **Company/Organization** (optional)
- **Interest Area** (dropdown with predefined options)
- **Subject** (required)
- **Message** (required, minimum 10 characters)

## Email Template

The sent emails include:
- Professional HTML formatting
- All form field data
- Sender's contact information
- Timestamp and source tracking
- Reply-to functionality

## Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
```

## Production

For production deployment:
1. Set `RESEND_API_KEY` in your hosting environment
2. Verify domain ownership in Resend dashboard
3. Test email delivery functionality
