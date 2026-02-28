# Deploying DataCruiser Website to GitHub Pages

## Quick Setup (5 minutes)

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button (top right) → **New repository**
3. Repository name: `datacruiser-website` (or your preferred name)
4. Description: "DataCruiser spatio-temporal intelligence platform website"
5. Keep it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README (we already have code)
7. Click **Create repository**

### 2. Update the Base Path

**IMPORTANT:** In `vite.config.ts`, update the base path to match your repo name:

```typescript
base: '/your-repo-name/', // Change 'datacruiser-website' to YOUR repo name
```

If your repo name is different from `datacruiser-website`, update this line!

### 3. Push Your Code

GitHub will show you commands like this - run them in the terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/datacruiser-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. The deployment will start automatically!

### 5. Access Your Live Website

After ~2 minutes, your site will be live at:

```
https://YOUR-USERNAME.github.io/datacruiser-website/
```

**Example:** If your username is `johnsmith` and repo is `datacruiser-website`:
```
https://johnsmith.github.io/datacruiser-website/
```

## Updating the Website

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub will automatically rebuild and redeploy your site!

## Share with Your Team

Send them the URL:
```
https://YOUR-USERNAME.github.io/datacruiser-website/
```

They can view it on any device with a web browser - no installation needed!

## Troubleshooting

### If the site shows a blank page:

1. Check `vite.config.ts` - the `base` path must match your repo name exactly
2. Go to Settings → Pages and verify "GitHub Actions" is selected as source

### If you get a 404 error:

- Wait 2-3 minutes after first push
- Check Actions tab to see if deployment succeeded
- Verify the URL matches: `https://USERNAME.github.io/REPO-NAME/`

### To see deployment status:

1. Go to your repo on GitHub
2. Click **Actions** tab
3. You'll see each deployment and its status

## Need Help?

- Check the Actions tab for build errors
- Ensure all files committed: `git status`
- Verify base path in vite.config.ts matches repo name

---

🌍 Your DataCruiser globe visualization is now live and shareable!
