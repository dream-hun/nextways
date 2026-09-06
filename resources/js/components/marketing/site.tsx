import { Head, Link, usePage } from '@inertiajs/react';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useState, type ReactNode } from 'react';
import BrandLogo, { BRAND_LOGO_PATH } from '@/components/brand-logo';
import Footer from '@/components/marketing/footer';
import { about, contact, home, projects, services } from '@/routes';
import {
    MARKETING_LENIS_OPTIONS,
    MARKETING_SHELL_CLASS_NAME,
    setupMarketingReveals,
} from '@/lib/marketing-motion';
import { cn } from '@/lib/utils';
import type { RouteDefinition } from '@/wayfinder';
import 'lenis/dist/lenis.css';

type MarketingRouteName =
    | 'home'
    | 'about'
    | 'services'
    | 'projects'
    | 'contact';

const routes: Record<MarketingRouteName, () => RouteDefinition<'get'>> = {
    home,
    about,
    services,
    projects,
    contact,
};

const navItems: { label: string; route: MarketingRouteName }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Projects', route: 'projects' },
];

type PageHeroImage = {
    fallbackSrc: string;
    webpSrc: string;
    mobileWebpSrc: string;
    width: number;
    height: number;
    objectPosition: string;
};

export const MARKETING_HERO_IMAGES = {
    home: {
        fallbackSrc: '/images/nextways-fieldwork.png',
        webpSrc: '/images/nextways-fieldwork.webp',
        mobileWebpSrc: '/images/nextways-fieldwork-768.webp',
        width: 1536,
        height: 1024,
        objectPosition: '68% center',
    },
    about: {
        fallbackSrc: '/images/nextways-about.png',
        webpSrc: '/images/nextways-about.webp',
        mobileWebpSrc: '/images/nextways-about-768.webp',
        width: 1536,
        height: 1024,
        objectPosition: '72% center',
    },
    services: {
        fallbackSrc: '/images/nextways-services.png',
        webpSrc: '/images/nextways-services.webp',
        mobileWebpSrc: '/images/nextways-services-768.webp',
        width: 1536,
        height: 1024,
        objectPosition: '72% center',
    },
    projects: {
        fallbackSrc: '/images/nextways-value-chain.png',
        webpSrc: '/images/nextways-value-chain.webp',
        mobileWebpSrc: '/images/nextways-value-chain-768.webp',
        width: 1448,
        height: 1086,
        objectPosition: '62% center',
    },
    contact: {
        fallbackSrc: '/images/nextways-contact.png',
        webpSrc: '/images/nextways-contact.webp',
        mobileWebpSrc: '/images/nextways-contact-768.webp',
        width: 1536,
        height: 1024,
        objectPosition: '72% center',
    },
} as const satisfies Record<MarketingRouteName, PageHeroImage>;

export function MarketingHead({
    title,
    description,
    image = '/images/nextways-fieldwork.png',
    organization = false,
}: {
    title: string;
    description: string;
    image?: string;
    organization?: boolean;
}) {
    const page = usePage();
    const { appUrl, siteContact } = page.props;
    const canonical = new URL(page.url, appUrl).toString();
    const socialImage = new URL(image, appUrl).toString();
    const logoImage = new URL(BRAND_LOGO_PATH, appUrl).toString();
    const fullTitle = `${title} - Next Ways`;
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Next Ways',
        url: appUrl,
        image: socialImage,
        logo: logoImage,
        email: siteContact.email,
        telephone: siteContact.phone,
        address: siteContact.address,
        sameAs: [
            siteContact.linkedin,
            siteContact.facebook,
            siteContact.instagram,
            siteContact.twitter,
            siteContact.youtube,
        ].filter(Boolean),
        areaServed: ['Rwanda'],
    };

    return (
        <Head>
            <title>{title}</title>
            <meta key="description" name="description" content={description} />
            <link key="canonical" rel="canonical" href={canonical} />
            <meta key="og-title" property="og:title" content={fullTitle} />
            <meta
                key="og-description"
                property="og:description"
                content={description}
            />
            <meta key="og-type" property="og:type" content="website" />
            <meta key="og-url" property="og:url" content={canonical} />
            <meta key="og-image" property="og:image" content={socialImage} />
            <meta
                key="twitter-card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                key="twitter-title"
                name="twitter:title"
                content={fullTitle}
            />
            <meta
                key="twitter-description"
                name="twitter:description"
                content={description}
            />
            <meta
                key="twitter-image"
                name="twitter:image"
                content={socialImage}
            />
            {organization && (
                <script
                    key="organization-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationData),
                    }}
                />
            )}
        </Head>
    );
}

