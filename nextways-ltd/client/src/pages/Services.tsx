/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import { ActionButton, PageHero, Pathline, RouteRule, SectionHeading } from "@/components/site";

const serviceGroups = [
  {
    number: "01",
    title: "Environmental & Sustainability Consulting",
    description: "We help clients identify environmental considerations early and translate sustainability requirements into practical management actions.",
    deliverables: ["ESIA scoping notes", "Environmental due diligence", "Safeguards reviews & audits", "Environmental management plans", "Sustainability-focused advisory"],
    outcome: "Environmental assessments, safeguards documentation, management recommendations, and decision-ready technical notes.",
  },
  {
    number: "02",
    title: "Agribusiness & Value-Chain Analysis",
    description: "We analyze agricultural systems from production through aggregation and market access to identify constraints, opportunities, and practical upgrading pathways.",
    deliverables: ["Value-chain mapping", "Actor diagnostics", "Production-to-market analysis", "Market & logistics assessment", "Upgrading strategies"],
    outcome: "Value-chain maps, actor diagnostics, bottleneck analysis, and prioritized upgrading recommendations.",
  },
  {
    number: "03",
    title: "Cold-Chain & Post-Harvest Feasibility",
    description: "We help clients understand where losses occur and assess practical infrastructure and operating models for aggregation, storage, and cold-chain development.",
    deliverables: ["Loss-point diagnosis", "Aggregation assessment", "Storage analysis", "Cold-room sizing", "Costed pilot design"],
    outcome: "Loss assessments, infrastructure options, business-model analysis, and costed pilot concepts.",
  },
  {
    number: "04",
    title: "Feasibility Studies & Pre-Investment Appraisal",
    description: "We transform project ideas into structured evidence for investment and implementation decisions.",
    deliverables: ["Pre-feasibility studies", "Business-model development", "Financial analysis", "Technical option assessment", "Pre-investment appraisal"],
    outcome: "Feasibility reports, financial analysis, business models, implementation options, and costed recommendations.",
  },
  {
    number: "05",
    title: "Monitoring, Evaluation & Learning",
    description: "We conduct mixed-methods research to help organizations understand performance, outcomes, and lessons from programmes and interventions.",
    deliverables: ["Baseline evaluations", "Mid-line evaluations", "End-line evaluations", "Mixed-methods field research", "Learning-oriented analysis"],
    outcome: "Evaluation reports, baseline studies, performance findings, and learning briefs.",
  },
  {
    number: "06",
    title: "Digital Agriculture & Traceability",
    description: "We assess practical, low-cost digital tools that can strengthen coordination and visibility across agricultural value chains.",
    deliverables: ["Registration tools", "Traceability options", "Buyer-seller matching", "Digital coordination systems", "Pilot design"],
    outcome: "Tool selection, adoption pathways, and grounded pilots designed for real-world uptake.",
  },
  {
    number: "07",
    title: "Rural Transport & Logistics Advisory",
    description: "We provide advisory support around rural passenger and freight movement, with attention to the role transport and logistics play in market access and value-chain performance.",
    deliverables: ["Rural mobility assessment", "Freight movement analysis", "Route and access review", "Logistics options", "Implementation advice"],
    outcome: "Practical transport and logistics recommendations aligned with local operating realities.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero kind="services" label="Our services" title={<>The work behind better <em>decisions.</em></>} description="Advisory services designed to help clients understand complex environmental and agri-food challenges, assess investment opportunities, and develop practical interventions." aside={<div className="hero-evidence"><div className="evidence-top"><span>Service note / 07</span><span>Capability</span></div><div className="evidence-value">7 areas<br /><em>of work.</em></div><p>From environmental review and value chains to digital agriculture and rural logistics.</p><div className="evidence-rule">One practice, many routes</div></div>} />

      <section className="section">
        <div className="container">
          <SectionHeading label="01 / A practical brief" title={<>From complexity to <em>clarity.</em></>}>
            <p>Our work covers the full arc from first question to implementable next move: fieldwork, assessment, analysis, appraisal, and learning.</p>
            <p style={{ marginTop: 22 }}>We work with the details that make an intervention viable — technical choices, local institutions, operating models, budgets, logistics, and the people who will carry it forward.</p>
          </SectionHeading>
          <Pathline steps={["Scope the question", "Assess the system", "Model the options", "Recommend the move"]} />

          <div className="services-list">
            {serviceGroups.map((service, index) => (
              <article className={`service-detail reveal delay-${Math.min(index + 1, 4)}`} key={service.number}>
                <div className="detail-number">{service.number}</div>
                <div><h3>{service.title}</h3></div>
                <div className="detail-copy">
                  <p>{service.description}</p>
                  <div className="detail-deliverables">{service.deliverables.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="scope-title">Typical deliverables</div>
                  <p style={{ marginBottom: 0 }}>{service.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section forest-panel">
        <div className="container">
          <SectionHeading label="02 / The right fit" title={<>A tailored brief, not a <em>template.</em></>} light>
            <p>Tell us about the challenge, programme, investment, or value chain you are working on. We’ll help shape the right advisory engagement around the decisions ahead.</p>
          </SectionHeading>
          <div className="reveal delay-2" style={{ marginTop: 42 }}><ActionButton href="/contact" variant="light">Discuss your project</ActionButton></div>
        </div>
      </section>
    </>
  );
}
