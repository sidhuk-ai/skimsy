"use client"

import { useEffect, useId, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export default function ModeToggle() {
  const id = useId()
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    (theme === "dark" || theme === "system") && setChecked(checked => !checked);
  },[]);

  const themeChange = () => {
    if(checked) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
    setChecked(checked => !checked)
  };

  return (
    <div>
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={themeChange}
          className="peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-muted absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
        />
        <span className="peer-data-[state=checked]:text-muted-foreground pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
            <SunIcon size={16} aria-hidden="true" />
        </span>
        <span className="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
            <MoonIcon size={16} aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
