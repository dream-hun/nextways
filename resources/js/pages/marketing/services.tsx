import {
    ActionButton,
    MARKETING_HERO_IMAGES,
    MarketingHead,
    PageHero,
} from '@/components/marketing/site';

const serviceGroups = [
    {
        number: '01',
        title: 'Environmental & Sustainability Consulting',
        description:
            'We help clients identify environmental considerations early and translate sustainability requirements into practical management actions.',
        deliverables: [
            'ESIA scoping notes',
            'Environmental due diligence',
            'Safeguards reviews & audits',
            'Environmental management plans',
            'Sustainability-focused advisory',
        ],
        outcome:
            'Environmental assessments, safeguards documentation, management recommendations, and decision-ready technical notes.',
    },
    {
        number: '02',
        title: 'Agribusiness & Value-Chain Analysis',
        description:
            'We analyze agricultural systems from production through aggregation and market access to identify constraints, opportunities, and practical upgrading pathways.',
        deliverables: [
            'Value-chain mapping',
            'Actor diagnostics',
            'Production-to-market analysis',
            'Market & logistics assessment',
            'Upgrading strategies',
        ],
        outcome:
            'Value-chain maps, actor diagnostics, bottleneck analysis, and prioritized upgrading recommendations.',
    },
    {
        number: '03',
        title: 'Cold-Chain & Post-Harvest Feasibility',
        description:
            'We help clients understand where losses occur and assess practical infrastructure and operating models for aggregation, storage, and cold-chain development.',
        deliverables: [
            'Loss-point diagnosis',
            'Aggregation assessment',
            'Storage analysis',
            'Cold-room sizing',
            'Costed pilot design',
        ],
        outcome:
            'Loss assessments, infrastructure options, business-model analysis, and costed pilot concepts.',
    },
    {
        number: '04',
        title: 'Feasibility Studies & Pre-Investment Appraisal',
        description:
            'We transform project ideas into structured evidence for investment and implementation decisions.',
        deliverables: [
            'Pre-feasibility studies',
            'Business-model development',
            'Financial analysis',
            'Technical option assessment',
            'Pre-investment appraisal',
        ],
        outcome:
            'Feasibility reports, financial analysis, business models, implementation options, and costed recommendations.',
    },
    {
        number: '05',
        title: 'Monitoring, Evaluation & Learning',
        description:
            'We conduct mixed-methods research to help organizations understand performance, outcomes, and lessons from programmes and interventions.',
        deliverables: [
            'Baseline evaluations',
            'Mid-line evaluations',
            'End-line evaluations',
            'Mixed-methods field research',
            'Learning-oriented analysis',
        ],
        outcome:
            'Evaluation reports, baseline studies, performance findings, and learning briefs.',
    },
    {
        number: '06',
        title: 'Digital Agriculture & Traceability',
        description:
            'We assess practical, low-cost digital tools that can strengthen coordination and visibility across agricultural value chains.',
        deliverables: [
            'Registration tools',
            'Traceability options',
            'Buyer-seller matching',
            'Digital coordination systems',
            'Pilot design',
        ],
        outcome:
            'Tool selection, adoption pathways, and grounded pilots designed for real-world uptake.',
    },
    {
        number: '07',
        title: 'Rural Transport & Logistics Advisory',
        description:
            'We provide advisory support around rural passenger and freight movement, with attention to the role transport and logistics play in market access and value-chain performance.',
        deliverables: [
            'Rural mobility assessment',
            'Freight movement analysis',
            'Route and access review',
            'Logistics options',
            'Implementation advice',
        ],
        outcome:
            'Practical transport and logistics recommendations aligned with local operating realities.',
    },
];

export default function Services() {
    return (
        <>
            <MarketingHead
                title="Services"
                description="Environmental, agribusiness, cold-chain, feasibility, evaluation, digital agriculture, and rural logistics advisory in Rwanda and East Africa."
                image={MARKETING_HERO_IMAGES.services.fallbackSrc}
            />

            <PageHero
                image={MARKETING_HERO_IMAGES.services}
                title={
                    <>
                        The work behind{' '}
                        <em className="text-sage font-normal not-italic">
                            better decisions.
                        </em>
                    </>
                }
                description="Advisory services designed to help clients understand complex environmental and agri-food challenges, assess investment opportunities, and develop practical interventions."
            />

            {/* SERVICE SECTIONS */}
            <section className="marketing-container py-20 lg:py-32">
                <div className="max-w-3xl pb-12">
                    <p className="text-sage mb-4 text-xs font-bold tracking-[0.2em] uppercase">
                        What we deliver
                    </p>
                    <h2 className="font-heading text-ink text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-xl">
                        From complexity to clarity.
                    </h2>
                    <p className="text-mkt-muted mt-4 max-w-7xl leading-relaxed">
                        Our work covers the full arc from first question to
                        implementable next move: fieldwork, assessment,
                        analysis, appraisal, and learning.
                    </p>
                </div>

                <div className="h-4" />

                {serviceGroups.map((service) => (
                    <div
                        key={service.number}
                        className="reveal border-mkt-line grid grid-cols-1 gap-6 border-t py-8 md:grid-cols-[1fr_1.6fr] md:gap-5 lg:gap-16 lg:py-14"
                    >
                        <div className="flex items-baseline gap-4 md:block">
                            <span className="text-sage text-xs font-bold tracking-[0.2em]">
                                {service.number}
                            </span>
                            <h3 className="font-heading text-ink max-w-[25ch] text-xl leading-snug font-medium tracking-tight md:mt-5 lg:text-2xl">
                                {service.title}
                            </h3>
                        </div>
                        <div className="min-w-0">
                            <p className="text-mkt-muted max-w-[52ch] text-lg leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {service.deliverables.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-sage-pale text-forest px-3 py-1.5 text-xs font-bold"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <p className="text-mkt-muted mt-5 max-w-[46ch] text-sm leading-relaxed">
                                <span className="text-forest text-xs font-bold tracking-[0.17em] uppercase">
                                    Typical deliverables
                                </span>
                                <br />
                                {service.outcome}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* PROOF / CLOSE */}
            <section className="bg-forest text-paper marketing-gutter py-18 lg:py-32">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="reveal font-heading max-w-7xl text-[2.2rem] leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4rem]">
                        A tailored brief, not a template.
                    </h2>
                    <p className="reveal text-paper/70 mt-6 max-w-full leading-relaxed">
                        Tell us about the challenge, programme, investment, or
                        value chain you are working on. We’ll shape the right
                        advisory engagement around the decisions ahead.
                    </p>
                    <div className="reveal mt-10">
                        <ActionButton to="contact" variant="light">
                            Discuss your project
                        </ActionButton>
                    </div>
                </div>
            </section>
        </>
    );
}
