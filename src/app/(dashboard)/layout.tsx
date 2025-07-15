
import { authUser } from "@/actions/authentication";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {

  const userSession = await authUser();
  if(!userSession) redirect('/login');

  return (
    <>
    { children }
    </>
  )
}
