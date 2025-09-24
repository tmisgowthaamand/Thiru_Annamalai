# Thiru Krishi Connect - Deployment Guide

## Vercel Deployment

This project is configured for easy deployment on Vercel with the included `vercel.json` configuration file.

### Prerequisites
- Node.js 18+ installed
- Vercel CLI (optional) or Vercel web interface
- Git repository

### Deployment Steps

#### Option 1: Deploy via Vercel Web Interface
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the framework (Vite) and use the configuration from `vercel.json`
6. Click "Deploy"

#### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Configuration Details

The `vercel.json` file includes:

- **Framework**: Vite (React)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: All routes redirect to `index.html` for client-side routing
- **Security Headers**: Added security headers for production
- **CORS**: Configured for API routes (if needed in future)

### Environment Variables

If you need to add environment variables:

1. In Vercel dashboard, go to Project Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL` (if using external APIs)
   - `VITE_CONTACT_EMAIL`
   - etc.

### Build Optimization

The project is optimized for production with:
- Tree shaking
- Code splitting
- Asset optimization
- Gzip compression (handled by Vercel)

### Custom Domain

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed

### Performance

Expected performance scores:
- **Lighthouse**: 90+ for all metrics
- **Core Web Vitals**: Excellent
- **SEO**: Optimized meta tags and structure

### Monitoring

Vercel provides built-in:
- Analytics
- Performance monitoring
- Error tracking
- Deployment logs

### Troubleshooting

Common issues and solutions:

1. **Build fails**: Check Node.js version (should be 18+)
2. **Routes not working**: Ensure `vercel.json` rewrites are configured
3. **Images not loading**: Check public folder structure
4. **Slow loading**: Enable Vercel's image optimization

### Support

For deployment issues:
- Check Vercel documentation
- Review build logs in Vercel dashboard
- Contact support through project issues

---

**Project**: Thiru Krishi Connect - Agricultural Machinery & Spare Parts
**Framework**: React + TypeScript + Vite
**UI**: Tailwind CSS + shadcn/ui
**Deployment**: Vercel
