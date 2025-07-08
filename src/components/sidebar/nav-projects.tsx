"use client";

import { Sparkles } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function NavProjects() {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Plan</SidebarGroupLabel>
      <SidebarMenu>
        <Card className="py-2.5 bg-accent/80 text-accent-foreground gap-4">
          <div className="flex justify-between px-2.5 items-center">
            <h5 className="text-sm pt-2">Free Plan</h5>
            <Button size={"sm"} className="pr-2">
              <Sparkles className="fill-white" /> Upgrade
            </Button>
          </div>
          <CardContent className="p-2.5 text-muted-foreground">
            <span className="text-sm">Total Subscribers</span>
            <Slider
              defaultValue={[1]}
              max={100}
              step={1}
              disabled
              className="my-2"
            />
            <p className="text-xs">1 of 2500 added</p>
          </CardContent>
        </Card>
      </SidebarMenu>
    </SidebarGroup>
  );
}
