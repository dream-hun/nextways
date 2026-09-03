import { Link } from '@inertiajs/react';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import BrandLogo from '@/components/brand-logo';
import { about, contact, home, projects, services } from '@/routes';
import type { RouteDefinition } from '@/wayfinder';

const socialLinks = [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'GitHub', href: '#', icon: Github },
    { label: 'YouTube', href: '#', icon: Youtube },
];

const serviceLinks = [
    { label: 'Services', href: services() },
    { label: 'Projects', href: projects() },
    { label: 'Contact', href: contact() },
];

const companyLinks = [
    { label: 'About', href: about() },
    { label: 'Our approach', href: about() },
    { label: 'Kigali, Rwanda', href: contact() },
];

export default function Footer() {
    return (
        <footer className="site-footer" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="container">
                <div className="footer-grid">
                    <div className="footer-intro">
                        <Link className="footer-brand" href={home()} prefetch>
                            <span className="sr-only">Next Ways home</span>
                            <BrandLogo className="brand-logo-image" alt="" />
                        </Link>
                        <p>
                            Building thoughtful digital experiences for people,
                            places, and ideas moving forward.
                        </p>
                        <div
                            className="footer-socials"
                            aria-label="Social links"
                        >
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a key={label} href={href} aria-label={label}>
                                    <Icon
                                        aria-hidden="true"
                                        size={17}
                                        strokeWidth={1.8}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <FooterLinkGroup title="What we do" links={serviceLinks} />
                    <FooterLinkGroup title="Company" links={companyLinks} />
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Next Ways</span>
                    <span>Sustainably driven · Kigali, Rwanda</span>
                </div>
            </div>
        </footer>
    );
}

function FooterLinkGroup({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: RouteDefinition<'get'> }[];
}) {
    return (
        <nav className="footer-link-group" aria-label={title}>
            <h3>{title}</h3>
            <ul>
                {links.map((link) => (
                    <li key={link.label}>
                        <Link href={link.href} prefetch>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
