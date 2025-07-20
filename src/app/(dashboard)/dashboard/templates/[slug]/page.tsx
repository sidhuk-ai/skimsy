import { getTemplates } from "@/actions/template";
import {
  columns,
  TemplateType,
} from "@/components/dashboard/templates-component/columns";
import { DataTable } from "@/components/dashboard/templates-component/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

async function getData(id: string): Promise<TemplateType[]> {
  const allTemplates = await getTemplates(id);

  return allTemplates ? allTemplates : [];
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getData(slug);
  return (
    <>
      <div className="w-full py-4 flex justify-between">
        <h1 className="text-2xl">Saved Templates</h1>
        <Button className="hover:scale-110 cursor-pointer hover:transition">
          <Plus />
          Create New
        </Button>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
