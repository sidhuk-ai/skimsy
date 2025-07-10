"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Mail, MousePointer, Target, ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const overviewData = [
  {
    title: "Total Subscribers",
    value: "45,231",
    change: "+20.1%",
    trend: "up",
    icon: Users,
    description: "from last month",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    title: "Emails Sent",
    value: "12,234",
    change: "+15.3%",
    trend: "up",
    icon: Mail,
    description: "this month",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/50",
  },
  {
    title: "Open Rate",
    value: "24.5%",
    change: "-2.1%",
    trend: "down",
    icon: MousePointer,
    description: "from last month",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/50",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.8%",
    trend: "up",
    icon: Target,
    description: "from last month",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
  },
]

export function OverviewCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {overviewData.map((item, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {item.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="text-3xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300">
              {item.value}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {item.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <Badge
                  variant="secondary"
                  className={`text-xs font-medium ${
                    item.trend === "up"
                      ? "text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30"
                      : "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30"
                  }`}
                >
                  {item.change}
                </Badge>
              </div>
              <span className="text-xs text-muted-foreground">{item.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
