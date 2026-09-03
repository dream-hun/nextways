/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import {
    ActionButton,
    MarketingHead,
    PageHero,
    Pathline,
    SectionHeading,
} from '@/components/marketing/site';

const companyRows = [
    ['Registered name', 'NEXT WAYS LTD'],
    ['Company type', 'Private · Company Limited by Shares'],
    ['Registration date', '24 May 2023'],
    ['Company code / TIN', '121512145'],
    ['Managing Director / CEO', 'Basile SEBURIKOKO'],
    [
        'Head office',
        'Norrsken House Kigali, KN 78 St, Kiyovu, Nyarugenge, Kigali',
    ],
    ['Registered office', 'KN1 Road 30, Muhima, Nyarugenge, Kigali'],
    ['Main activity', 'Environmental Consulting (SM749010)'],
    ['Share capital', 'RWF 100,000,000'],
];
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
            <MarketingHead
                title="About"
                description="Meet Next Ways Ltd, a Rwandan advisory practice combining fieldwork, evidence, and implementation discipline."
            />
            <PageHero
                kind="about"
                label="About Next Ways"
                title={
                    <>
                        Built close to the <em>ground.</em>
                    </>
                }
                description="Next Ways Ltd is a Rwandan advisory firm delivering evidence-based consulting at the intersection of environment, agribusiness, and rural livelihoods."
                aside={
                    <div className="hero-evidence">
                        <div className="evidence-value">2023</div>
                        <p>
                            Registered in Rwanda. Headquartered at Norrsken
                            House Kigali.
                        </p>
                    </div>
                }
            />

            <section className="section">
                <div className="container">
                    <div className="split-section">
                        <div>
                            <h2 className="display reveal delay-1">
                                Sustainably <em>driven.</em>
                            </h2>
                        </div>
                        <div className="split-content body-copy reveal delay-2">
                            <p>
                                Registered in 2023 and headquartered at Norrsken
                                House Kigali, the firm works with public
                                agencies, development partners, and private
                                clients to design, appraise, and evaluate
                                sustainable value-chain, cold-chain,
                                post-harvest, environmental, and
                                rural-development interventions across East
                                Africa.
                            </p>
                            <p>
                                Our tagline,{' '}
                                <strong>“sustainably driven,”</strong> reflects
                                a commitment to grounded fieldwork, rigorous
                                analysis, responsible delivery, and solutions
                                that respect communities, budgets, and the
                                environment.
                            </p>
                            <div className="callout-line">
                                Good advice begins by seeing the system as it
                                is, before imagining what it could become.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section statement-band">
                <div className="statement-wrap container">
                    <div />
                    <div className="statement-copy">
                        <h2 className="serif-quote reveal delay-1">
                            To be East Africa’s trusted partner for sustainable,
                            evidence-driven transformation.
                        </h2>
                        <p className="reveal delay-2">
                            Our mission is to deliver rigorous, field-informed
                            advisory services that turn sustainability ambitions
                            into costed, implementable, and measurable outcomes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionHeading
                        label="03 / Our approach"
                        title={
                            <>
                                Advice designed for <em>decisions.</em>
                            </>
                        }
                    >
                        <p>
                            Every engagement is designed around evidence and
                            practical decision-making. We seek to understand the
                            realities on the ground before developing
                            recommendations.
                        </p>
                        <p style={{ marginTop: 22 }}>
                            Depending on the assignment, this may involve
                            stakeholder consultation, farmer and cooperative
                            engagement, value-chain mapping, technical
                            assessments, environmental review, mixed-methods
                            research, financial analysis, or evaluation.
                        </p>
                    </SectionHeading>
                    <Pathline
                        steps={[
                            'Listen first',
                            'Map the system',
                            'Test the options',
                            'Make it measurable',
                        ]}
                    />
                    <div className="pill-list reveal delay-2">
                        {approachPoints.map((point) => (
                            <span key={point}>{point}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="section-tight"
                style={{ background: 'rgba(217, 229, 220, .32)' }}
            >
                <div className="leadership container">
                    <div>
                        <h2 className="display reveal delay-1">
                            One practice. <em>Close to the work.</em>
                        </h2>
                    </div>
                    <div className="leadership-card reveal delay-2">
                        <div className="initials" aria-hidden="true">
                            BS
                        </div>
                        <h3>Basile SEBURIKOKO</h3>
                        <div className="role">
                            Chief Executive Officer &amp; Managing Director
                        </div>
                        <p>
                            Basile founded Next Ways in 2023 and leads the
                            firm’s strategy, client engagements, and technical
                            quality. He brings hands-on expertise in
                            environmental consulting, agribusiness and
                            value-chain development, rural transport and
                            logistics, and community-based programme design.
                        </p>
                        <p>
                            His experience includes directing feasibility
                            studies and assessments covering horticulture,
                            grain, post-harvest systems, and cold-chain
                            interventions across Rwanda’s Southern, Eastern, and
                            Northern Provinces.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionHeading title="The details matter.">
                        <p>
                            A clear operating base for work that needs to be
                            both locally relevant and professionally
                            accountable.
                        </p>
                    </SectionHeading>
                    <div className="reveal delay-2" style={{ marginTop: 58 }}>
                        <table className="data-table">
                            <tbody>
                                {companyRows.map(([label, value]) => (
                                    <tr key={label}>
                                        <th scope="row">{label}</th>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="cta-inner reveal container">
                    <div>
                        <h2 className="display">
                            Bring us the question behind the project.
                        </h2>
                    </div>
                    <ActionButton to="contact" variant="light">
                        Start a conversation
                    </ActionButton>
                </div>
            </section>
        </>
    );
}
