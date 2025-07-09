export type Plan = {
    name: string,
    description: string,
    price_id: string,
    price: number,
    billing_interval: string,
    features: string[],
    limitations?: string[]
};

export interface PlanCollections {
    plans: Plan[]
};

export const freePlan: Plan[] = [
  {
    name: "Ignite",
    description: "For new creators launching their first campaigns",
    price_id: "price_123_hatch", 
    price: 0,
    billing_interval: "monthly",
    features: [
      "Up to 1,500 subscribers",
      "Send up to 5 emails/month",
      "Basic drag-and-drop editor",
      "10 free templates",
      "Basic analytics: opens & clicks",
      "CSV subscriber import",
      "Community support"
    ],
    limitations: [
      "No automation/scheduling",
      "No branding customization"
    ]
  },
]

export const proPlan: Plan[] = [
  {
    name: "Momentum",
    description: "For growing newsletters scaling their impact",
    price_id: "price_456_soar",
    price: 19,
    billing_interval: "monthly",
    features: [
      "Up to 10,000 subscribers",
      "Unlimited emails/month",
      "Full access to the editor",
      "Premium template library",
      "Email scheduling + basic automation",
      "Detailed analytics: opens, clicks, bounces, unsubscribes",
      "A/B testing for subject lines",
      "Remove 'Powered by' branding",
      "Email support (24h response)"
    ]
  }
]

export const businessPlan: Plan[] = [
  {
    name: "Pinnacle",
    description: "For teams and brands delivering at scale",
    price_id: "price_789_rocket",
    price: 49,
    billing_interval: "monthly",
    features: [
      "Up to 50,000 subscribers",
      "Unlimited email campaigns",
      "Team collaboration (invite editors)",
      "Advanced automation (welcome flows, re-engagement)",
      "Custom blocks in the editor",
      "Advanced analytics dashboard (engagement, device)",
      "Webhook/API access",
      "Priority support",
      "Custom domain support (upcoming)"
    ]
  }
]