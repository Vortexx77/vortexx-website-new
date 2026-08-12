# Getting Started with VORTEXX Website

## Quick Start

### Development Server
To run the development server and see your changes in real-time:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build
To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build
To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
vortexx web/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer section
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Homepage with carousel
│   │   ├── About.tsx        # About page
│   │   ├── Services.tsx     # Services page
│   │   ├── Contact.tsx      # Contact page
│   │   └── ...
│   ├── img/                 # Images and assets
│   │   └── vortexxlogo.png  # VORTEXX logo
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & animations
├── public/                  # Static assets
├── dist/                    # Production build output
└── ...
```

## New Features

### 🎨 Premium UI/UX Design
- Modern, professional design system
- Glassmorphism effects throughout
- Smooth animations and transitions
- Responsive design for all devices

### 🎭 Interactive Components
- **Home Page Carousel**: Auto-rotating with 3 slides
- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Cards and buttons react to mouse interaction
- **Contact Form**: Animated submit button with success states

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile navigation menu
- Optimized layouts for all screen sizes

### ⚡ Performance
- Optimized production builds
- Lazy loading for images
- Efficient animations using CSS transforms
- Code splitting with Vite

## Customization Guide

### Changing Colors
Edit the Tailwind color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#00668a',    // Your main brand color
  secondary: '#3abef9',  // Secondary brand color
  // ... more colors
}
```

### Updating Content
1. **Homepage Hero**: Edit `src/pages/Home.tsx` - search for `slides` array
2. **About Page**: Edit `src/pages/About.tsx` - update team members and values
3. **Services**: Edit `src/pages/Services.tsx` - modify services array
4. **Contact Info**: Edit `src/pages/Contact.tsx` - update contact details

### Changing Images
1. Add images to `src/img/` folder
2. Import in component: `import myImage from '../img/myImage.png'`
3. Use in JSX: `<img src={myImage} alt="Description" />`

### Adding New Pages
1. Create new file in `src/pages/` (e.g., `Portfolio.tsx`)
2. Add route in `src/App.tsx`:
```typescript
<Route path="/portfolio" element={<Portfolio />} />
```
3. Add navigation link in `src/components/Header.tsx`

## Animation System

### Available Animation Classes
- `.reveal-on-scroll` - Fade in from bottom on scroll
- `.reveal-elem` - Quick reveal animation
- `.reveal-up` - Upward reveal with smooth easing
- `.glass-panel` - Light glassmorphism effect
- `.glass-panel-dark` - Dark glassmorphism effect

### Using Animations
```tsx
<div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
  Your content here
</div>
```

Animations trigger automatically when elements enter the viewport.

## Styling Guide

### Utility-First with Tailwind CSS
This project uses Tailwind CSS for styling. Common patterns:

```tsx
// Spacing
className="p-4 m-2"           // padding: 1rem, margin: 0.5rem
className="px-8 py-4"         // horizontal/vertical padding

// Colors
className="bg-blue-600"       // background color
className="text-white"        // text color

// Typography
className="text-2xl font-bold"  // size and weight
className="tracking-wider"      // letter spacing

// Responsive
className="md:text-4xl"       // applies at medium screens and up
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Errors
If you encounter build errors:
1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build` again

### Styling Issues
If styles aren't applying:
1. Check that Tailwind classes are spelled correctly
2. Verify import of `index.css` in `main.tsx`
3. Clear browser cache

### Animation Not Working
1. Check that Intersection Observer is supported (all modern browsers)
2. Verify animation classes are present in `index.css`
3. Ensure elements have the correct classes

## Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Support
For questions or issues, refer to the `IMPLEMENTATION_SUMMARY.md` file for detailed information about the implementation.

---

**Last Updated**: August 4, 2026
**Version**: 2.0.0
