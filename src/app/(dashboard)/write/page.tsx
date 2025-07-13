import Emaileditor from "@/components/builder/email.builder";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col justify-between space-y-4 p-4 md:p-8 pt-6">
      <Link href={'/dashboard'}>
      <div className="flex group hover:cursor-pointer">
        <ChevronLeft className="group-hover:-translate-x-1 group-hover:transition group-hover:ease-in-out translate-x-0 transition" />
        <span className="group-hover:underline">Exit</span>
      </div>
      </Link>
      <Emaileditor subjectTitle="test email" />
      <div className="flex gap-2 justify-end w-full">
        <Button size={"lg"} variant={"outline"} className="cursor-pointer">
          Save Draft
        </Button>
        <Button size={"lg"} className="cursor-pointer">
          Send
        </Button>
      </div>
    </div>
  );
}
