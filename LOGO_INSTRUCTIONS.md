# LOGO SETUP INSTRUCTIONS

## Add Your Logo to VistaDocs Center

### Required Logo File:
Place your logo image as: `/public/img/logo.png`

### Logo Specifications:
- **Format**: PNG (with transparent background recommended)
- **Recommended Size**: 200px width × 60px height
- **Maximum Height**: 50px (will be scaled automatically)
- **Color**: Should work well with white background
- **Style**: Professional, clean, suitable for business service company

### Where the Logo Appears:
1. **Header** - Top left corner of every page (45px height)
2. **Footer** - Left column (50px height)
3. **Favicon** - Browser tab icon

### How to Add:
1. Save your logo as `logo.png`
2. Place it in `/Users/sabihhaider/Documents/VistaDocs/public/img/`
3. The website will automatically display it
4. Restart the server if needed: `npm start`

### If You Don't Have a Logo Yet:
The site will work without the logo, but you'll see a broken image icon. You can:
- Use a temporary placeholder
- Create a simple text-based logo using online tools
- Design a professional logo using Canva, Figma, or hire a designer

### Testing:
After adding the logo:
1. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+F5 on Windows)
2. Visit http://localhost:3000
3. Check header, footer, and browser tab

### Need Help?
- Logo file path: `public/img/logo.png`
- If logo is too large/small, adjust CSS in `public/css/style.css`
- Look for `.logo-image` and `.footer-logo-image` classes
