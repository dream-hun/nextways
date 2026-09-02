/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import {
    ActionButton,
    CameraDepthScene,
    CameraParallax,
    MarketingHead,
    MarketingLink,
    Pathline,
    RouteRule,
    SectionHeading,
} from '@/components/marketing/site';

const serviceRows = [
    [
        '01',
        'Environmental & sustainability consulting',
        'Due diligence, safeguards reviews, ESIA scoping, and environmental management planning.',
    ],
    [
        '02',
        'Agribusiness & value-chain analysis',
        'Production-to-market mapping, actor diagnostics, and practical upgrading strategies.',
    ],
    [
        '03',
        'Cold-chain & post-harvest feasibility',
        'Loss diagnosis, aggregation models, storage assessment, and costed pilot concepts.',
    ],
    [
        '04',
        'Feasibility & investment advisory',
        'Business models, financial analysis, pre-feasibility studies, and decision-ready recommendations.',
    ],
    [
        '05',
        'Monitoring, evaluation & learning',
        'Mixed-methods research that turns programme performance into useful learning.',
    ],
    [
        '06',
        'Digital agriculture & traceability',
        'Low-cost tools for farmer registration, coordination, traceability, and market visibility.',
    ],
    [
        '07',
        'Rural transport & logistics advisory',
        'Advice around passenger and freight movement, market access, and value-chain performance.',
    ],
];

const principles = [
    [
        '01',
        'Field-Grounded',
        'Direct engagement with farmers, cooperatives, businesses, communities, and local authorities.',
    ],
    [
        '02',
        'Evidence-Driven',
        'Primary data, stakeholder insight, technical assessment, and structured analysis for sound decisions.',
    ],
    [
        '03',
        'Implementation-Focused',
        'Recommendations designed to move beyond reports into realistic pilots, investments, and programmes.',
    ],
    [
        '04',
        'Sustainability-Led',
        'Environmental, social, operational, and economic realities considered throughout the advisory process.',
    ],
];

