import LayoutHeader from "@/components/dashboard/layout-header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <LayoutHeader />
          </div>
        </header>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
