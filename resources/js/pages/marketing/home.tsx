import {
    ActionButton,
    MARKETING_HERO_IMAGES,
    MarketingHead,
    MarketingLink,
    PageHero,
    SectionHeading,
} from '@/components/marketing/site';

const serviceRows = [
    [
        'Environmental & sustainability consulting',
        'Due diligence, safeguards reviews, ESIA scoping, and environmental management planning.',
    ],
    [
        'Agribusiness & value-chain analysis',
        'Production-to-market mapping, actor diagnostics, and practical upgrading strategies.',
    ],
    [
        'Cold-chain & post-harvest feasibility',
        'Loss diagnosis, aggregation models, storage assessment, and costed pilot concepts.',
    ],
    [
        'Feasibility & investment advisory',
        'Business models, financial analysis, pre-feasibility studies, and decision-ready recommendations.',
    ],
    [
        'Monitoring, evaluation & learning',
        'Mixed-methods research that turns programme performance into useful learning.',
    ],
    [
        'Digital agriculture & traceability',
        'Low-cost tools for farmer registration, coordination, traceability, and market visibility.',
    ],
    [
        'Rural transport & logistics advisory',
        'Advice around passenger and freight movement, market access, and value-chain performance.',
    ],
];

const whyItems = [
    {
        title: 'From fieldwork to delivery',
        body: 'One advisory team connects field research, technical analysis, and practical recommendations throughout your engagement.',
    },
    {
        title: 'Field-Grounded',
        body: 'Direct engagement with farmers, cooperatives, businesses, communities, and local authorities.',
    },
    {
        title: 'Evidence-Driven',
        body: 'Primary data, stakeholder insight, technical assessment, and structured analysis for sound decisions.',
    },
    {
        title: 'Ready to implement',
        body: 'Costed options, clear priorities, and measurable next steps that your team can put to work.',
    },
];

