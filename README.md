# Rooted People Services Website

A modern, professional HR consulting website built with Next.js 15, featuring glassmorphic design, 7 unique landing page variations, and comprehensive HR services showcase.

## Features

### Core Pages
- **Homepage** - Video hero background, services overview, company values, CTAs
- **Services** - Comprehensive showcase of all 17 HR services
- **About** - Jessika Hanger's bio, credentials, video showcase
- **Contact** - Lead capture form with Supabase integration

### 7 Landing Page Variations
1. **/variation1** - Minimalist Corporate (General HR Services)
2. **/variation2** - Bold Creative (Recruiting & Onboarding)
3. **/variation3** - Professional Classic (Compliance & Audits)
4. **/variation4** - Modern Tech Startup (Fractional HR Director)
5. **/variation5** - Warm Organic (Culture & DEI)
6. **/variation6** - Executive Premium (Executive Coaching)
7. **/variation7** - Single Page Scroll (Employee Relations & Investigations)

### 4 Interactive Funnel Pages (NEW!)
1. **/quiz** - Interactive Quiz Flow (60-second personalized solution)
2. **/consultation** - 3-Step Consultation Booking (service selection → time → contact)
3. **/assessment** - HR Health Assessment (5-question quiz with score)
4. **/quickstart** - Fast-Track Form (2-hour response guarantee)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.3.0
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase
- **Icons**: Lucide React

## Design Features

- Glassmorphic UI components
- Custom color palette (sage greens, warm tans, peachy oranges)
- Smooth scroll animations
- Mobile-responsive design
- Video backgrounds
- Form validation with real-time feedback

## Setup Instructions

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set Up Supabase Database

1. Create a new Supabase project at https://supabase.com
2. Run the SQL schema in `supabase-schema.sql` in your Supabase SQL Editor
3. Copy your project URL and anon key to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
rooted-people-website/
├── app/
│   ├── (core pages)
│   │   ├── page.tsx              # Homepage
│   │   ├── services/page.tsx     # Services page
│   │   ├── about/page.tsx        # About page
│   │   └── contact/page.tsx      # Contact page
│   ├── (variations)
│   │   ├── variation1/page.tsx   # Landing page 1
│   │   ├── variation2/page.tsx   # Landing page 2
│   │   └── ... (7 total)
│   ├── api/
│   │   ├── leads/route.ts        # Lead submission API
│   │   └── subscribe/route.ts    # Newsletter API
│   ├── layout.tsx                # Root layout with navigation
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── navigation/               # Header & Footer
│   ├── sections/                 # Page sections
│   └── forms/                    # Form components
├── lib/
│   ├── supabase.ts              # Supabase client
│   └── types.ts                 # TypeScript types
├── public/
│   ├── images/                  # Images & logo
│   └── videos/                  # Video assets
└── tailwind.config.ts           # Tailwind configuration
```

## Database Schema

The Supabase database includes three main tables:

1. **leads** - Contact form submissions
2. **service_inquiries** - Detailed service requests
3. **newsletter_subscribers** - Email subscribers

See `supabase-schema.sql` for complete schema with RLS policies.

## API Endpoints

### POST /api/leads
Submit a new lead with contact information and message.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "company": "string (optional)",
  "service_interest": "string (optional)",
  "message": "string",
  "source_page": "string"
}
```

### POST /api/subscribe
Subscribe to newsletter.

**Request Body:**
```json
{
  "email": "string",
  "name": "string (optional)"
}
```

## Custom Tailwind Utilities

The project includes custom glassmorphic utilities:

- `.glass-container` - Basic glass container
- `.glass-card` - Glass card with rounded corners
- `.glass-button` - Glassmorphic button
- `.glass-input` - Glass-styled input field
- `.text-gradient` - Gradient text effect

## Animations

All components use Framer Motion for smooth animations:

- Fade-in effects on scroll
- Slide-in animations
- Hover scale effects
- Page transitions
- Loading spinners

## Mobile Optimization

- Responsive grid layouts
- Hamburger menu for mobile navigation
- Touch-optimized buttons and forms
- Optimized video loading
- Simplified animations on mobile

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Build for Production

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a client project. For issues or updates, contact the development team.

## License

Proprietary - All rights reserved by Rooted People Services.

## Contact

For questions about the website:
- Website: https://rootedpeopleservices.com
- Email: contact@rootedpeopleservices.com
- LinkedIn: https://www.linkedin.com/in/jessika-hanger-1a5b9011a/
