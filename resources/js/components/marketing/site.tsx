/* Field Notes / Editorial Practice: warm paper, forest anchor, editorial splits, field-note labels, restrained motion. */
import { Head, Link, usePage } from '@inertiajs/react';
import { ReactLenis, useLenis } from 'lenis/react';
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';
import { about, contact, home, projects, services } from '@/routes';
import {
    formatCameraTransform,
    getCameraOffset,
    MARKETING_LENIS_OPTIONS,
    MARKETING_SHELL_CLASS_NAME,
    REVEAL_OBSERVER_OPTIONS,
    REVEAL_SELECTOR,
    shouldEnableMotion,
} from '@/lib/marketing-motion';
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
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Projects', route: 'projects' },
];

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
    const { appUrl } = page.props;
    const canonical = new URL(page.url, appUrl).toString();
    const socialImage = new URL(image, appUrl).toString();
    const fullTitle = `${title} - Next Ways Ltd`;
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Next Ways Ltd',
        url: appUrl,
        image: socialImage,
        email: 'sebasile@yahoo.fr',
        telephone: '+250788867106',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Norrsken House Kigali, KN 78 St, Kiyovu',
            addressLocality: 'Kigali',
            addressCountry: 'RW',
        },
        areaServed: ['Rwanda', 'East Africa'],
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
        <span className={`brand-lockup${inverse ? ' inverse' : ''}`}>
            <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
                <circle cx="20" cy="20" r="18.5" fill="currentColor" />
                <path
                    d="M10.5 26.5c4.4-1.1 6.6-5.4 8.3-9.2 1.7-3.9 4-6.8 10.7-7.8M19 17.2c3.1.2 6.1 2.4 8.6 6.7"
                    fill="none"
                    stroke="var(--paper)"
                    strokeLinecap="round"
                    strokeWidth="2"
                />
                <circle cx="10.5" cy="26.5" r="2" fill="var(--clay)" />
                <circle cx="29.5" cy="9.5" r="2" fill="var(--sage-pale)" />
                <circle cx="27.6" cy="23.9" r="2" fill="var(--paper)" />
            </svg>
            <span className="brand-type">
                <strong>Next Ways</strong>
                <small>Sustainably driven</small>
            </span>
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
            viewTransition
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
        const targets = Array.from(
            shell?.querySelectorAll<HTMLElement>(REVEAL_SELECTOR) ?? [],
        );

        targets
            .filter((node) => node.matches('.image-shell'))
            .forEach((node) => node.classList.add('reveal-image'));

        if (
            !shouldEnableMotion(
                window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            )
        ) {
            targets.forEach((node) => node.classList.add('is-visible'));

            return;
        }

        targets
            .filter(
                (node) =>
                    node.getBoundingClientRect().top <
                    window.innerHeight * 0.94,
            )
            .forEach((node) => node.classList.add('is-visible'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, REVEAL_OBSERVER_OPTIONS);

        targets
            .filter((node) => !node.classList.contains('is-visible'))
            .forEach((node) => observer.observe(node));
        return () => {
            observer.disconnect();
        };
    }, [url]);

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

export function CameraParallax({
    children,
    className = '',
    depth,
}: {
    children: ReactNode;
    className?: string;
    depth: number;
}) {
    const layerRef = useRef<HTMLDivElement>(null);
    const sectionTopRef = useRef(0);
    const reducedMotionRef = useRef(false);

    const updateCamera = useCallback(
        (lenisInstance?: ReturnType<typeof useLenis>) => {
            const layer = layerRef.current;

            if (!layer || reducedMotionRef.current) {
                return;
            }

            const offset = getCameraOffset(
                lenisInstance?.animatedScroll ?? window.scrollY,
                sectionTopRef.current,
                window.innerHeight,
                depth,
            );

            layer.style.transform = formatCameraTransform(offset);
        },
        [depth],
    );
    const lenis = useLenis(updateCamera, [depth], 1);

    useEffect(() => {
        const layer = layerRef.current;

        if (!layer) {
            return;
        }

        const section = layer.closest<HTMLElement>('[data-camera-section]');
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        );

        const measure = () => {
            reducedMotionRef.current = reducedMotion.matches;

            if (reducedMotion.matches) {
                layer.style.removeProperty('transform');

                return;
            }

            sectionTopRef.current =
                (section?.getBoundingClientRect().top ??
                    layer.getBoundingClientRect().top) + window.scrollY;
            updateCamera(lenis);
        };

        measure();
        window.addEventListener('resize', measure);
        reducedMotion.addEventListener('change', measure);

        return () => {
            window.removeEventListener('resize', measure);
            reducedMotion.removeEventListener('change', measure);
        };
    }, [lenis, updateCamera]);

    return (
        <div
            ref={layerRef}
            className={`camera-layer ${className}`}
            data-camera-depth={depth}
        >
            {children}
        </div>
    );
}

export function CameraDepthScene({ kind }: { kind: string }) {
    return (
        <div className={`camera-scene camera-scene-${kind}`} aria-hidden="true">
            <CameraParallax className="camera-layer-back" depth={0.045}>
                <div className={`camera-backdrop camera-backdrop-${kind}`} />
            </CameraParallax>
            <div className="camera-layer camera-layer-wash">
                <div className="camera-wash" />
            </div>
            <CameraParallax className="camera-layer-mid" depth={0.14}>
                <div className="camera-contour camera-contour-one" />
                <div className="camera-contour camera-contour-two" />
                <div className="camera-orbit" />
            </CameraParallax>
            <CameraParallax className="camera-layer-front" depth={0.36}>
                <div className="camera-route camera-route-one" />
                <div className="camera-route camera-route-two" />
                <span className="camera-coordinate camera-coordinate-one">
                    FIELD / 00
                </span>
                <span className="camera-coordinate camera-coordinate-two">
                    -01.944° S · 30.061° E
                </span>
            </CameraParallax>
        </div>
    );
}

