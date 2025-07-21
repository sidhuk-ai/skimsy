"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowRight, Loader2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  onSuccess: (email: string) => void
  className?: string
}

export function NewsletterForm({ onSuccess, className }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Email address is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      onSuccess(email)
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className={cn("border-0 shadow-2xl bg-card/60 backdrop-blur-md newsletter-form-card", className)}>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium sr-only">
              Email Address
            </Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "pl-12 pr-4 h-14 text-lg bg-background/50 border-border/50 focus:bg-background transition-all duration-300",
                  "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                  error && "border-destructive focus:border-destructive focus:ring-destructive/20",
                )}
                disabled={isLoading}
                autoComplete="email"
              />
            </div>
            {error && <p className="text-sm text-destructive animate-in slide-in-from-top-1 duration-200">{error}</p>}
          </div>

          {/* Subscribe Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full h-14 text-lg font-semibold",
              "transition-all duration-500 group relative overflow-hidden",
              "shadow-lg hover:shadow-xl hover:shadow-primary/25",
              "subscribe-button",
              "cursor-pointer"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            {isLoading ? (
              <>
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Subscribe to Newsletter
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </Button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