function Brand({ inverse = false }: { inverse?: boolean }) {
    return (
        <span
            className={cn(
                'relative block h-16 w-32 overflow-hidden',
                inverse && 'invert',
            )}
        >
            <BrandLogo
                className="absolute -top-24.5 -left-16 w-64 max-w-none"
                alt=""
            />
        </span>
    );
}

export function MarketingLink({
    to,
    children,
    className,
    onClick,
}: {
    to: MarketingRouteName;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Link
            className={className}
            href={routes[to]()}
            onClick={onClick}
            prefetch
        >
            {children}
        </Link>
    );
}

function RouteMotion({ children }: { children: ReactNode }) {
    const { url } = usePage();
    const lenis = useLenis();

    useEffect(() => {
        const shell = document.querySelector<HTMLElement>('.marketing-shell');
        if (shell) {
            return setupMarketingReveals(shell);
        }
    }, [url, children]);

    useEffect(() => {
        if (!lenis) {
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            lenis.resize();
            lenis.scrollTo(window.scrollY, {
                force: true,
                immediate: true,
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [lenis, url]);

    return children;
}

function Header() {
    const { url } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 18);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [url]);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = menuOpen ? 'hidden' : previousOverflow;

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);

    return (
        <>
            <div
                className={cn(
                    'bg-paper/95 text-ink marketing-gutter fixed inset-x-0 top-0 z-100 flex h-24 items-center justify-between gap-6 border-b border-transparent transition-[background-color,border-color] duration-200',
                    scrolled && 'border-mkt-line bg-paper/95 backdrop-blur-md',
                )}
            >
                <MarketingLink className="shrink-0" to="home">
                    <span className="sr-only">Next Ways home</span>
                    <Brand />
                </MarketingLink>

                <nav
                    className="hidden items-center gap-1 lg:flex"
                    aria-label="Primary navigation"
                >
                    {navItems.map((item) => (
                        <MarketingLink
                            key={item.route}
                            className={cn(
                                'text-mkt-muted hover:text-forest rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                                url === routes[item.route]().url &&
                                    'text-forest',
                            )}
                            to={item.route}
                        >
                            {item.label}
                        </MarketingLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <MarketingLink
                        className="border-mkt-line text-forest hover:bg-forest hover:text-paper inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors"
                        to="contact"
                    >
                        Get in touch
                    </MarketingLink>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    className="relative flex h-9 w-9 items-center justify-center lg:hidden"
                >
                    <span
                        className={cn(
                            'bg-ink absolute h-0.5 w-5 transition-transform duration-300',
                            menuOpen ? 'rotate-45' : 'translate-y-[-3.5px]',
                        )}
                    />
                    <span
                        className={cn(
                            'bg-ink absolute h-0.5 w-5 transition-transform duration-300',
                            menuOpen ? '-rotate-45' : 'translate-y-[3.5px]',
                        )}
                    />
                </button>
            </div>

            <div
                id="mobile-navigation"
                className={cn(
                    'bg-forest-deep text-paper fixed inset-0 z-95 flex flex-col justify-between overflow-y-auto px-5 py-28 pb-10 transition-opacity duration-200 motion-reduce:transition-none',
                    menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
                )}
                aria-hidden={!menuOpen}
            >
                <nav
                    className="flex flex-col items-start gap-2"
                    aria-label="Mobile navigation"
                >
                    {(
                        [
                            ...navItems,
                            { label: 'Contact', route: 'contact' },
                        ] as { label: string; route: MarketingRouteName }[]
                    ).map((item) => (
                        <MarketingLink
                            key={item.route}
                            className="text-paper/85 hover:text-paper text-4xl leading-tight font-semibold transition-colors lg:text-5xl"
                            to={item.route}
                        >
                            {item.label}
                        </MarketingLink>
                    ))}
                </nav>
                <div className="border-paper/20 text-paper/70 mt-12 flex items-center justify-between border-t pt-4 text-xs font-bold tracking-[0.16em] uppercase">
                    <span>Next Ways</span>
                    <span>Rwanda · East Africa</span>
                </div>
            </div>
        </>
    );
}

export function MarketingShell({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={MARKETING_LENIS_OPTIONS}>
            <div className={MARKETING_SHELL_CLASS_NAME}>
                <a
                    className="bg-forest-deep text-paper fixed top-2 left-2 z-110 translate-y-[-150%] px-4 py-2.5 focus:translate-y-0"
                    href="#main-content"
                >
                    Skip to content
                </a>
                <Header />
                <RouteMotion>
                    <main id="main-content">{children}</main>
                </RouteMotion>
                <Footer />
            </div>
        </ReactLenis>
    );
}

export function PageHero({
    title,
    description,
    children,
    image,
}: {
    title: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    image: PageHeroImage;
}) {
    return (
        <section
            className="bg-forest-deep relative isolate flex min-h-136 items-center overflow-hidden py-32 text-left sm:min-h-168 sm:py-36 lg:min-h-192"
            data-page-hero
        >
            <picture
                className="absolute inset-0 -z-30"
                data-hero-image={image.fallbackSrc}
                aria-hidden="true"
            >
                <source
                    media="(max-width: 768px)"
                    srcSet={image.mobileWebpSrc}
                    type="image/webp"
                />
                <source srcSet={image.webpSrc} type="image/webp" />
                <img
                    src={image.fallbackSrc}
                    alt=""
                    width={image.width}
                    height={image.height}
                    fetchPriority="high"
                    className="h-full w-full object-cover object-center"
                    style={{ objectPosition: image.objectPosition }}
                />
            </picture>
            <div
                className="from-forest-deep/95 via-forest-deep/80 to-forest/50 absolute inset-0 -z-20 bg-linear-to-r"
                data-hero-overlay
                aria-hidden="true"
            />
            <div
                className="from-forest-deep/65 to-forest-deep/10 absolute inset-0 -z-10 bg-linear-to-t via-transparent"
                aria-hidden="true"
            />

            <div className="marketing-container text-center lg:text-left">
                <h1 className="reveal font-heading text-paper [&_em]:text-sage-pale max-w-[23ch] text-[2.7rem] leading-[1.06] font-medium tracking-[-0.045em] text-balance sm:text-6xl lg:text-8xl">
                    {title}
                </h1>
                {description ? (
                    <p className="reveal text-paper/80 mt-8 max-w-[52ch] text-base leading-relaxed lg:text-xl">
                        {description}
                    </p>
                ) : null}
                {children}
            </div>
        </section>
    );
}

export function Pathline({ steps }: { steps: string[] }) {
    return (
        <ol
            className="reveal border-mkt-line mt-10 flex flex-wrap items-stretch border-y"
            aria-label="Process path"
        >
            {steps.map((step, index) => (
                <li
                    className="relative flex min-w-37.5 flex-1 flex-col justify-center gap-3 py-[1.1rem] pr-5 pl-0"
                    key={step}
                >
                    <span className="font-heading text-clay text-lg leading-none">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-forest text-xs leading-snug font-bold tracking-widest uppercase">
                        {step}
                    </span>
                </li>
            ))}
        </ol>
    );
}

export function SectionHeading({
    title,
    children,
    align = 'left',
}: {
    label?: string;
    title: ReactNode;
    children?: ReactNode;
    align?: 'center' | 'left';
}) {
    return (
        <div
            className={cn(
                'flex flex-col gap-2',
                align === 'center' ? 'items-center text-center' : 'items-start',
            )}
        >
            <h2 className="reveal font-heading text-ink max-w-3xl text-[2.2rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.4rem]">
                {title}
            </h2>
            {children ? (
                <div className="reveal text-mkt-muted mt-4 max-w-[46ch] text-[1rem] leading-relaxed">
                    {children}
                </div>
            ) : null}
        </div>
    );
}

export function ActionButton({
    to,
    children,
    variant = 'primary',
}: {
    to: MarketingRouteName;
    children: ReactNode;
    variant?: 'primary' | 'ghost' | 'light';
}) {
    return (
        <MarketingLink
            className={cn(
                'marketing-action group inline-flex min-h-12 items-center justify-center gap-5 rounded-full px-7 py-3.5 text-sm font-semibold',
                variant === 'primary' &&
                    'bg-forest text-paper hover:bg-forest-deep',
                variant === 'ghost' &&
                    'border-mkt-line text-forest hover:bg-forest hover:text-paper border',
                variant === 'light' &&
                    'bg-paper text-forest hover:bg-sage-soft',
            )}
            to={to}
        >
            {children}
            <span className="action-arrow" aria-hidden="true">
                ↗
            </span>
        </MarketingLink>
    );
}
