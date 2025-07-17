"use server";

import prisma from "@/lib/db";
import { existingUser } from "./authentication";
import { generateSlug } from "@/lib/utils";

export async function workspaceDetails(userId: string) {
    const workspace = await prisma.workspace.findUnique({
        where: {
            userId
        },
        select: {
            id: true,
            name: true,
            slug: true
        }
    });

    if (!workspace) return null;

    return workspace
}

export async function workspaceExists( userId?: string, id?: string, slug?: string ) {
    const options = {
        userId,
        id,
        slug
    }
    const data = await prisma.workspace.findUnique({
        where: {
            ...options
        },
        select: {
            id: true
        }
    })

    return !!data;
}

export async function createWorkspace( userId: string, workspaceName: string ) {
    const userExists = await existingUser(userId);

    if(!userExists) throw new Error("No user found in Database");

    const slug = generateSlug(workspaceName, userId)

    const response = await prisma.workspace.create({
        data: {
            name: workspaceName,
            userId: userId,
            slug
        },
        select: {
            id: true,
            slug: true,
            name: true
        }
    })

    if(!response) throw new Error("Error occured while creating workspace.");

    return response
}