export default function Home() {
    return (
        <>
            <MarketingHead
                title="Sustainable advisory in Rwanda"
                description="Rwandan advisory firm helping organizations turn environmental, agribusiness, and sustainability ambitions into practical, measurable results."
                organization
            />
            <section className="hero hero-home" data-camera-section>
                <CameraDepthScene kind="home" />
                <div className="hero-inner">
                    <div className="hero-copy">
                        <div className="eyebrow reveal">
                            Environmental · Agribusiness · Sustainability
                        </div>
                        <h1 className="display reveal delay-1">
                            Sustainable solutions. <em>Grounded</em> in
                            evidence.
                        </h1>
                        <p className="hero-lede reveal delay-2">
                            Next Ways Ltd is a Rwandan advisory firm helping
                            organizations turn sustainability ambitions into
                            practical, measurable results.
                        </p>
                        <div className="hero-actions reveal delay-3">
                            <ActionButton to="services" variant="light">
                                Explore our services
                            </ActionButton>
                            <ActionButton to="contact" variant="ghost">
                                Get in touch
                            </ActionButton>
                        </div>
                        <div className="hero-meta reveal delay-4">
                            <span>Sustainably driven</span>
                            <span>Rwanda · East Africa</span>
                        </div>
                    </div>
                    <div className="hero-evidence reveal delay-2">
                        <div className="evidence-top">
                            <span>Field note / 00</span>
                            <span>03 inputs</span>
                        </div>
                        <div className="evidence-value">
                            Evidence
                            <br />
                            <em>first.</em>
                        </div>
                        <p>
                            Grounded fieldwork, primary data, stakeholder
                            insight, and delivery discipline.
                        </p>
                        <div className="evidence-rule">
                            Context before counsel
                        </div>
                    </div>
                </div>
            </section>

            <section className="section home-what">
                <div className="container">
                    <SectionHeading
                        label="01 / What we do"
                        title={
                            <>
                                Move from ambition to <em>action.</em>
                            </>
                        }
                    >
                        <p>
                            We support public agencies, development partners,
                            and private-sector clients in designing, appraising,
                            and evaluating sustainable interventions across
                            Rwanda and East Africa.
                        </p>
                        <p style={{ marginTop: 22 }}>
                            Our work sits at the intersection of{' '}
                            <strong>
                                environment, agribusiness, and rural livelihoods
                            </strong>{' '}
                            — combining rigorous analysis with field-informed
                            insight.
                        </p>
                    </SectionHeading>
                    <Pathline
                        steps={[
                            'Understand the system',
                            'Map the opportunity',
                            'Test the options',
                            'Move to action',
                        ]}
                    />
                    <div className="service-rail">
                        {serviceRows.map(
                            ([number, title, description], index) => (
                                <MarketingLink
                                    className={`service-row reveal delay-${Math.min(index + 1, 4)}`}
                                    key={number}
                                    to="services"
                                >
                                    <div className="service-no">{number}</div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <div
                                        className="service-arrow"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </div>
                                </MarketingLink>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <section className="section forest-panel" data-camera-section>
                <CameraParallax
                    className="section-camera-decoration section-camera-decoration-forest"
                    depth={0.09}
                >
                    <div className="section-contour section-contour-large" />
                    <div className="section-contour section-contour-small" />
                </CameraParallax>
                <div className="container">
                    <SectionHeading
                        label="02 / How we work"
                        title={
                            <>
                                Sustainability that moves from <em>ambition</em>{' '}
                                to action.
                            </>
                        }
                        light
                    >
                        <p>
                            At Next Ways, sustainability is not simply a
                            principle — it shapes how we approach every
                            engagement.
                        </p>
                        <p style={{ marginTop: 22 }}>
                            Our methodology combines{' '}
                            <strong>
                                grounded fieldwork, primary data, stakeholder
                                engagement, rigorous analysis, and delivery
                                discipline.
                            </strong>
                        </p>
                    </SectionHeading>
                    <div className="principles-grid">
                        {principles.map(([number, title, description]) => (
                            <div className="principle reveal" key={number}>
                                <div className="principle-no">{number}</div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section feature-band" data-camera-section>
                <CameraParallax
                    className="section-camera-decoration section-camera-decoration-feature"
                    depth={0.18}
                >
                    <div className="section-route section-route-one" />
                    <div className="section-route section-route-two" />
                </CameraParallax>
                <div className="container">
                    <div className="feature-layout">
                        <div>
                            <RouteRule>03 / Featured expertise</RouteRule>
                            <h2 className="display reveal delay-1">
                                Advice that can survive contact with the{' '}
                                <em>field.</em>
                            </h2>
                            <p
                                className="body-copy reveal delay-2"
                                style={{ marginTop: 25, maxWidth: 530 }}
                            >
                                We focus on producing recommendations that
                                clients can use: costed, actionable, measurable,
                                and aligned with sustainability priorities.
                            </p>
                            <div className="feature-proof reveal delay-3">
                                <strong>
                                    Local context, decision-ready outputs.
                                </strong>
                                <span>
                                    Field evidence is translated into costed
                                    options, practical recommendations, and
                                    clear next steps.
                                </span>
                            </div>
                        </div>
                        <div className="reveal delay-2">
                            <div className="image-shell feature-image">
                                <div className="image-core">
                                    <picture>
                                        <source
                                            media="(max-width: 768px)"
                                            srcSet="/images/nextways-fieldwork-768.webp"
                                            type="image/webp"
                                        />
                                        <source
                                            srcSet="/images/nextways-fieldwork.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="/images/nextways-fieldwork.png"
                                            alt="Field consultation on a Rwandan hillside farm"
                                            width="1536"
                                            height="1024"
                                            loading="lazy"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="feature-note">
                                <span>Field note / 03</span>
                                <span>Local context matters</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="cta-inner reveal container">
                    <div>
                        <div className="eyebrow">04 / The next move</div>
                        <h2 className="display">
                            Building more sustainable agri-food systems and
                            communities.
                        </h2>
                    </div>
                    <ActionButton to="contact" variant="light">
                        Talk to Next Ways
                    </ActionButton>
                </div>
            </section>
        </>
    );
}
