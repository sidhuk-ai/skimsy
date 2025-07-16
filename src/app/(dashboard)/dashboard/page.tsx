import { authUser } from "@/actions/authentication";
import { EmailPerformanceMetrics } from "@/components/dashboard/email-performance-metrics";
import { GrowthMetrics } from "@/components/dashboard/growth-metrics";
import { OverviewCards } from "@/components/dashboard/overview-cards";

export default async function Page() {
  const session = await authUser();
  return (
    <>
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Welcome back, {session?.user.name.split(" ")[0]}
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your email campaigns today.
        </p>
      </div>

      {/* Overview Cards */}
      <OverviewCards />

      <div className="grid gap-8 xl:grid-cols-2">
        <GrowthMetrics />
        <EmailPerformanceMetrics />
      </div>
    </>
  );
}
