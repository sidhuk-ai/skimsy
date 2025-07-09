import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ban, Check } from "lucide-react";
import { businessPlan, freePlan, proPlan } from "@/lib/pricings";

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {freePlan.map((plan, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">{plan.name}</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  ${plan.price} / mo
                </span>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                {plan?.limitations?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Ban className="size-3 text-destructive" />
                    {item}
                  </li>
                ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/plan?choice=${plan.price_id}`}>
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}

          {proPlan.map((plan, i) => (
            <Card key={i} className="relative">
              <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                Popular
              </span>

              <div className="flex flex-col gap-6 ">
                <CardHeader>
                  <CardTitle className="font-medium">{plan.name}</CardTitle>
                  <span className="my-3 block text-2xl font-semibold">
                    ${plan.price} / mo
                  </span>
                  <CardDescription className="text-sm">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <hr className="border-dashed" />
                  <ul className="list-outside space-y-3 text-sm">
                    {plan.features.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="size-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/plan?choice=${plan.price_id}`}>
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}

          {businessPlan.map((plan, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">{plan.name}</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  ${plan.price} / mo
                </span>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/plan?choice=${plan.price_id}`}>
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
