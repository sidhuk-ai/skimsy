import { authUser } from "@/actions/authentication";
import { workspaceExists } from "@/actions/workspace"
import CreateWorkspacePage from "@/components/workspace/workspace-creation"
import { notFound, redirect } from "next/navigation";

export default async function page({
    params
}: {
    params: Promise<{ slug: string }> 
}) {
    const slug = (await params).slug

    const userDetails = await authUser();
    if(!userDetails) redirect("/login");

    const existingWorkspace = await workspaceExists({userId: userDetails.session.userId});

    if(existingWorkspace) return notFound();

    return <CreateWorkspacePage userId={slug} />
}