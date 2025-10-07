# Monytix Digital Visiting Card

A modern, animated, and sleek digital visiting card built with React, featuring AI/fintech-themed design with glassmorphism effects and smooth animations.

## ✨ Features

- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Clickable contact information and social media links
- **Responsive Design**: Optimized for all device sizes
- **AI/Fintech Theme**: Custom color scheme and visual elements
- **Accessibility**: High contrast mode and reduced motion support

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173` to view your digital visiting card

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Inter Font** - Modern typography

## 🎨 Customization

### Contact Information
Edit the `contactInfo` object in `src/App.jsx`:

```javascript
const contactInfo = {
  name: "Your Company Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  address: "Your City, State",
  website: "www.yoursite.com",
  linkedin: "your-linkedin",
  twitter: "@your_twitter",
  github: "your-github"
};
```

### Colors and Styling
Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Animations
Customize animations in `src/index.css` and `src/App.css`:

- `float` - Floating particle animation
- `glow` - Glowing effect animation
- `slide-up` - Slide up entrance animation
- `fade-in` - Fade in animation

## 📱 Responsive Design

The card is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## ♿ Accessibility Features

- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Reduced Motion**: Respects user's motion preferences
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

## 🎯 Interactive Elements

- **Email**: Opens default email client
- **Phone**: Initiates phone call on mobile devices
- **Website**: Opens website in new tab
- **Social Media**: Links to LinkedIn, Twitter, and GitHub profiles

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npx vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@monytix.com or create an issue in the repository.

---

**Monytix** - Revolutionizing Fintech with Intelligence 🚀