import {
    ActionButton,
    MARKETING_HERO_IMAGES,
    MarketingHead,
    PageHero,
    SectionHeading,
} from '@/components/marketing/site';
import { cn } from '@/lib/utils';

const firstProject = {
    title: 'Value chain & cold-chain feasibility assessment for horticultural produce aggregation.',
    description:
        'Next Ways conducted a feasibility assessment focused on horticultural produce aggregation and cold-chain opportunities in Nyanza District, Southern Province, Rwanda.',
    period: 'May 2025 to September 2025',
    client: 'OTIS',
    location: 'Nyanza District, Southern Province',
    duration: '5 months',
    focus: 'Aggregation · cold-chain · digital coordination',
    reference:
        'Delivered on time and on budget; received a satisfactory performance rating. Reference: Darius Niyomugabo, Managing Director, OTIS/CONS/2025/009.',
    scope: [
        'Farmer and cooperative mapping',
        'Post-harvest loss-point identification',
        'Technical assessment of cold-room options',
        'Assessment of produce aggregation options',
        'Evaluation of digital coordination tools',
        'Operating and business-model analysis',
        'Pre-feasibility report',
        'Costed pilot concept',
    ],
};

const secondProject = {
    title: 'Feasibility study for a digitally-enabled grain aggregation & post-harvest loss reduction pilot.',
    description:
        'Next Ways assessed the feasibility of a community-level grain aggregation and post-harvest loss reduction pilot incorporating practical digital tools in Kirehe District, Eastern Province, Rwanda.',
    period: 'August 2024 to December 2024',
    client: 'TESC Ltd (Top Environmental, Engineering & Social Consultancies)',
    location: 'Kirehe District, Eastern Province',
    duration: '5 months',
    focus: 'Grain aggregation · storage · traceability',
    reference:
        'The completed work was recommended without reservation. Reference: Dr Ndikubwimana Innocent, Executive Director, TESC Ltd, TESC/CONS/2024/017.',
    scope: [
        'Maize and bean value-chain mapping',
        'Post-harvest loss assessment',
        'Storage assessment',
        'Low-cost farmer-registration tools',
        'Traceability assessment',
        'Buyer-seller matching assessment',
        'Community aggregation and storage concept',
        'Costed pilot concept',
    ],
};

const delivery = [
    [
        '01',
        'Primary Data',
        'Recommendations grounded in evidence collected from the systems and stakeholders affected by the intervention.',
    ],
    [
        '02',
        'Stakeholder Engagement',
        'We engage farmers, cooperatives, businesses, and district authorities.',
    ],
    [
        '03',
        'Technical & Commercial Analysis',
        'Infrastructure and intervention options considered alongside costs, logistics, and operating models.',
    ],
    [
        '04',
        'Decision-Ready Outputs',
        'Recommendations are costed, actionable, and ready to inform programme or investment decisions.',
    ],
];

export default function Projects() {
    return (
        <>
            <MarketingHead />

            <PageHero
                image={MARKETING_HERO_IMAGES.projects}
                title={
                    <>
                        Proof in the{' '}
                        <em className="text-sage font-normal not-italic">
                            work.
                        </em>
                    </>
                }
                description="A practical approach to agricultural value-chain development, post-harvest loss reduction, cold-chain assessment, digital coordination, and investment planning."
            />

            {/* PROJECT GRID */}
            <section className="marketing-container py-18 lg:py-36">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                    <ProjectCard project={firstProject} image />
                    <ProjectCard project={secondProject} image={false} />
                </div>
            </section>

            {/* DELIVERY */}
            <section className="bg-paper-deep/50 marketing-gutter py-18 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        label="How we deliver"
                        title={
                            <>
                                A route from evidence to{' '}
                                <em className="text-sage font-normal not-italic">
                                    action.
                                </em>
                            </>
                        }
                    >
                        <p>
                            Across our engagements, we combine fieldwork,
                            stakeholder insight, technical and commercial
                            analysis, and delivery discipline.
                        </p>
                    </SectionHeading>
                    <div className="border-mkt-line mt-12 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4">
                        {delivery.map(([number, title, description]) => (
                            <div
                                key={number}
                                className={cn(
                                    'min-h-0 py-6 pr-6 last:border-r-0',
                                )}
                            >
                                <span className="font-heading text-sage text-2xl leading-none">
                                    {number}
                                </span>
                                <h3 className="text-forest mt-4 text-base font-semibold">
                                    {title}
                                </h3>
                                <p className="text-mkt-muted mt-2 text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="marketing-gutter pt-16 pb-22 text-center lg:pt-28 lg:pb-44">
                <h2 className="font-heading text-ink mx-auto max-w-3xl text-[2.2rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.4rem]">
                    Rigorous enough for the brief. Grounded enough for the
                    field.
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

function ProjectCard({
    project,
    image,
}: {
    project: typeof firstProject;
    image: boolean;
}) {
    return (
        <article className="flex flex-col gap-6">
            {image ? (
                <div className="reveal border-mkt-line overflow-hidden rounded-2xl border">
                    <div className="aspect-4/3">
                        <picture>
                            <source
                                media="(max-width: 768px)"
                                srcSet="/images/nextways-value-chain-768.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="/images/nextways-value-chain.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/nextways-value-chain.png"
                                alt="Field notes and produce crates during a horticultural assessment"
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </picture>
                    </div>
                </div>
            ) : (
                <div className="reveal from-forest to-sage flex aspect-4/3 flex-col justify-between rounded-lg bg-linear-to-br p-8">
                    <div className="font-heading text-paper text-[2rem] leading-[0.95] font-semibold tracking-[-0.035em] lg:text-5xl">
                        Less loss.
                        <br />
                        <em className="text-sage-pale font-normal not-italic">
                            More signal.
                        </em>
                    </div>
                    <div className="text-paper/70 text-[11px] font-bold tracking-[0.14em] uppercase">
                        Kirehe District · Eastern Province
                    </div>
                </div>
            )}

            <div className="flex flex-col">
                <p className="text-sage text-xs font-bold tracking-[0.17em] uppercase">
                    {project.period}
                </p>
                <h2 className="font-heading text-forest mt-4 max-w-md text-2xl leading-[1.15] font-semibold tracking-[-0.02em] text-balance lg:text-[2rem]">
                    {project.title ?? ' '}
                </h2>
                <p className="text-mkt-muted mt-4 max-w-md leading-relaxed">
                    {project.description ?? ' '}
                </p>
                <dl className="mt-6 grid max-w-md grid-cols-2 gap-x-6 gap-y-4">
                    {(
                        [
                            ['Client', project.client],
                            ['Location', project.location],
                            ['Duration', project.duration],
                            ['Focus', project.focus],
                        ] as [string, string][]
                    ).map(([label, value]) => (
                        <div
                            key={label}
                            className="border-mkt-line border-t pt-3"
                        >
                            <dt className="text-sage text-xs font-bold tracking-[0.16em] uppercase">
                                {label}
                            </dt>
                            <dd className="text-forest mt-1.5 text-sm leading-snug">
                                {value}
                            </dd>
                        </div>
                    ))}
                </dl>
                <div className="mt-6">
                    <p className="text-forest text-xs font-bold tracking-[0.17em] uppercase">
                        Scope of work
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-2">
                        {project.scope.map((item) => (
                            <li
                                key={item}
                                className="text-mkt-muted before:bg-sage relative pl-4 text-sm leading-relaxed before:absolute before:top-[0.62em] before:left-0 before:h-px before:w-1.5"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="text-sage mt-6 text-xs leading-relaxed">
                    {project.reference}
                </p>
            </div>
        </article>
    );
}
