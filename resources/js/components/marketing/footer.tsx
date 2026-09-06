import { Link, usePage } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import BrandLogo from '@/components/brand-logo';
import { about, contact, home, projects, services } from '@/routes';
import type { RouteDefinition } from '@/wayfinder';

type FooterLink = {
    label: string;
    href: RouteDefinition<'get'>;
};

const exploreLinks: FooterLink[] = [
    { label: 'Home', href: home() },
    { label: 'Services', href: services() },
    { label: 'Projects', href: projects() },
];

const companyLinks: FooterLink[] = [
    { label: 'About us', href: about() },
    { label: 'Our approach', href: about() },
    { label: 'Contact', href: contact() },
];

const footerLinkClassName =
    'text-paper/70 hover:text-paper inline-flex min-h-6 items-center text-sm leading-6 transition-colors';

export default function Footer() {
    const { siteContact } = usePage().props;
    const socialLinks = [
        { label: 'LinkedIn', href: siteContact.linkedin, icon: Linkedin },
        { label: 'Facebook', href: siteContact.facebook, icon: Facebook },
        { label: 'Instagram', href: siteContact.instagram, icon: Instagram },
        { label: 'X / Twitter', href: siteContact.twitter, icon: Twitter },
        { label: 'YouTube', href: siteContact.youtube, icon: Youtube },
    ].filter((link): link is typeof link & { href: string } =>
        Boolean(link.href),
    );
    return (
        <footer
            className="bg-forest-deep text-paper marketing-gutter"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-7xl pt-16 pb-8 sm:pt-20 lg:pt-24">
                <div className="border-paper/20 grid gap-x-10 gap-y-14 border-b pb-16 sm:grid-cols-2 sm:pb-20 lg:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-2 lg:col-span-5">
                        <Link className="inline-block" href={home()} prefetch>
                            <span className="sr-only">Next Ways home</span>
                            <span className="relative block h-16 w-32 overflow-hidden">
                                <BrandLogo
                                    width={256}
                                    height={256}
                                    className="absolute -top-24.5 -left-16 w-64 max-w-none brightness-0 invert"
                                    alt=""
                                />
                            </span>
                        </Link>

                        <p className="text-paper/70 mt-6 max-w-[34ch] text-sm leading-6 text-pretty">
                            Field-informed environmental and agribusiness
                            advisory. Grounded in Rwanda. Working across East
                            Africa.
                        </p>

                        {socialLinks.length > 0 && (
                            <nav className="mt-8" aria-label="Social media">
                                <ul
                                    className="flex flex-wrap gap-3"
                                    role="list"
                                >
                                    {socialLinks.map(
                                        ({ label, href, icon: SocialIcon }) => (
                                            <li key={label}>
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={label}
                                                    className="border-paper/25 text-paper/75 hover:bg-paper hover:text-forest inline-flex h-11 w-11 items-center justify-center rounded-full border transition-[background-color,color,border-color]"
                                                >
                                                    <SocialIcon
                                                        aria-hidden="true"
                                                        size={18}
                                                        strokeWidth={1.8}
                                                    />
                                                </a>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </nav>
                        )}
                    </div>

                    <FooterLinkGroup
                        title="Explore"
                        links={exploreLinks}
                        className="lg:col-span-2"
                    />

                    <FooterLinkGroup
                        title="Company"
                        links={companyLinks}
                        className="lg:col-span-2"
                    />

                    <section className="sm:col-span-2 lg:col-span-3">
                        <h3 className="text-sage-pale text-xs font-bold tracking-[0.17em] uppercase">
                            Contacts
                        </h3>
                        <address className="mt-6 not-italic">
                            <ul className="flex flex-col gap-5" role="list">
                                <li>
                                    <p className="text-paper/45 text-[0.68rem] font-bold tracking-[0.14em] uppercase">
                                        Email
                                    </p>
                                    <a
                                        className={`${footerLinkClassName} mt-1 break-all`}
                                        href={`mailto:${siteContact.email}`}
                                    >
                                        {siteContact.email}
                                    </a>
                                </li>
                                <li>
                                    <p className="text-paper/45 text-[0.68rem] font-bold tracking-[0.14em] uppercase">
                                        Phone
                                    </p>
                                    <a
                                        className={`${footerLinkClassName} mt-1`}
                                        href={`tel:${siteContact.phone.replace(/[^+\d]/g, '')}`}
                                    >
                                        {siteContact.phone}
                                    </a>
                                </li>
                                <li>
                                    <p className="text-paper/45 text-[0.68rem] font-bold tracking-[0.14em] uppercase">
                                        Address
                                    </p>
                                    <a
                                        className={`${footerLinkClassName} mt-1 max-w-[28ch] items-start`}
                                        href={`https://maps.google.com/?q=${encodeURIComponent(siteContact.address)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {siteContact.address}
                                    </a>
                                </li>
                            </ul>
                        </address>
                    </section>
                </div>

                <div className="text-paper/55 flex flex-col gap-2 pt-7 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Next Ways Ltd. All rights
                        reserved.
                    </p>
                    <p>Sustainably driven · Kigali, Rwanda</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLinkGroup({
    title,
    links,
    className,
}: {
    title: string;
    links: FooterLink[];
    className?: string;
}) {
    return (
        <nav className={className} aria-label={title}>
            <h3 className="text-sage-pale text-xs font-bold tracking-[0.17em] uppercase">
                {title}
            </h3>
            <ul className="mt-6 flex flex-col gap-3" role="list">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            prefetch
                            className={footerLinkClassName}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
