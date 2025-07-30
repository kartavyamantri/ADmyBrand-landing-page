import { PricingTier } from '@/types'

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small businesses getting started with AI marketing',
    features: [
      { text: 'AI Campaign Creation (10/month)' },
      { text: 'Basic Analytics Dashboard' },
      { text: 'Email Support' },
      { text: '2 Marketing Channels' },
      { text: 'Standard Templates' },
      { text: 'Basic A/B Testing' },
      { text: 'Advanced Analytics & Reporting', disabled: true },
      { text: 'Smart Audience Targeting', disabled: true },
      { text: 'Real-Time Optimization', disabled: true },
      { text: 'Custom AI Models', disabled: true },
      { text: 'API Access', disabled: true }
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
      { text: 'AI Campaign Creation (50/month)' },
      { text: 'Advanced Analytics & Reporting' },
      { text: 'Priority Support' },
      { text: 'Unlimited Marketing Channels' },
      { text: 'Custom Templates' },
      { text: 'Advanced A/B Testing' },
      { text: 'Smart Audience Targeting' },
      { text: 'Real-Time Optimization' },
      { text: 'Custom AI Models', disabled: true },
      { text: '24/7 Dedicated Support', disabled: true },
      { text: 'White-label Solutions', disabled: true },
      { text: 'API Access', disabled: true },
      { text: 'Custom Integrations', disabled: true }
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
      { text: 'Unlimited AI Campaign Creation' },
      { text: 'Custom Analytics & Insights' },
      { text: '24/7 Dedicated Support' },
      { text: 'Multi-Channel Integration' },
      { text: 'Custom AI Models' },
      { text: 'Advanced Automation' },
      { text: 'White-label Solutions' },
      { text: 'API Access' },
      { text: 'Custom Integrations' },
      { text: 'Advanced Security & Compliance' },
      { text: 'Custom Branding & Theming' },
      { text: 'Custom Training & Onboarding' },
      { text: 'Advanced Backup & Recovery' }
    ],
    cta: 'Contact Sales'
  }
] 