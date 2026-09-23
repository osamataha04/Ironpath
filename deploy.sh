#!/bin/bash

# IronPath - Deploy Script
# This script will deploy your project to GitHub Pages

echo "🚀 IronPath - Deploy Script"
echo "============================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the project root directory"
    exit 1
fi

echo "✅ Found package.json"
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed!"
    echo ""
    echo "Install Git with:"
    echo "  Ubuntu/Debian: sudo apt update && sudo apt install git"
    echo "  Fedora:        sudo dnf install git"
    exit 1
fi

echo "✅ Git is installed: $(git --version)"
echo ""

# Check if GitHub CLI is installed (optional)
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI is installed"
    HAS_GH=true
else
    echo "ℹ️  GitHub CLI not found (optional, you can use browser instead)"
    HAS_GH=false
fi

echo ""
echo "============================"
echo "📋 Starting deployment..."
echo ""

# Initialize Git
echo "📦 Step 1: Initializing Git..."
if [ -d ".git" ]; then
    echo "⚠️  Git already initialized"
else
    git init
    echo "✅ Git initialized"
fi
echo ""

# Add all files
echo "📦 Step 2: Adding files..."
git add .
echo "✅ Files added"
echo ""

# Commit
echo "📦 Step 3: Creating commit..."
git commit -m "IronPath - Gym & Diet Planner" 2>/dev/null || echo "⚠️  Nothing to commit (already committed)"
echo ""

# Set branch to main
echo "📦 Step 4: Setting branch to main..."
git branch -M main
echo "✅ Branch set to main"
echo ""

# Add remote
echo "📦 Step 5: Adding GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/osamataha04/Ironpath.git
echo "✅ Remote added: https://github.com/osamataha04/Ironpath.git"
echo ""

# Push to GitHub
echo "📦 Step 6: Pushing to GitHub..."
echo ""
echo "⚠️  IMPORTANT: When asked for credentials:"
echo "   Username: osamataha04"
echo "   Password: Use Personal Access Token (NOT your regular password)"
echo ""
echo "   To create a token:"
echo "   1. Go to: https://github.com/settings/tokens"
echo "   2. Click 'Generate new token (classic)'"
echo "   3. Select 'repo' permissions"
echo "   4. Copy the token (starts with ghp_)"
echo ""
read -p "Press Enter when you're ready to push..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Code pushed successfully!"
    echo ""
else
    echo ""
    echo "❌ Push failed. Check the error above."
    echo ""
    exit 1
fi

# Enable GitHub Pages
echo "============================"
echo "🚀 Step 7: Enable GitHub Pages"
echo ""
echo "Your code is now on GitHub!"
echo ""
echo "To enable GitHub Pages:"
echo ""
echo "1. Open this URL in your browser:"
echo "   https://github.com/osamataha04/Ironpath/settings/pages"
echo ""
echo "2. Under 'Source', select: GitHub Actions"
echo ""
echo "3. Wait 1-2 minutes for deployment"
echo ""
echo "4. Your website will be live at:"
echo "   🌐 https://osamataha04.github.io/Ironpath/"
echo ""
echo "============================"
echo ""
echo "🎉 Done! Share your website with anyone!"
echo ""
echo "To update the site later, just run:"
echo "  git add ."
echo "  git commit -m 'description'"
echo "  git push"
echo ""
