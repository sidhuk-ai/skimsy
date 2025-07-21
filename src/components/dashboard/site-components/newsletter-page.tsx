"use client"

import { useState } from "react"
import { NewsletterHeader } from "./newsletter-header"
import { NewsletterForm } from "./newsletter-form"
import { NewsletterSuccess } from "./newsletter-success"
export default function NewsletterPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [subscribedEmail, setSubscribedEmail] = useState("")

  const handleSubscriptionSuccess = (email: string) => {
    setSubscribedEmail(email)
    setIsSuccess(true)
  }

  const handleContinue = () => {
    // In a real app, navigate to dashboard or home
    console.log("Navigating to main application...")
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      {/* Main Content */}
      <main className="container px-4 py-16 md:py-24 relative z-10">
        {!isSuccess ? (
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header Section */}
            <NewsletterHeader />

            {/* Form Section */}
            <div className="max-w-md mx-auto">
              <NewsletterForm onSuccess={handleSubscriptionSuccess} />
            </div>
          </div>
        ) : (
          <NewsletterSuccess email={subscribedEmail} onContinue={handleContinue} />
        )}
      </main>
    </div>
  )
}
