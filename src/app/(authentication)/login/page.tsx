import { authUser } from "@/actions/authentication";
import LoginPage from "@/components/auth-page/login-page";
import { redirect } from "next/navigation";

export default async function Page() {

    const session = await authUser();
    if(session) {
        redirect("/dashboard")
    }
    return (
        <>
        <LoginPage />
        </>
    )
}