# Southlake Landscaping - Next.js Website

A modern, SEO-optimized lead generation website for a landscaping contractor serving Southlake, TX and surrounding DFW communities.

## Features

- **🏠 Homepage** with hero, services overview, projects gallery, testimonials, FAQ, and contact form
- **📍 City Pages** (`/cities/[city]`) - 24 cities with localized content
- **🔧 Service Pages** (`/cities/[city]/services/[service]`) - 28 services × 24 cities = 672 unique landing pages
- **📝 Blog Section** with article listings and individual post pages
- **📱 Fully Responsive** mobile-first design
- **🔍 SEO Optimized** with:
  - Dynamic meta tags and descriptions
  - Structured data (JSON-LD) for Local Business, Services, FAQs, and Blog Posts
  - XML sitemap auto-generation
  - Robots.txt configuration
  - Breadcrumb navigation
- **⚡ Performance** built with Next.js 14 and optimized images

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog posts
│   └── cities/
│       └── [city]/
│           ├── page.tsx    # City landing pages
│           └── services/
│               └── [service]/
│                   └── page.tsx  # Service + city pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   └── CTASection.tsx
├── data/
│   ├── cities.ts           # City data and helpers
│   ├── services.ts         # Service data and helpers
│   └── blog-posts.ts       # Blog content
├── lib/
│   └── seo.ts              # SEO utilities and business info
└── public/                 # Static assets
```

## Services Offered

### Landscaping
- Landscape Design
- Planting Services
- Tree Planting
- Sod Installation
- Mulch Installation
- River Rock & Gravel
- Softscaping
- Flower Bed Edging

### Hardscaping
- Hardscaping
- Paver Installation
- Concrete Work
- Flagstone Installation
- Stone Border & Edging
- Brick Work
- Outdoor Masonry
- Outdoor Fireplaces & Fire Pits
- Pergolas & Arbors
- Fencing

### Specialty Services
- Irrigation Systems
- Drainage Solutions
- French Drain Installation
- Outdoor Lighting
- Weed Barrier Installation
- Gutter & Downspout Drainage
- Custom Design & Build

### Maintenance
- Leaf Cleanup
- Landscape Cleanups

## Service Areas

Primary: **Southlake, TX**

Also serving: Keller, Colleyville, Grapevine, Trophy Club, Westlake, Roanoke, Flower Mound, Highland Village, Coppell, Lewisville, Frisco, Plano, McKinney, Fort Worth, North Richland Hills, Bedford, Euless, Hurst, Irving, Carrollton, Allen, Denton, Arlington (and more within 50 miles)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)**

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Business Information
Update your business details in `lib/seo.ts`:
- Company name
- Phone number
- Email
- Address
- Business hours
- Social media links

### Cities
Add or modify cities in `data/cities.ts`

### Services
Add or modify services in `data/services.ts`

### Blog Posts
Add or modify blog content in `data/blog-posts.ts`

## SEO Checklist

- [x] Unique meta titles and descriptions for all pages
- [x] Structured data (JSON-LD) for Local Business
- [x] Service schema for each service page
- [x] FAQ schema on FAQ sections
- [x] Breadcrumb schema for navigation
- [x] Blog post schema for articles
- [x] Auto-generated XML sitemap
- [x] Robots.txt configuration
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Mobile-responsive design

## License

Private - All rights reserved.



