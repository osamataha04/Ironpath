# 💪 IronPath - Gym & Diet Planner

A comprehensive fitness web application with personalized tracking, nutrition calculator, training plans with YouTube tutorials, and an Egyptian food database (in Arabic).

## 🌐 Live Demo

After deploying to GitHub Pages, your app will be available at:
`https://<your-username>.github.io/<repo-name>/`

## ✨ Features

### 🧮 Nutrition Calculator
- BMI, BMR, TDEE calculation
- Personalized macro targets (protein, carbs, fat)
- Micronutrient daily targets
- Based on your age, gender, weight, height, and activity level

### 🏋️ Training Plan
- Complete Phase 1 program (65kg → 80kg V-taper goal)
- Workout A and Workout B with full exercise details
- YouTube tutorial links for every exercise
- Progression rules (linear progression + double progression)
- Session structure and timing guide

### 📈 Training Stages
- Stage 0-3 visual timeline
- RIR (Reps in Reserve) guide
- Ballpark strength checkpoints
- When to deload

### 📊 Progress Tracker (Personalized)
- **Weight logging** with date tracking
- **Workout logging** - record every session with exercises, weights, reps, sets, RIR
- **Body measurements** - waist, shoulder circumference
- **V-taper ratio** calculation
- **Personal records** tracking
- **Visual weight chart**
- All data saved locally in your browser

### 👤 User Profile
- Save your personal info (name, age, gender, weight, height)
- Quick stats overview
- Data persists between visits (localStorage)

### 🍽️ Recovery & Lifestyle
- Sleep guidelines
- Zone 2 cardio recommendations
- Daily posture block exercises
- Deload protocols
- Priority order when life gets busy

### 🇪🇬 Egyptian Food Database (Arabic)
- 35+ Egyptian foods with full nutritional data
- Macros (protein, carbs, fat, fiber) per serving
- Key micronutrients for each food
- Categories: proteins, carbs, vegetables, fruits, fats, dairy
- **6 sample meal plans** with calorie/protein totals
- Search and filter by category
- Practical tips for Egyptian diet on a budget

## 🚀 Deploy to GitHub Pages

### 📖 Built-in Deploy Guide

The app has a **built-in step-by-step deploy guide** (in Arabic & English) accessible from the 🚀 "Deploy" tab. It walks you through every single click from creating a GitHub account to sharing your live website link.

### Quick Steps:

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it something like `ironpath` or `gym-planner`
3. Don't initialize with README (we already have one)

### Step 2: Update Vite Config for GitHub Pages

Open `vite.config.js` and add the `base` option:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/<your-repo-name>/',  // ← ADD THIS LINE (replace with your repo name)
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
```

**Important:** Replace `<your-repo-name>` with your actual repository name (e.g., `/ironpath/`).

### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - IronPath Gym & Diet Planner"

# Add your GitHub repository as remote
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy

### Step 5: Access Your App

After the deployment completes (usually 1-2 minutes), your app will be live at:
```
https://<your-username>.github.io/<your-repo-name>/
```

Share this link with anyone - it works on phones, tablets, and laptops!

## 📱 Mobile-Friendly

The app is fully responsive:
- Bottom navigation bar on mobile
- Touch-friendly buttons and inputs
- Arabic text support (RTL) for the food section
- Works offline after first load (data stored locally)

## 🔒 Data Privacy

- All user data is stored **locally** in the browser (localStorage)
- No server, no database, no tracking
- Data stays on the user's device
- Clearing browser data will reset everything

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **localStorage** for data persistence
- **GitHub Actions** for deployment

## 📋 Future Enhancements

- [ ] Export/import data (backup)
- [ ] Photo progress tracking
- [ ] Custom workout templates
- [ ] Calorie tracking with food database
- [ ] Social sharing of progress
- [ ] PWA (install on phone like an app)

## ⚠️ Disclaimer

This is general training guidance, not medical advice. Consult a healthcare professional before starting any exercise or diet program, especially if you have medical conditions.

---

Built with 💪 for gains
