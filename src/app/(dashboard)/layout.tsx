import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <>
    { children }
    </>
  )
}
