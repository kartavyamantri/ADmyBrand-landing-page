export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export interface PricingFeature {
  text: string
  disabled?: boolean
}

export interface PricingTier {
  id: string
  name: string
  price: number
  period: 'month' | 'year'
  description: string
  features: PricingFeature[]
  popular?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface ContactForm {
  name: string
  email: string
  company: string
  message: string
} 