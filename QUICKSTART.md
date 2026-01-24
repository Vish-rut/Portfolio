# Quick Start Guide

Get the Vishrut Shastri Portfolio website up and running in minutes!

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd vishrut-shastri-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Open in browser**:
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

## What You'll See

The portfolio includes:
- ✅ Hero section with animated typing effect
- ✅ About section with professional background
- ✅ Skills showcase with progress indicators
- ✅ Offerings
- ✅ Portfolio projects with filtering
- ✅ Contact form
- ✅ Responsive footer with social links

## Customization

### Update Personal Information

Edit `src/components/Hero.js`:
- Line 5: Update roles
- Line 58: Change name
- Line 64: Update tagline
- Lines 75-90: Update social links

### Update About Section

Edit `src/components/About.js`:
- Lines 15-40: Update about text
- Lines 44-64: Update stats

### Update Skills

Edit `src/components/Skills.js`:
- Lines 7-48: Modify skills array with your technologies

### Update Offerings

Edit `src/components/Offerings.js`:
- Update offerings array with your expertise

### Update Projects

Edit `src/components/Portfolio.js`:
- Lines 8-94: Update projects array with your work

### Update Contact Info

Edit `src/components/Contact.js`:
- Lines 50-95: Update contact information

### Change Colors

Edit `src/App.css`:
- Lines 6-14: Modify CSS variables for colors

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will be ready to deploy to any static hosting service.

## Testing Locally

Test the production build locally:

```bash
npm install -g serve
serve -s build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Common Issues

### Port Already in Use
If port 3000 is busy, React will ask to use another port. Type 'Y' to proceed.

### Module Not Found
Run `npm install` to ensure all dependencies are installed.

### Build Warnings
Minor warnings are normal. The build will still succeed if there are no errors.

## Next Steps

1. ✏️ Customize content with your information
2. 🎨 Adjust colors and styling if desired
3. 📸 Add your project images/screenshots
4. 🚀 Deploy to your preferred hosting platform
5. 🌐 Configure custom domain (optional)

## Need Help?

- Check [README.md](README.md) for detailed documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guides
- Review component files for inline comments

## Features

### Responsive Design
✅ Works perfectly on mobile, tablet, and desktop

### Smooth Animations
✅ Engaging transitions and effects throughout

### Modern Stack
✅ Built with latest React and modern JavaScript

### SEO Friendly
✅ Semantic HTML and proper meta tags

### Performance Optimized
✅ Fast load times and smooth interactions

### Accessibility
✅ Keyboard navigation and ARIA labels

---

Happy coding! 🚀
