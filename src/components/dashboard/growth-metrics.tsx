"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, UserMinus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const subscriberGrowthData = [
  { date: "2024-06-01", totalSubscribers: 120 },
  { date: "2024-06-02", totalSubscribers: 190 },
  { date: "2024-06-03", totalSubscribers: 270 },
  { date: "2024-06-04", totalSubscribers: 340 },
  { date: "2024-06-05", totalSubscribers: 410 },
  { date: "2024-06-06", totalSubscribers: 490 },
  { date: "2024-06-07", totalSubscribers: 580 },
  { date: "2024-06-08", totalSubscribers: 650 },
  { date: "2024-06-09", totalSubscribers: 730 },
  { date: "2024-06-10", totalSubscribers: 800 },
  { date: "2024-06-11", totalSubscribers: 900 },
  { date: "2024-06-12", totalSubscribers: 1010 },
  { date: "2024-06-13", totalSubscribers: 1150 },
  { date: "2024-06-14", totalSubscribers: 1290 },
  { date: "2024-06-15", totalSubscribers: 1360 },
  { date: "2024-06-16", totalSubscribers: 1410 },
  { date: "2024-06-17", totalSubscribers: 1520 },
  { date: "2024-06-18", totalSubscribers: 1640 },
  { date: "2024-06-19", totalSubscribers: 1720 },
  { date: "2024-06-20", totalSubscribers: 1805 },
  { date: "2024-06-21", totalSubscribers: 1910 },
  { date: "2024-06-22", totalSubscribers: 1995 },
  { date: "2024-06-23", totalSubscribers: 2080 },
  { date: "2024-06-24", totalSubscribers: 2210 },
  { date: "2024-06-25", totalSubscribers: 2345 },
  { date: "2024-06-26", totalSubscribers: 2480 },
  { date: "2024-06-27", totalSubscribers: 2615 },
  { date: "2024-06-28", totalSubscribers: 2750 },
  { date: "2024-06-29", totalSubscribers: 2875 },
  { date: "2024-06-30", totalSubscribers: 3000 },
];

const chartConfig = {
  totalSubscribers: {
    label: "Subscribers",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function GrowthMetrics() {
  const [timeRange, setTimeRange] = useState("30d");
  const filteredData = subscriberGrowthData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return (
    <div className="space-y-6">
      {/* Subscriber Growth Card */}
      <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card via-card to-card/80">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                Subscriber Growth
              </CardTitle>
              <CardDescription className="text-base">
                Monthly subscriber growth and acquisition trends
              </CardDescription>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-100">
              +12.5% this month
            </Badge>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillSubscriber" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-totalSubscribers)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-totalSubscribers)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={{ strokeDasharray: "3 3", stroke: "#8884d8" }}
                content={(props) => (
                  <ChartTooltipContent
                    {...props}
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    indicator="dashed"
                  />
                )}
              />

              <Area
                dataKey="totalSubscribers"
                type="natural"
                fill="url(#fillSubscriber)"
                stroke="var(--color-totalSubscribers)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Churn Rate Card */}
      <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card via-card to-card/80">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/50 group-hover:scale-110 transition-transform duration-300">
                  <UserMinus className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                Churn Rate
              </CardTitle>
              <CardDescription className="text-base">
                Monthly churn rate percentage trends
              </CardDescription>
            </div>
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-100">
              1.8% current
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
            <div className="text-center space-y-3">
              <div className="p-4 rounded-full bg-red-500/10 w-fit mx-auto">
                <UserMinus className="h-8 w-8 text-red-500" />
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                Churn Rate Chart to be shown here
              </p>
              <p className="text-sm text-muted-foreground/70">
                Line chart showing monthly churn trends
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
