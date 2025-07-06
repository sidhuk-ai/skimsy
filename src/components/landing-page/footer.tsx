import Link from 'next/link'
import ModeToggle from '../mode-toggle'

const links = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Solution',
        href: '#',
    },
    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#',
    },
    {
        title: 'Help',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-y bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <div className="flex items-center gap-3 flex-row-reverse md:flex-row">
                        <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Skimsy, All rights reserved</span>
                        <ModeToggle />
                    </div>
                    <div className="order-first flex flex-wrap justify-center items-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}