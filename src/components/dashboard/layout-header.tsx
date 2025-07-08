"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function LayoutHeader() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean); // ["dashboard", "settings"]
  
  const paths = segments.map((path,i) => {
    const href = "/" + segments.slice(0, i+1).join('/')
    const label = path.charAt(0).toUpperCase() + path.slice(1)
    return { href, label };
  })
  return (
    <>
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, i) => (
          <div key={i} className="flex gap-1.5 items-center">
            {pathname !== path.href ?
              <>
                <BreadcrumbItem className="pb-0.5">
                  <BreadcrumbLink href={path.href}>{path.label}</BreadcrumbLink>
                </BreadcrumbItem>
                {i < paths.length - 1 && <BreadcrumbSeparator />}
              </>
            :
              <BreadcrumbItem className="pb-0.5">
                <BreadcrumbPage>{path.label}</BreadcrumbPage>
              </BreadcrumbItem>
            }
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
    </>
  );
}
