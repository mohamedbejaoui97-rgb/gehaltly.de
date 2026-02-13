# gehaltly.de Deployment Guide

This guide explains how to deploy gehaltly.de to production.

## Pre-Deployment Checklist

Before deploying, ensure all of the following are complete:

- [x] Build succeeds (`npm run build`)
- [x] All 57+ pages generated successfully
- [x] Sitemap generated at `/sitemap.xml`
- [x] robots.txt accessible at `/robots.txt`
- [x] No TypeScript errors
- [x] No critical ESLint errors
- [x] Meta tags verified on all pages
- [x] Schema markup validated

## Deployment to Vercel

### Initial Setup

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Link your project** (first time only):
   ```bash
   vercel link
   ```
   - Select your Vercel account/team
   - Link to existing project or create new one
   - Set project name: `gehaltly-de`

### Deploy to Production

1. **Deploy to production**:
   ```bash
   vercel --prod
   ```

2. **Verify deployment**:
   - Check the deployment URL provided by Vercel
   - Test key pages: homepage, calculator pages, guides
   - Verify sitemap: `https://gehaltly.de/sitemap.xml`
   - Verify robots.txt: `https://gehaltly.de/robots.txt`

### Alternative: Deploy via Git

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Vercel will automatically deploy** if connected to your GitHub repository

## Domain Configuration

### Configure Custom Domain (gehaltly.de)

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Domains**
3. Add your custom domain: `gehaltly.de`
4. Add www subdomain: `www.gehaltly.de`

### DNS Configuration

Add the following DNS records at your domain registrar:

**For apex domain (gehaltly.de):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL/TLS:**
- Vercel automatically provides SSL certificates
- Certificate provisioning takes 1-2 minutes after DNS propagation

## Environment Variables

Currently, this project does not require any environment variables. If you add API keys or secrets in the future:

1. Go to Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add variables for Production, Preview, and Development environments

## Build Configuration

The project uses the following build settings (configured in `package.json`):

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x or higher

## Post-Deployment Verification

After deployment, verify the following:

### 1. Page Functionality
- [ ] Homepage loads correctly
- [ ] Calculator pages work (gehaltsrechner, lohnrechner, etc.)
- [ ] All calculator variants function properly
- [ ] Interactive elements respond correctly

### 2. SEO & Meta Tags
- [ ] Check meta tags with browser dev tools
- [ ] Verify Open Graph tags (share on social media)
- [ ] Test schema markup with [Google Rich Results Test](https://search.google.com/test/rich-results)

### 3. Performance
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Check Core Web Vitals
- [ ] Verify fast page load times

### 4. Sitemap & Robots
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] All pages listed in sitemap
- [ ] robots.txt allows crawling
- [ ] Submit sitemap to Google Search Console

### 5. Mobile Responsiveness
- [ ] Test on mobile devices
- [ ] Verify calculator forms work on mobile
- [ ] Check navigation menu on mobile

## Google Search Console Setup

1. **Verify ownership** of gehaltly.de
2. **Submit sitemap**: `https://gehaltly.de/sitemap.xml`
3. **Request indexing** for key pages
4. **Monitor** crawl errors and coverage

## Monitoring & Analytics

### Vercel Analytics
- Automatically enabled for production deployments
- View at: Vercel Dashboard → Analytics

### Optional: Google Analytics
To add Google Analytics:
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`
3. Deploy updated code

## Rollback Procedure

If issues are detected after deployment:

1. **Via Vercel Dashboard**:
   - Go to Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **Via Git**:
   ```bash
   git revert HEAD
   git push origin main
   ```

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are installed
- Ensure Node version compatibility

### Pages Not Loading
- Check Vercel function logs
- Verify routing configuration
- Check for JavaScript errors in browser console

### Sitemap Issues
- Verify `next-sitemap.config.js` configuration
- Check postbuild script runs successfully
- Ensure all pages are included in sitemap

## Maintenance

### Regular Tasks
- **Monthly**: Review and update tax calculation logic
- **Quarterly**: Update dependency versions
- **Yearly**: Update for new tax year (2027, 2028, etc.)

### Updating Content
1. Make changes locally
2. Test with `npm run dev`
3. Build and verify with `npm run build`
4. Commit and push to trigger deployment

## Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Review Next.js deployment guide: https://nextjs.org/docs/deployment
- Contact Vercel support for platform-specific issues

## Deployment History

Track major deployments:

- **2026-02-13**: Initial production deployment
  - All 57+ pages
  - Full calculator functionality
  - SEO optimization complete
  - Schema markup implemented

---

**Last Updated**: February 13, 2026
**Site**: https://gehaltly.de
**Repository**: [Add your repo URL here]
