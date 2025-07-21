import NewsletterPage from "@/components/dashboard/site-components/newsletter-page";

export default async function Page({
    params
}: { params: Promise<{ slug: string }>}) {

    const slug = (await params).slug;

    return (
        <NewsletterPage />
    )
}