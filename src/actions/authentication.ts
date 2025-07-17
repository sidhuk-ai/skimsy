"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { headers } from "next/headers";

export async function authUser() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session || !session.session || !session.user) {
        return null;
    }

    return session;
}

export async function userDetails(userId: string) {
    const details = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            image: true
        }
    })

    if(!details) return null;

    return details;
}

export async function existingUser(userId: string) {
    const userData = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true
        }
    });

    return !!userData;
}