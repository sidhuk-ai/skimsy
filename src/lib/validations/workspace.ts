import { z } from "zod"

export const workspaceFormSchema = z.object({
    workspaceName: z
        .string()
        .min(2, "Workspace name must be at least 2 characters")
        .max(50, "Workspace name must be less than 50 characters")
        .regex(/^[a-zA-Z0-9\s-_]+$/, "Workspace name can only contain letters, numbers, spaces, hyphens, and underscores"),

    useCase: z.string().min(1, "Please select a primary use case"),
    industry: z.string().min(1, "Please select your industry"),
    newsletterType: z.string().min(1, "Please select a newsletter type"),
})

export type WorkspaceFormData = z.infer<typeof workspaceFormSchema>

export const useCaseOptions = [
  {
    value: "marketing",
    label: "Marketing & Promotion",
    description: "Promote products, services, and brand awareness",
  },
  {
    value: "education",
    label: "Education & Training",
    description: "Share knowledge, tutorials, and educational content",
  },
  {
    value: "community",
    label: "Community Building",
    description: "Build and engage with your community",
  },
  {
    value: "ecommerce",
    label: "E-commerce & Sales",
    description: "Drive sales and showcase products",
  },
  {
    value: "news",
    label: "News & Updates",
    description: "Share company news and industry updates",
  },
  {
    value: "personal",
    label: "Personal Brand",
    description: "Build your personal brand and thought leadership",
  },
]

export const industryOptions = [
  { value: "technology", label: "Technology & Software" },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "finance", label: "Finance & Banking" },
  { value: "education", label: "Education & Training" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "manufacturing", label: "Manufacturing & Industrial" },
  { value: "real-estate", label: "Real Estate" },
  { value: "consulting", label: "Consulting & Professional Services" },
  { value: "media", label: "Media & Entertainment" },
  { value: "nonprofit", label: "Non-profit & Charity" },
  { value: "food", label: "Food & Beverage" },
  { value: "travel", label: "Travel & Hospitality" },
  { value: "fitness", label: "Fitness & Wellness" },
  { value: "automotive", label: "Automotive" },
  { value: "other", label: "Other" },
]

export const newsletterTypeOptions = [
  {
    value: "weekly",
    label: "Weekly Newsletter",
    description: "Regular weekly updates and content",
  },
  {
    value: "monthly",
    label: "Monthly Newsletter",
    description: "Monthly roundups and insights",
  },
  {
    value: "product-updates",
    label: "Product Updates",
    description: "Feature announcements and product news",
  },
  {
    value: "promotional",
    label: "Promotional Campaigns",
    description: "Sales, offers, and marketing campaigns",
  },
  {
    value: "educational",
    label: "Educational Content",
    description: "Tips, tutorials, and how-to guides",
  },
  {
    value: "event-based",
    label: "Event-based",
    description: "Event announcements and follow-ups",
  },
  {
    value: "transactional",
    label: "Transactional Emails",
    description: "Order confirmations, receipts, and notifications",
  },
]