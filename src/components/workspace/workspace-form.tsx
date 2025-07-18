"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  industryOptions,
  newsletterTypeOptions,
  useCaseOptions,
  workspaceFormSchema,
  type WorkspaceFormData,
} from "@/lib/validations/workspace";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Globe,
  Loader2,
  Rocket,
  Save,
  Target,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface WorkspaceFormProps {
  onSubmit: (data: WorkspaceFormData) => Promise<void>;
  onCancel: () => Promise<void>;
  initialData?: Partial<WorkspaceFormData>;
  className?: string;
}

export function WorkspaceForm({
  onSubmit,
  onCancel,
  initialData,
  className,
}: WorkspaceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  

  const form = useForm<WorkspaceFormData>({
    resolver: zodResolver(workspaceFormSchema),
    defaultValues: {
      workspaceName: initialData?.workspaceName || "",
      useCase: initialData?.useCase || "",
      industry: initialData?.industry || "",
      newsletterType: initialData?.newsletterType || "",
      ...initialData,
    },
  });

  const handleSubmit = async (data: WorkspaceFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } catch (error) {
      toast.error(`Workspace creation error: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = async () => {
    setIsCancelling(true);
    try {
      await onCancel();
    } catch (error) {
      toast.error(`Unexpected error occured: ${error}`);
      setIsCancelling(false);
    }
  };

  return (
    <Card
      className={cn(
        "w-full max-w-2xl mx-auto border-0 shadow-xl bg-card/50 backdrop-blur-sm",
        className
      )}
    >
      <CardHeader className="text-center pb-6">
        <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center mb-4">
          <Rocket className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">Workspace Details</CardTitle>
        <CardDescription className="text-base">
          Provide some information about your project to get started with the
          right tools and templates
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <div className="space-y-8">
              {/* Workspace Name */}
              <FormField
                control={form.control}
                name="workspaceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Workspace Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="My Awesome Project"
                        {...field}
                        className="text-lg h-12 bg-background/50 border-border/50 focus:bg-background transition-colors"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>
                      Choose a name that represents your project or business
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Primary Use Case */}
              <FormField
                control={form.control}
                name="useCase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      Primary Use Case
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger className="cursor-pointer h-12 w-full bg-background/50 border-border/50 focus:bg-background transition-colors">
                          <SelectValue placeholder="Select your use case" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        {useCaseOptions.map((industry) => (
                          <SelectItem
                            key={industry.value}
                            value={industry.value}
                            className="py-3"
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>{industry.label}</span>
                              {industry.value === "marketing" && (
                                <Badge className="bg-primary rounded-full mx-1">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Help us understand your goals to provide better templates
                      and suggestions
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Industry Selection */}
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Industry
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger className="cursor-pointer h-12 w-full bg-background/50 border-border/50 focus:bg-background transition-colors">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        {industryOptions.map((industry) => (
                          <SelectItem
                            key={industry.value}
                            value={industry.value}
                            className="py-3"
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>{industry.label}</span>
                              {industry.value === "retail" && (
                                <Badge className="bg-primary rounded-full mx-1">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This helps us recommend relevant templates and features
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Newsletter Type Selection */}
              <FormField
                control={form.control}
                name="newsletterType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      Newsletter Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger className="cursor-pointer !h-13 w-full bg-background/50 border-border/50 focus:bg-background transition-colors">
                          <SelectValue placeholder="Select website type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[400px]">
                        {newsletterTypeOptions.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="py-4"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center justify-between w-full">
                                <span className="font-medium">
                                  {type.label}
                                </span>
                                {(type.value === "weekly" ||
                                  type.value === "monthly" ||
                                  type.value === "promotional") && (
                                  <Badge className="bg-primary rounded-full mx-1">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground/70">
                                {type.description}
                              </p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the type that best matches your website goals
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t ${className}`}
            >
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isCancelling || isSubmitting}
                className="sm:w-auto bg-transparent cursor-pointer"
              >
                {isCancelling ? "Redirecting..." : "Skip"}
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting || isCancelling}
                className="bg-gradient-to-r from-primary cursor-pointer to-primary/50 hover:primary/90 transition-all duration-300 group sm:w-auto min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Create Workspace
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
