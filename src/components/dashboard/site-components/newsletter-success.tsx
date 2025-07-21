"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Mail, Gift } from "lucide-react"

interface NewsletterSuccessProps {
  email: string
  onContinue: () => void
  className?: string
}

export function NewsletterSuccess({ email, className }: NewsletterSuccessProps) {
  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Success Animation */}
      <div className="text-center mb-8 animate-in zoom-in-50 duration-500">
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 success-pulse">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to the{" "}
          <span className="bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 text-transparent bg-clip-text">Skimsy</span>{" "}
          Community!
        </h1>
        <p className="text-lg text-muted-foreground">
          Thank you for subscribing to our newsletter. You're all set to receive amazing content.
        </p>
      </div>

      {/* Success Card */}
      <Card className="border-0 shadow-2xl bg-card/60 backdrop-blur-md animate-in slide-in-from-bottom-4 duration-500 delay-200">
        <CardContent className="p-8 space-y-6">
          {/* Email Confirmation */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Subscription confirmed for:</p>
                <p className="text-primary font-semibold">{email}</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              What's Next?
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-muted-foreground">We've sent a welcome email with exclusive resources</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium">Weekly newsletter</p>
                  <p className="text-muted-foreground">Get design tips, product updates, and industry insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium">Exclusive access</p>
                  <p className="text-muted-foreground">Be the first to know about new features and beta releases</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          {/* <div className="pt-4">
            <Button
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 group"
            >
              Continue to Vectora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  )
}
