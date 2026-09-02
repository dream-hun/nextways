/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import Lenis from "lenis";
import {
  formatCameraTransform,
  getCameraOffset,
  REVEAL_OBSERVER_OPTIONS,
  REVEAL_SELECTORS,
  shouldEnableReveal,
} from "@/lib/motion";

export const WORDMARK = "/manus-storage/nextways-logo_700718e4.avif";
export const MARK = "/manus-storage/apple-touch-icon_7525c226.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!shouldEnableReveal(window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, syncTouch: false });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };
    frame = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

export function RouteMotion({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS.join(", ")));
    targets.filter((node) => node.matches(".image-shell")).forEach((node) => node.classList.add("reveal-image"));

    if (!shouldEnableReveal(window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      REVEAL_OBSERVER_OPTIONS,
    );
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [location]);
  return <>{children}</>;
}

/**
 * A scroll-linked camera layer. The section stays in normal document flow while
 * the layer itself travels through the frame at a depth-specific rate.
 */
export function CameraParallax({ children, className = "", depth }: { children: ReactNode; className?: string; depth: number }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || !shouldEnableReveal(window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;

    const section = layer.closest<HTMLElement>("[data-camera-section]");
    let sectionTop = 0;
    let frame = 0;

    const apply = () => {
      frame = 0;
      const offset = getCameraOffset(window.scrollY, sectionTop, window.innerHeight, depth);
      layer.style.transform = formatCameraTransform(offset);
    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(apply);
    };

    const measure = () => {
      sectionTop = (section?.getBoundingClientRect().top ?? layer.getBoundingClientRect().top) + window.scrollY;
      schedule();
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
    };
  }, [depth]);

  return (
    <div ref={layerRef} className={`camera-layer ${className}`} data-camera-depth={depth}>
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
      <div className="camera-layer camera-layer-wash"><div className="camera-wash" /></div>
      <CameraParallax className="camera-layer-mid" depth={0.14}>
        <div className="camera-contour camera-contour-one" />
        <div className="camera-contour camera-contour-two" />
        <div className="camera-orbit" />
      </CameraParallax>
      <CameraParallax className="camera-layer-front" depth={0.36}>
        <div className="camera-route camera-route-one" />
        <div className="camera-route camera-route-two" />
        <span className="camera-coordinate camera-coordinate-one">FIELD / 00</span>
        <span className="camera-coordinate camera-coordinate-two">-01.944° S · 30.061° E</span>
      </CameraParallax>
    </div>
  );
}

export function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <div className="site-nav-wrap">
        <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
          <Link className="nav-logo" href="/" aria-label="Next Ways Ltd home">
            <img className="mark" src={MARK} alt="" />
            <img className="wordmark" src={WORDMARK} alt="Next Ways Ltd" />
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} className={location === item.href ? "active" : ""} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <Link className="nav-cta" href="/contact">Talk to us <span aria-hidden="true">↗</span></Link>
          <button className={`menu-toggle${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <i /><i />
          </button>
        </header>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-links" aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="mobile-footer"><span>Next Ways Ltd</span><span>Rwanda · East Africa</span></div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Link className="footer-brand" href="/" aria-label="Next Ways Ltd home"><img className="mark" src={MARK} alt="" /><img src={WORDMARK} alt="Next Ways Ltd" /></Link>
          <nav className="footer-nav" aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></nav>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Next Ways Ltd</span><span>Sustainably driven · Kigali, Rwanda</span></div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <SmoothScroll><div className="site-shell"><Header /><RouteMotion><main className="page-wrap">{children}</main></RouteMotion><Footer /></div></SmoothScroll>;
}

export function PageHero({ kind, label, title, description, meta = "Rwanda · East Africa", aside }: { kind: string; label: string; title: ReactNode; description: string; meta?: string; aside?: ReactNode }) {
  return (
    <section className={`page-hero ${kind}`} data-camera-section>
      <CameraDepthScene kind={kind} />
      <div className={`page-hero-inner${aside ? " has-aside" : ""}`}>
        <div className="page-hero-copy">
          <div className="eyebrow reveal">{label}</div>
          <h1 className="display reveal delay-1">{title}</h1>
          <p className="reveal delay-2">{description}</p>
          <div className="hero-meta reveal delay-3"><span>Next Ways Ltd</span><span>{meta}</span></div>
        </div>
        {aside ? <div className="page-hero-aside reveal delay-2">{aside}</div> : null}
      </div>
    </section>
  );
}

export function Pathline({ steps }: { steps: string[] }) {
  return <div className="pathline reveal" aria-label="Process path">{steps.map((step, index) => <div className="path-step" key={step}><span className="path-node">{String(index + 1).padStart(2, "0")}</span><span className="path-label">{step}</span></div>)}</div>;
}

export function SectionHeading({ label, title, children, light = false }: { label: string; title: ReactNode; children?: ReactNode; light?: boolean }) {
  return <div className={`section-intro${light ? " light" : ""}`}><div><div className="eyebrow reveal">{label}</div><h2 className="display reveal delay-1">{title}</h2></div>{children ? <div className="intro-copy body-copy reveal delay-2">{children}</div> : <div />}</div>;
}

export function RouteRule({ children = "Field note" }: { children?: ReactNode }) { return <div className="route-rule reveal">{children}</div>; }

export function ActionButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" | "light" }) { return <Link className={`btn btn-${variant}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>; }
