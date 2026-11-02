import {
    ActionButton,
    MARKETING_HERO_IMAGES,
    MarketingHead,
    PageHero,
    SectionHeading,
} from '@/components/marketing/site';

const approachPoints = [
    'Evidence-based',
    'Field-informed',
    'Cost-conscious',
    'Implementable',
    'Measurable',
    'Environmentally responsible',
    'Relevant to local institutions and communities',
];

export default function About() {
    return (
        <>
            <MarketingHead />

            <PageHero
                image={MARKETING_HERO_IMAGES.about}
                title={
                    <>
                        Built close to the{' '}
                        <em className="text-sage font-normal not-italic">
                            ground.
                        </em>
                    </>
                }
                description="Next Ways Ltd is a Rwandan advisory firm delivering evidence-based consulting at the intersection of environment, agribusiness, and rural livelihoods."
            />

            {/* MANIFESTO */}
            <section className="marketing-container py-18 lg:py-40">
                <h2 className="reveal font-heading text-ink max-w-5xl text-[2.2rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.4rem]">
                    Sustainably{' '}
                    <em className="text-sage font-normal not-italic">
                        driven.
                    </em>
                </h2>
                <p className="text-mkt-muted mt-6 leading-relaxed">
                    Registered in 2023 and headquartered at Norrsken House
                    Kigali, the firm works with public agencies, development
                    partners, and private clients to design, appraise, and
                    evaluate sustainable value-chain, cold-chain, post-harvest,
                    environmental, and rural-development interventions across
                    East Africa. Our tagline,{' '}
                    <strong className="text-ink font-semibold">
                        “sustainably driven,”
                    </strong>{' '}
                    reflects a commitment to grounded fieldwork, rigorous
                    analysis, responsible delivery, and solutions that respect
                    communities, budgets, and the environment.
                </p>
            </section>

            {/* VISION */}
            <section className="bg-forest text-paper marketing-gutter relative overflow-hidden py-18 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div className="max-w-4xl">
                        <p className="reveal text-paper/60 mb-4 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                            Our vision
                        </p>
                        <h2 className="reveal font-heading text-[2.2rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4rem]">
                            To be East Africa’s{' '}
                            <span className="text-sage">trusted partner</span>{' '}
                            for sustainable, evidence-driven transformation.
                        </h2>
                    </div>
                    <p className="reveal text-paper/75 max-w-xl text-base leading-relaxed lg:justify-self-end lg:text-lg">
                        Our mission is to deliver rigorous, field-informed
                        advisory services that turn sustainability ambitions
                        into costed, implementable, and measurable outcomes.
                    </p>
                </div>
            </section>

            {/* APPROACH */}
            <section className="marketing-container py-20 lg:py-40">
                <SectionHeading
                    label="Our approach"
                    align="left"
                    title={
                        <>
                            Advice designed for{' '}
                            <em className="text-sage font-normal not-italic">
                                decisions.
                            </em>
                        </>
                    }
                >
                    <p>
                        Every engagement is designed around evidence and
                        practical decision-making. We seek to understand the
                        realities on the ground before developing
                        recommendations.
                    </p>
                </SectionHeading>
                <div className="reveal mt-10 flex flex-wrap gap-2.5">
                    {approachPoints.map((point) => (
                        <span
                            key={point}
                            className="border-mkt-line bg-paper-deep text-forest rounded-full border px-4 py-2 text-xs font-semibold"
                        >
                            {point}
                        </span>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="marketing-gutter pb-22 text-center lg:pb-44">
                <h2 className="font-heading text-ink mx-auto max-w-3xl text-[2.2rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.4rem]">
                    Bring us the question behind the project.
                </h2>
                <div className="mt-10">
                    <ActionButton to="contact" variant="primary">
                        Start a conversation
                    </ActionButton>
                </div>
            </section>
        </>
    );
}
