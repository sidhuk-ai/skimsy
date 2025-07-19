import { authUser } from "@/actions/authentication";
import Emaileditor from "@/components/builder/email.builder";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface DynamicPathProps {
  param: Promise<{ slug: string }>
}

export default async function Page({ param }: DynamicPathProps) {
  const session = await authUser();
  if(!session) redirect("/login");

  const slug = (await param).slug
  return (
    <div className="flex min-h-screen flex-col justify-between space-y-4 p-4 md:p-8 pt-6">
      <Link href={'/dashboard'}>
      <div className="flex group hover:cursor-pointer">
        <ChevronLeft className="group-hover:-translate-x-1 group-hover:transition group-hover:ease-in-out translate-x-0 transition" />
        <span className="group-hover:underline">Exit</span>
      </div>
      </Link>
      <Emaileditor tempName="test email" workspaceId={slug} />
    </div>
  );
}
