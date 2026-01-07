# Email Service Setup Guide

The contact form on the VistaDocs website is now configured to send emails using Nodemailer.

## Configuration Required

To activate the email service, you need to configure your email credentials:

1. Open the `.env` file in the root directory
2. Replace the placeholder values with your actual email credentials:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=your-business-email@example.com
```

## Gmail Setup Instructions

If you're using Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this password in `EMAIL_PASSWORD` (not your regular Gmail password)

3. **Update .env file**:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Your app password
CONTACT_EMAIL=business@example.com  # Where you want to receive contact form emails
```

## Using Other Email Services

For services like Outlook, Yahoo, or custom SMTP:

```env
EMAIL_SERVICE=  # Leave empty or remove this line
EMAIL_HOST=smtp.office365.com  # Your SMTP host
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
CONTACT_EMAIL=business@example.com
```

### Common SMTP Settings:
- **Outlook/Office365**: smtp.office365.com (Port 587)
- **Yahoo**: smtp.mail.yahoo.com (Port 465 or 587)
- **Custom**: Use your provider's SMTP settings

## Testing the Email Service

1. Start the server: `npm start`
2. Go to http://localhost:3000/contact
3. Fill out and submit the contact form
4. Check the console for confirmation
5. Check your CONTACT_EMAIL inbox for the message

## Troubleshooting

- **Authentication Error**: Make sure you're using an App Password for Gmail, not your regular password
- **Connection Timeout**: Check your firewall/network settings
- **Email Not Received**: Check spam folder, verify CONTACT_EMAIL is correct
- **Development Mode**: Consider using a service like [Mailtrap](https://mailtrap.io) for testing

## Security Notes

- ✅ `.env` file is already in `.gitignore` to protect your credentials
- ✅ Never commit `.env` file to version control
- ✅ Use `.env.example` as a template for other developers
