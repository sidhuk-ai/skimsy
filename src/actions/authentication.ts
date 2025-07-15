"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function registerUser(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;

    
}

export async function authenticateUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("pwd") as string;
}

export async function authUser() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session || !session.session || !session.user) {
        return null;
    }

    return session;
}