# Monytix Digital Visiting Card

A modern, animated, and sleek digital visiting card built with React, featuring AI/fintech-themed design with glassmorphism effects and smooth animations.

## ✨ Features

- **Modern Design**: Glassmorphism effects with Monytix brand colors
- **Two-Panel Layout**: Personal card with flip functionality and quick actions panel
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Clickable contact information and social media links
- **Responsive Design**: Optimized for all device sizes
- **AI/Fintech Theme**: Custom Monytix brand color scheme and visual elements
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

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Deployment to Cloudflare Pages

### Step 1: GitHub Repository Setup

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `monytix-digital-card` or similar
   - Make it public or private (your choice)

2. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/monytix-digital-card.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Cloudflare Pages Setup

1. **Go to Cloudflare Pages**
   - Visit [Cloudflare Pages](https://pages.cloudflare.com)
   - Sign in with your Cloudflare account (or create one)

2. **Connect GitHub Repository**
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your GitHub repository
   - Authorize Cloudflare to access your repositories

3. **Configure Build Settings**
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - You'll get a URL like `https://your-project-name.pages.dev`

### Step 3: Custom Domain (Optional)

1. **Add Custom Domain**
   - In Cloudflare Pages dashboard, go to "Custom domains"
   - Add your domain (e.g., `monytix.ai` or `card.monytix.ai`)
   - Follow DNS setup instructions

2. **SSL Certificate**
   - Cloudflare automatically provides SSL certificates
   - Your site will be available at `https://your-domain.com`

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Inter Font** - Modern typography

## 🎨 Monytix Brand Colors

### Primary Colors
- **Primary**: `#00E0A1` - Vibrant teal-green for AI brilliance
- **Primary Variant**: `#00C48C` - Softer shade for secondary elements
- **Accent**: `#FFD166` - Subtle gold accent for premium indicators

### Backgrounds
- **Background**: `#0E1116` - True deep dark for fintech sophistication
- **Surface**: `#151A21` - Slightly raised surface for cards
- **Elevated Surface**: `#1E252E` - For modals and expanded sections

### Text Colors
- **Primary Text**: `#FFFFFF` - Pure white for clarity
- **Secondary Text**: `#A0A8B5` - Muted grey for subtitles
- **Tertiary Text**: `#6C7380` - For metadata and hints

## 🎯 Customization

### Contact Information
Edit the `contactInfo` object in `src/App.jsx`:

```javascript
const contactInfo = {
  name: "Your Name",
  title: "Your Title",
  company: "Your Company",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  website: "yourwebsite.com",
  linkedin: "your-linkedin-profile",
  twitter: "@your_twitter",
  github: "your-github"
};
```

### Automatic Deployments
- Every push to the `main` branch will automatically trigger a new deployment
- Cloudflare Pages will rebuild and deploy your changes automatically
- You can also trigger manual deployments from the dashboard

## 📱 Features

### Interactive Elements
- **Card Flip**: Click the left card to see company information
- **Contact Actions**: Email, phone, website, and LinkedIn all work
- **Save/Share**: Ready for implementation (buttons are styled and animated)
- **Hover Effects**: All buttons have smooth scale and color transitions

### Responsive Design
- **Desktop**: Full two-panel layout
- **Tablet**: Stacked layout with optimized sizing
- **Mobile**: Single column layout with touch-friendly buttons

## 🔧 Development

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
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

For support, email sandeep@monytix.ai or create an issue in the repository.

---

**Monytix** - Revolutionizing Fintech with Intelligence 🚀

## 🌟 Deployment Checklist

- [ ] Code pushed to GitHub repository
- [ ] Cloudflare Pages project created
- [ ] Build settings configured (Vite, npm run build, dist)
- [ ] Initial deployment successful
- [ ] Custom domain added (optional)
- [ ] SSL certificate active
- [ ] Automatic deployments working
- [ ] Mobile responsiveness tested
- [ ] All contact links working
- [ ] Performance optimized

Your Monytix digital visiting card is now live and ready to impress! 🎉
