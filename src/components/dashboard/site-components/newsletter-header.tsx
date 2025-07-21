"use client"

import { Badge } from "@/components/ui/badge"
import { Mail, Users, TrendingUp } from "lucide-react"

interface NewsletterHeaderProps {
  className?: string
}

export function NewsletterHeader({ className }: NewsletterHeaderProps) {
  return (
    <div className={`text-center space-y-8 ${className}`}>
      {/* Badge */}
      <div className="animate-in fade-in-0 slide-in-from-top-4 duration-800">
        <Badge variant="secondary" className="px-4 py-2 bg-card/50 backdrop-blur-sm border-primary/20">
          <Mail className="h-4 w-4 mr-2 text-primary" />
          Stay Updated
        </Badge>
      </div>

      {/* Main Heading */}
      <div className="space-y-4 animate-in fade-in-0 slide-in-from-top-4 duration-800 delay-200">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Welcome to the{" "}
          <span className="bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 text-transparent bg-clip-text">
            Skimsy
          </span>{" "}
          Newsletter
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Get the latest updates, design tips, and exclusive insights delivered straight to your inbox. Join thousands
          of creators building amazing websites.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 text-sm animate-in fade-in-0 slide-in-from-top-4 duration-800 delay-400">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4 text-primary" />
          <span>25,000+ subscribers</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span>Weekly insights</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span>Exclusive content</span>
        </div>
      </div>
    </div>
  )
}
