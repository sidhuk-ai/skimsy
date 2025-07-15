import { authUser } from "@/actions/authentication";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const userSession = await authUser();
  if (userSession) redirect("/dashboard");

  return <>{children}</>;
}
