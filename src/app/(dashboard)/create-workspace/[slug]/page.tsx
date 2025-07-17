import { workspaceExists } from "@/actions/workspace"
import CreateWorkspacePage from "@/components/workspace/workspace-creation"
import { notFound } from "next/navigation";

export default async function page({
    params
}: {
    params: Promise<{ slug: string }> 
}) {
    const slug = (await params).slug

    const existingWorkspace = await workspaceExists(slug);

    if(existingWorkspace) return notFound();

    return <CreateWorkspacePage userId={slug} />
}