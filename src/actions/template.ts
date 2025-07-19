"use server";

import prisma from "@/lib/db";
import { generateSlug } from "@/lib/utils";

export async function saveTemplate({
    name,
    content,
    workspaceId
}: {
    name: string,
    content: string,
    workspaceId: string
}) {
    try {
        const slug = generateSlug(name,workspaceId);
        const savedTemp = await prisma.template.upsert({
            where: {
                workspaceId,
                slug
            },
            update: {
                html: content
            },
            create: {
                name,
                html: content,
                workspaceId,
                slug
            }
        })

        if(!savedTemp) return {msg: "Error occured while saving template"}
        return {msg: "Template saved successfully"}
    } catch (error) {
        console.log(error);
    }
}