import { PricingTier } from '@/types'

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small businesses getting started with AI marketing',
    features: [
      'AI Campaign Creation (10/month)',
      'Basic Analytics Dashboard',
      'Email Support',
      '2 Marketing Channels',
      'Standard Templates',
      'Basic A/B Testing'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    period: 'month',
    description: 'Ideal for growing businesses with advanced marketing needs',
    features: [
      'AI Campaign Creation (50/month)',
      'Advanced Analytics & Reporting',
      'Priority Support',
      'Unlimited Marketing Channels',
      'Custom Templates',
      'Advanced A/B Testing',
      'Smart Audience Targeting',
      'Real-Time Optimization'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    period: 'month',
    description: 'For large organizations requiring maximum performance and support',
    features: [
      'Unlimited AI Campaign Creation',
      'Custom Analytics & Insights',
      '24/7 Dedicated Support',
      'Multi-Channel Integration',
      'Custom AI Models',
      'Advanced Automation',
      'White-label Solutions',
      'API Access',
      'Custom Integrations'
    ],
    cta: 'Contact Sales'
  }
] 