export default function Home() {
    return (
        <>
            <MarketingHead
                title="Sustainable advisory in Rwanda"
                description="Rwandan advisory firm helping organizations turn environmental, agribusiness, and sustainability ambitions into practical, measurable results."
                image={MARKETING_HERO_IMAGES.home.fallbackSrc}
                organization
            />

            <PageHero
                image={MARKETING_HERO_IMAGES.home}
                title={
                    <>
                        Grounded advice.{' '}
                        <em className="text-sage font-normal not-italic">
                            Lasting impact.
                        </em>
                    </>
                }
                description="We turn environmental and agribusiness challenges into clear, practical decisions. Field-informed advisory for Rwanda and East Africa."
            >
                <div className="reveal mt-8 flex flex-wrap items-center gap-5">
                    <ActionButton to="contact" variant="light">
                        Discuss your project
                    </ActionButton>
                    <MarketingLink
                        to="projects"
                        className="group text-paper/90 hover:text-paper inline-flex items-center gap-3 py-3 text-sm font-semibold transition-colors"
                    >
                        Explore our work{' '}
                        <span className="action-arrow" aria-hidden="true">
                            ↗
                        </span>
                    </MarketingLink>
                </div>
            </PageHero>

            <section className="marketing-container py-10">
                <div className="border-mkt-line text-mkt-muted flex flex-wrap items-center justify-between gap-4 border-y py-5 text-xs tracking-wide">
                    <span>
                        Environment · Agriculture · Sustainable development
                    </span>
                    <a
                        href="#expertise"
                        className="group text-forest inline-flex items-center gap-3 py-2 font-semibold"
                    >
                        Discover our expertise{' '}
                        <span className="action-arrow" aria-hidden="true">
                            ↓
                        </span>
                    </a>
                </div>
            </section>

            {/* SERVICES */}
            <section
                id="expertise"
                className="marketing-container pt-24 pb-8 lg:pt-36"
            >
                <div className="mb-12">
                    <SectionHeading align="left" title="What we do" />
                </div>
                {serviceRows.map(([title, description], index) => (
                    <MarketingLink
                        key={title}
                        to="services"
                        className="reveal group border-mkt-line grid grid-cols-[2rem_1fr_1.5rem] items-start gap-x-4 gap-y-4 border-t py-7 last:border-b md:grid-cols-[2rem_minmax(0,1.2fr)_minmax(0,1fr)_1.5rem] md:items-center md:gap-x-8 md:py-9"
                    >
                        <span className="text-sage pt-1 text-xs font-medium tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-heading text-ink group-hover:text-forest text-[1.2rem] leading-[1.2] font-medium tracking-tight text-balance transition-colors md:text-[1.65rem]">
                            {title}
                        </h3>
                        <p className="text-mkt-muted col-start-2 row-start-2 max-w-md text-[0.95rem] leading-relaxed md:col-start-3 md:row-start-1">
                            {description}
                        </p>
                        <span
                            className="action-arrow text-forest col-start-3 row-start-1 text-2xl md:col-start-4"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </MarketingLink>
                ))}
            </section>

            {/* WHY — accordion + image */}
            <section className="marketing-container py-20 lg:py-40">
                <SectionHeading
                    title={
                        <>
                            How we work{' '}
                            <span className="text-forest">with clients</span>
                        </>
                    }
                />
                <div className="mx-auto mt-9 grid max-w-7xl grid-cols-1 items-center gap-8 lg:mt-15 lg:grid-cols-2 lg:gap-20">
                    <div className="w-full">
                        {whyItems.map((item) => (
                            <div
                                key={item.title}
                                className="reveal border-mkt-line border-t py-6 last:border-b"
                            >
                                <div className="flex items-center justify-between py-2 text-left">
                                    <h3 className="font-heading text-ink text-xl font-medium tracking-tight md:text-2xl">
                                        {item.title}
                                    </h3>
                                    <span className="text-sage text-lg">→</span>
                                </div>
                                <p className="text-mkt-muted max-w-md pb-2 text-[0.95rem] leading-relaxed">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="reveal reveal-media overflow-hidden">
                        <img
                            src="/images/nextways-fieldwork.png"
                            alt="Next Ways team crafting sustainable advisory"
                            loading="lazy"
                            className="aspect-4/3 w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* FEATURE PANEL */}
            <section className="bg-forest text-paper marketing-gutter py-18 lg:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-18">
                    <div>
                        <p className="text-sage-pale text-xs font-bold tracking-[0.2em] uppercase">
                            Local context, decision-ready outputs
                        </p>
                        <h2 className="font-heading mt-4 text-[2rem] leading-tight font-semibold tracking-tight lg:text-[3.4rem]">
                            Advice that can survive contact with the field.
                        </h2>
                        <p className="text-paper/70 mt-6 max-w-md leading-relaxed">
                            We focus on producing recommendations that clients
                            can use: costed, actionable, measurable, and aligned
                            with sustainability priorities.
                        </p>
                    </div>
                    <div>
                        <div className="reveal reveal-media aspect-4/3 overflow-hidden">
                            <img
                                src="/images/nextways-fieldwork.png"
                                alt="Field consultation producing actionable recommendations"
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE — big heading with accordion-style cards */}
            <section className="marketing-gutter py-20 lg:py-40">
                <SectionHeading title="Why choose Next Ways?">
                    <p>
                        Every engagement is designed around evidence and
                        practical decision-making.
                    </p>
                </SectionHeading>
                <div className="mx-auto mt-9 grid max-w-7xl grid-cols-1 gap-8 lg:mt-15 lg:grid-cols-2 lg:gap-20">
                    <div className="reveal reveal-media order-2 overflow-hidden lg:order-1">
                        <img
                            src="/images/nextways-value-chain.png"
                            alt="Value-chain and assessment work"
                            loading="lazy"
                            className="aspect-4/3 w-full object-cover"
                        />
                    </div>
                    <div className="order-1 flex flex-col justify-center lg:order-2">
                        {[
                            'Field-Grounded',
                            'Evidence-Driven',
                            'Implementation-Focused',
                            'Sustainability-Led',
                        ].map((title, index) => (
                            <div
                                key={title}
                                className="reveal border-mkt-line border-t py-6"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-sage w-8 text-xs font-bold tracking-widest">
                                        0{index + 1}
                                    </span>
                                    <span className="font-heading text-ink text-xl font-medium tracking-tight md:text-2xl">
                                        {title}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div className="border-mkt-line mt-2 border-t" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="marketing-gutter pb-20 lg:pb-40">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
                    <div>
                        <h2 className="font-heading text-ink text-[2.2rem] leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
                            Frequent questions
                        </h2>
                        <p className="text-mkt-muted mt-6 max-w-104 leading-relaxed">
                            Everything you need to know about working with us:
                            services, timelines, and how we turn evidence into
                            decisions.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {[
                            {
                                q: 'What services does Next Ways offer?',
                                a: 'Environmental consulting, agribusiness and value-chain analysis, cold-chain and post-harvest feasibility, pre-investment appraisal, monitoring and evaluation, digital agriculture, and rural logistics advisory.',
                            },
                            {
                                q: 'How long will my project take?',
                                a: 'It depends on scope: a focused review can ship in weeks, a full feasibility study in months. Our method is intentional — scope, assess, model, recommend. You get a timeline after the first call.',
                            },
                            {
                                q: 'Do you work across East Africa?',
                                a: 'Yes. We are headquartered in Kigali and serve clients across Rwanda and East Africa, with field operations reaching the communities we advise.',
                            },
                            {
                                q: 'What is it like working with you?',
                                a: 'Every engagement begins with your question. We gather evidence, engage stakeholders, and refine until every recommendation is costed, actionable, and measurable.',
                            },
                        ].map((item) => (
                            <div
                                key={item.q}
                                className="reveal border-mkt-line border-t py-7 last:border-b"
                            >
                                <h3 className="text-ink text-base font-medium">
                                    {item.q}
                                </h3>
                                <p className="text-mkt-muted mt-3 text-sm leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="marketing-container border-mkt-line border-t pt-16 pb-22 lg:pb-44">
                <h2 className="font-heading text-ink reveal max-w-5xl text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[5.5rem]">
                    Grounded in the field. Ready for the decision.
                </h2>
                <div className="reveal mt-10 flex flex-wrap items-center gap-4">
                    <ActionButton to="contact" variant="primary">
                        Start a conversation
                    </ActionButton>
                    <ActionButton to="services" variant="ghost">
                        Explore our services
                    </ActionButton>
                </div>
            </section>
        </>
    );
}
