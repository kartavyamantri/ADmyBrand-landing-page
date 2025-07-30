# ADmyBRAND AI Suite - Modern SaaS Landing Page

A stunning, modern landing page for "ADmyBRAND AI Suite" - an AI-powered marketing platform. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: 2025 design trends with glassmorphism, subtle animations, and premium feel
- **Responsive**: Mobile-first design that works flawlessly on all devices
- **Performance Optimized**: Fast loading with Next.js 14+ and optimized images
- **Component Library**: 8+ reusable components (Button, Card, Modal, etc.)
- **Smooth Animations**: Framer Motion powered scroll animations and interactions
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kartavyamantri/ADmyBrand-landing-page
   cd ADmyBrand-landing-page
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

## 📁 Project Structure

```
admybrand-ai-suite/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main landing page
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   └── input.tsx            # Input component
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx           # Navigation bar
│   │   └── footer.tsx           # Footer component
│   └── sections/                # Page sections
│       ├── hero.tsx             # Hero section
│       ├── features.tsx         # Features section
│       ├── pricing.tsx          # Pricing section
│       ├── testimonials.tsx     # Testimonials section
│       └── faq.tsx              # FAQ section
├── data/                        # Static data
│   ├── features.ts              # Features data
│   ├── pricing.ts               # Pricing tiers
│   ├── testimonials.ts          # Customer testimonials
│   └── faq.ts                   # FAQ data
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.js               # Next.js configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Secondary**: Purple gradient (`#d946ef` to `#c026d3`)
- **Dark**: Dark theme with glassmorphism effects

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (body text)

### Components
- **Glass Cards**: Backdrop blur with transparency
- **Gradient Buttons**: Primary and secondary gradients
- **Animated Elements**: Smooth scroll-triggered animations

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Landing Page Sections

1. **Hero Section**: Compelling headline, CTA buttons, animated background
2. **Features**: 6 AI-powered marketing features with icons
3. **Pricing**: 3 pricing tiers with feature comparisons
4. **Testimonials**: Customer reviews with ratings and avatars
5. **FAQ**: Collapsible questions and answers
6. **Footer**: Links, social media, and contact information


```

### Styling
- Global styles: `app/globals.css`
- Component styles: Individual component files
- Tailwind utilities: Use Tailwind classes directly


## 📦 Dependencies

### Core
- **Next.js 14+**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Utilities
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind class merging
- **react-hook-form**: Form handling
- **react-intersection-observer**: Scroll animations

## 🎨 Design Features

### 2025 Design Trends
- **Glassmorphism**: Backdrop blur effects
- **Subtle Animations**: Smooth scroll-triggered animations
- **Modern Typography**: Clear hierarchy with Poppins and Inter
- **Gradient Accents**: Primary and secondary color gradients
- **Micro-interactions**: Hover effects and transitions

### Performance Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer

---
