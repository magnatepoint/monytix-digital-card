#!/bin/bash

# Monytix Digital Card - GitHub Setup Script
# This script helps you push your code to GitHub for Cloudflare Pages deployment

echo "🚀 Monytix Digital Card - GitHub Setup"
echo "====================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run 'git init' first."
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 You have uncommitted changes. Committing them now..."
    git add .
    git commit -m "Update: Latest changes for deployment"
    echo "✅ Changes committed successfully!"
else
    echo "✅ No uncommitted changes found."
fi

echo ""
echo "🔗 Next Steps:"
echo "1. Go to https://github.com and create a new repository"
echo "2. Copy the repository URL (e.g., https://github.com/username/monytix-digital-card.git)"
echo "3. Run these commands:"
echo ""
echo "   git remote add origin YOUR_REPOSITORY_URL"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Then go to https://pages.cloudflare.com to deploy!"
echo ""
echo "📋 Build Settings for Cloudflare Pages:"
echo "   Framework: Vite"
echo "   Build command: npm run build"
echo "   Build output directory: dist"
echo "   Root directory: / (leave empty)"
echo ""
echo "🎉 Your Monytix digital visiting card will be live in minutes!"
