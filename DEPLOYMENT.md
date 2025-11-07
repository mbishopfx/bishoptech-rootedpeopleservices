# Deployment Guide - Rooted People Services Website

## Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
```

### 2. Supabase Database Setup

1. Create a Supabase project at https://supabase.com
2. Go to SQL Editor
3. Run the complete SQL schema from `supabase-schema.sql`
4. Verify all 3 tables are created:
   - `leads`
   - `service_inquiries`
   - `newsletter_subscribers`
5. Check that Row Level Security (RLS) policies are enabled

### 3. Test Locally

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Test the build
npm run build
npm run start
```

### 4. Verify Functionality

- [ ] Homepage loads with video background
- [ ] All 4 main pages accessible (Home, Services, About, Contact)
- [ ] All 7 landing page variations accessible (/variation1 through /variation7)
- [ ] Contact form submits successfully
- [ ] Navigation menu works on mobile
- [ ] All animations render smoothly

## Deployment to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Rooted People Services website"
git remote add origin your-github-repo-url
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables

In Vercel project settings:

1. Go to Settings → Environment Variables
2. Add:
   ```
   NEXT_PUBLIC_SUPABASE_URL = your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
   ```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Visit your production URL

## Custom Domain Setup

### In Vercel:

1. Go to Settings → Domains
2. Add your custom domain (e.g., `rootedpeopleservices.com`)
3. Follow DNS configuration instructions

### DNS Configuration:

Add these records to your domain registrar:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

## Post-Deployment

### 1. Test Production Site

- [ ] All pages load correctly
- [ ] Contact form submissions work
- [ ] Video playback works
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Performance tested (PageSpeed Insights)

### 2. Monitor Supabase

1. Check Supabase Dashboard for lead submissions
2. Verify RLS policies are working
3. Monitor API usage

### 3. Analytics Setup (Optional)

Add Google Analytics or your preferred analytics:

1. Create tracking ID
2. Add to `app/layout.tsx`
3. Test page view tracking

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Videos Not Loading

- Ensure videos are in `/public/videos/`
- Check file names match:
  - `rootedani.mp4`
  - `rootervid.mp4`
- Verify video file sizes aren't too large (compress if needed)

### Supabase Connection Issues

- Verify environment variables are set correctly
- Check Supabase project is active
- Verify RLS policies allow public inserts

### Mobile Menu Not Working

- Clear browser cache
- Verify JavaScript is enabled
- Check for console errors

## Performance Optimization

### Images

- All images are already optimized via Next.js Image component
- Logo and headshot use lazy loading

### Videos

Consider compressing videos if needed:

```bash
# Using ffmpeg
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M output.mp4
```

### Caching

Vercel automatically handles:
- Static asset caching
- CDN distribution
- Image optimization

## Security

### Environment Variables

- ✅ Never commit `.env.local` to Git
- ✅ Use Supabase RLS for data access control
- ✅ HTTPS enforced by default on Vercel

### Supabase

- ✅ RLS policies restrict data access
- ✅ Only anon key is public (safe)
- ✅ Service role key stays server-side only

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update --legacy-peer-deps

# Test
npm run build
```

### Content Updates

- Edit page content in `/app/` directory
- Update services in `/app/services/page.tsx`
- Modify bio in `/lib/types.ts`

### Add New Landing Pages

1. Create new folder: `/app/variation8/`
2. Add `page.tsx`
3. Follow existing variation patterns
4. Deploy

## Support

For deployment issues:
- Check Vercel build logs
- Review Supabase logs
- Verify environment variables
- Test locally first

## Rollback

If deployment fails:

1. Go to Vercel Dashboard
2. Deployments tab
3. Find previous successful deployment
4. Click "..." → "Promote to Production"

## Monitoring

### Key Metrics to Watch

- Page load times
- Form submission success rate
- Mobile vs desktop traffic
- Bounce rates per landing page
- Lead conversion rates

### Tools

- Vercel Analytics (built-in)
- Google Search Console
- Google Analytics
- Supabase Dashboard

## Client Handoff

Provide client with:
1. Vercel project access
2. Supabase project access
3. This documentation
4. Environment variables (securely)
5. GitHub repository access

## Backup

### Code

- ✅ Stored in GitHub
- ✅ Vercel keeps deployment history

### Database

Regular Supabase backups:
1. Go to Supabase Dashboard
2. Settings → Backups
3. Enable automated backups
4. Export data periodically

## Next Steps After Deployment

1. Submit sitemap to Google Search Console
2. Set up Google Business Profile
3. Configure email forwarding for forms
4. Set up monitoring and alerts
5. Plan content updates schedule

