"use client";

import { useState } from "react";
import { WorkspaceForm } from "@/components/workspace/workspace-form";
import { WorkspaceSuccess } from "@/components/workspace/workspace-success";
import type { WorkspaceFormData } from "@/lib/validations/workspace";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createWorkspace } from "@/actions/workspace";
import { toast } from "sonner";

export default function CreateWorkspacePage({ userId }: { userId: string }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [workspaceData, setWorkspaceData] = useState<WorkspaceFormData | null>( null );
  const router = useRouter();

  const handleFormSubmit = async (data: WorkspaceFormData) => {
    // Simulate API call
    const promise = createWorkspace(userId, data.workspaceName);

    toast.promise(promise,{
      loading: "Loading...",
      success: (resp) => {
        return `${resp.name} Created`
      },
      error: "Error occured while creating workspace."
    })
    setWorkspaceData(data);
    setIsSuccess(true);
  };

  const handleContinue = () => {
    console.log("Navigating to templates...");
    router.push("/dashboard/templates");
  };

  const handleCancel = () => {
    console.log("Canceling workspace creation...");
    // In a real app, navigate back to dashboard
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {!isSuccess ? (
          <>
            {/* Content Grid */}
            <div className="flex items-center justify-center">
              {/* Form Section */}
              <div className="">
                <WorkspaceForm
                  onSubmit={handleFormSubmit}
                  onCancel={handleCancel}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Success Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {workspaceData?.workspaceName}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Your workspace is ready to go!
              </p>
            </div>

            {/* Success Component */}
            <WorkspaceSuccess
              workspaceData={workspaceData!}
              onContinue={handleContinue}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm py-6 mt-auto">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Vectora. All rights reserved. |{" "}
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
