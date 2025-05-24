# OneHub Landing Page

A modern, responsive demo landing page. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by enterprise SaaS platforms
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Component-Based**: Modular, reusable components following industry best practices
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── layout/
│   │   ├── site-header.tsx  # Navigation header with dropdown menus
│   │   └── site-footer.tsx  # Footer with links and social media
│   ├── sections/
│   │   ├── hero-section.tsx         # Hero section with main CTA
│   │   ├── logo-cloud.tsx           # Customer logos section
│   │   ├── features-section.tsx     # Platform features grid
│   │   ├── performance-section.tsx  # Performance metrics section
│   │   ├── use-cases-section.tsx    # Use cases grid
│   │   ├── integrations-section.tsx # Integration partners
│   │   ├── comparison-section.tsx   # Feature comparison table
│   │   ├── testimonial-section.tsx  # Customer testimonials
│   │   ├── pricing-section.tsx      # Pricing plans
│   │   ├── blog-section.tsx         # Latest blog posts
│   │   ├── faq-section.tsx          # FAQ accordion
│   │   └── cta-section.tsx          # Final call-to-action
│   ├── ui/
│   │   ├── page-loader.tsx  # Loading component
│   │   └── ...              # shadcn/ui components
│   └── ...
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── *.png                # Static images and assets
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd one-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

### Mobile Optimizations

- Collapsible navigation menu
- Stacked layouts for better mobile viewing
- Touch-friendly button sizes
- Optimized image loading

## 🎯 SEO & Accessibility

### SEO Features

- Semantic HTML structure
- Meta tags and Open Graph support
- Structured data markup
- Optimized images with alt text
- Clean URL structure

### Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators
- ARIA labels and roles
