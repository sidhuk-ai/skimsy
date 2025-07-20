"use server";

import prisma from "@/lib/db";
import { generateSlug } from "@/lib/utils";
import { workspaceExists } from "./workspace";

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

export async function getTemplates(workspaceId: string) {
    const existingWorkspace = await workspaceExists({id: workspaceId});

    if(!existingWorkspace) return null;

    const templates = await prisma.template.findMany({
        where: {
            workspaceId
        },
        select: {
            id: true,
            name: true,
            updatedAt: true,
            createdAt: true
        }
    });

    return templates
}