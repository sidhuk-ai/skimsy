"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Sparkles, Rocket } from "lucide-react"
import type { WorkspaceFormData } from "@/lib/validations/workspace"

interface WorkspaceSuccessProps {
  workspaceData: WorkspaceFormData
  onContinue: () => void
  className?: string
}

export function WorkspaceSuccess({ workspaceData, onContinue, className }: WorkspaceSuccessProps) {
  return (
    <Card className={`w-full max-w-2xl mx-auto border-0 shadow-xl bg-card/50 backdrop-blur-sm ${className}`}>
      <CardHeader className="text-center pb-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">Workspace Created Successfully!</CardTitle>
        <CardDescription className="text-base">
          Your workspace is ready. Let's start building your website.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Workspace Summary */}
        <div className="p-4 bg-muted/50 rounded-lg space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            {workspaceData.workspaceName}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-muted-foreground">Industry:</span>
              <Badge variant="secondary" className="ml-2">
                {workspaceData.industry}
              </Badge>
            </div>
            <div>
              <span className="text-muted-foreground">Website Type:</span>
              <Badge variant="secondary" className="ml-2">
                {workspaceData.newsletterType}
              </Badge>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">Use Case:</span>
            <p className="mt-1 text-sm">{workspaceData.useCase}</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            What's Next?
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <span>Workspace created and configured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span>Choose from curated templates for your industry</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <span>Customize your design with our drag-and-drop editor</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <span>Launch your website with a custom domain</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 group"
          >
            Continue to Templates
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