function Header() {
    const { url } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuToggleRef = useRef<HTMLButtonElement>(null);

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

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const menu = menuRef.current;
        const focusable = Array.from(
            menu?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex="0"]',
            ) ?? [],
        );

        focusable[0]?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                menuToggleRef.current?.focus();

                return;
            }

            if (event.key !== 'Tab' || focusable.length === 0) {
                return;
            }

            const first = focusable[0];
            const last = focusable.at(-1);

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

    return (
        <>
            <div className="site-nav-wrap">
                <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
                    <MarketingLink className="nav-logo" to="home">
                        <span className="sr-only">Next Ways Ltd home</span>
                        <Brand />
                    </MarketingLink>
                    <nav className="nav-links" aria-label="Primary navigation">
                        {navItems.map((item) => (
                            <MarketingLink
                                key={item.route}
                                className={
                                    url === routes[item.route]().url
                                        ? 'active'
                                        : undefined
                                }
                                to={item.route}
                            >
                                {item.label}
                            </MarketingLink>
                        ))}
                    </nav>
                    <MarketingLink className="nav-cta" to="contact">
                        Talk to us <span aria-hidden="true">↗</span>
                    </MarketingLink>
                    <button
                        ref={menuToggleRef}
                        className={`menu-toggle${menuOpen ? ' open' : ''}`}
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <i />
                        <i />
                    </button>
                </header>
            </div>
            <div
                ref={menuRef}
                id="mobile-navigation"
                className={`mobile-menu${menuOpen ? ' open' : ''}`}
                aria-hidden={!menuOpen}
                aria-modal={menuOpen ? 'true' : undefined}
                role={menuOpen ? 'dialog' : undefined}
            >
                <nav className="mobile-links" aria-label="Mobile navigation">
                    <MarketingLink to="home">Home</MarketingLink>
                    {navItems.map((item) => (
                        <MarketingLink key={item.route} to={item.route}>
                            {item.label}
                        </MarketingLink>
                    ))}
                    <MarketingLink to="contact">Contact</MarketingLink>
                </nav>
                <div className="mobile-footer">
                    <span>Next Ways Ltd</span>
                    <span>Rwanda · East Africa</span>
                </div>
            </div>
        </>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-main">
                    <MarketingLink className="footer-brand" to="home">
                        <span className="sr-only">Next Ways Ltd home</span>
                        <Brand inverse />
                    </MarketingLink>
                    <nav className="footer-nav" aria-label="Footer navigation">
                        {navItems.map((item) => (
                            <MarketingLink key={item.route} to={item.route}>
                                {item.label}
                            </MarketingLink>
                        ))}
                        <MarketingLink to="contact">Contact</MarketingLink>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Next Ways Ltd</span>
                    <span>Sustainably driven · Kigali, Rwanda</span>
                </div>
            </div>
        </footer>
    );
}

export function MarketingShell({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={MARKETING_LENIS_OPTIONS}>
            <div className={MARKETING_SHELL_CLASS_NAME}>
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>
                <Header />
                <RouteMotion>
                    <main className="page-wrap" id="main-content">
                        {children}
                    </main>
                </RouteMotion>
                <Footer />
            </div>
        </ReactLenis>
    );
}

export function PageHero({
    kind,
    label,
    title,
    description,
    meta = 'Rwanda · East Africa',
    aside,
}: {
    kind: string;
    label: string;
    title: ReactNode;
    description: string;
    meta?: string;
    aside?: ReactNode;
}) {
    return (
        <section className={`page-hero ${kind}`} data-camera-section>
            <CameraDepthScene kind={kind.split(' ')[0]} />
            <div className={`page-hero-inner${aside ? ' has-aside' : ''}`}>
                <div className="page-hero-copy">
                    <div className="eyebrow reveal">{label}</div>
                    <h1 className="display reveal delay-1">{title}</h1>
                    <p className="reveal delay-2">{description}</p>
                    <div className="hero-meta reveal delay-3">
                        <span>Next Ways Ltd</span>
                        <span>{meta}</span>
                    </div>
                </div>
                {aside ? (
                    <div className="page-hero-aside reveal delay-2">
                        {aside}
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export function Pathline({ steps }: { steps: string[] }) {
    return (
        <ol className="pathline reveal" aria-label="Process path">
            {steps.map((step, index) => (
                <li className="path-step" key={step}>
                    <span className="path-node">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="path-label">{step}</span>
                </li>
            ))}
        </ol>
    );
}

export function SectionHeading({
    label,
    title,
    children,
    light = false,
}: {
    label: string;
    title: ReactNode;
    children?: ReactNode;
    light?: boolean;
}) {
    return (
        <div className={`section-intro${light ? ' light' : ''}`}>
            <div>
                <div className="eyebrow reveal">{label}</div>
                <h2 className="display reveal delay-1">{title}</h2>
            </div>
            {children ? (
                <div className="intro-copy body-copy reveal delay-2">
                    {children}
                </div>
            ) : (
                <div />
            )}
        </div>
    );
}

export function RouteRule({
    children = 'Field note',
}: {
    children?: ReactNode;
}) {
    return <div className="route-rule reveal">{children}</div>;
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
        <MarketingLink className={`btn btn-${variant}`} to={to}>
            {children}
            <span aria-hidden="true">↗</span>
        </MarketingLink>
    );
}
