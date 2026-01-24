# Deployment Guide

This guide will help you deploy the Vishrut Shastri Portfolio Website to various platforms.

## Prerequisites

Before deploying, ensure you have:
- Node.js installed (version 14 or higher)
- npm or yarn package manager
- Git installed and configured

## Building for Production

First, create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic builds from Git.

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

**Or via Vercel Dashboard:**
1. Visit [vercel.com](https://vercel.com)
2. Connect your Git repository
3. Vercel will automatically detect React and deploy

### 2. Netlify

Netlify provides drag-and-drop deployment and continuous deployment from Git.

**Quick Deploy:**
1. Run `npm run build`
2. Visit [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `build` folder

**Or via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Or connect Git repository:**
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### 3. GitHub Pages

Deploy directly to GitHub Pages:

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

For AWS deployment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload to S3:
   ```bash
   aws s3 sync build/ s3://your-bucket-name
   ```

3. Configure S3 for static website hosting
4. (Optional) Add CloudFront for CDN

### 5. Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select Hosting
   - Set public directory to `build`
   - Configure as single-page app: Yes

3. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### 6. Heroku

1. Create a `server.js` file:
   ```javascript
   const express = require('express');
   const path = require('path');
   const app = express();
   
   app.use(express.static(path.join(__dirname, 'build')));
   
   app.get('/*', (req, res) => {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
   
   const port = process.env.PORT || 3000;
   app.listen(port);
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "start": "node server.js",
     "heroku-postbuild": "npm run build"
   }
   ```

3. Deploy:
   ```bash
   heroku create
   git push heroku main
   ```

## Environment Variables

If you need to add environment variables (API keys, etc.):

1. Create `.env` file in root:
   ```
   REACT_APP_API_KEY=your_api_key
   REACT_APP_API_URL=your_api_url
   ```

2. Access in code:
   ```javascript
   const apiKey = process.env.REACT_APP_API_KEY;
   ```

3. Add environment variables to your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **GitHub Pages**: Use GitHub Secrets

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### GitHub Pages
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable Gzip/Brotli compression** on your hosting platform
2. **Use CDN** for static assets
3. **Enable caching** with proper cache headers
4. **Use lazy loading** for images (already implemented)

## SSL/HTTPS

Most hosting platforms (Vercel, Netlify) provide free SSL certificates automatically.

For manual setup:
- Use Let's Encrypt for free SSL certificates
- Configure your hosting platform to redirect HTTP to HTTPS

## Monitoring

After deployment, consider setting up:
- **Google Analytics** for traffic monitoring
- **Sentry** for error tracking
- **Lighthouse CI** for performance monitoring

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node -v` (should be 14+)
- Clear cache: `npm cache clean --force`

### Routing Issues
- Configure your hosting platform for single-page app routing
- Ensure all routes redirect to `index.html`

### Environment Variables Not Working
- Variables must start with `REACT_APP_`
- Restart dev server after adding variables
- Rebuild for production after changes

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify all links work (GitHub, LinkedIn, email)
- [ ] Test contact form functionality
- [ ] Check responsive design on mobile devices
- [ ] Test cross-browser compatibility
- [ ] Verify meta tags and SEO
- [ ] Set up analytics
- [ ] Configure custom domain (if applicable)
- [ ] Enable SSL/HTTPS
- [ ] Test performance with Lighthouse

## Support

For deployment issues:
- Check hosting platform documentation
- Review build logs for errors
- Ensure all environment variables are set
- Verify DNS configuration for custom domains

---

**Note:** Remember to update contact information and project links before deployment!
