import { authUser } from "@/actions/authentication";
import SignUpPage from "@/components/auth-page/signup-page";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await authUser();
    if(session) redirect("/dashboard");

    return (
        <>
        <SignUpPage />
        </>
    )
}