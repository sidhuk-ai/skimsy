"use server";

import { auth } from "@/lib/auth";
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