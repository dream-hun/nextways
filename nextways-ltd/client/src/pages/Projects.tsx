/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import { ActionButton, CameraDepthScene, Pathline, RouteRule, SectionHeading } from "@/components/site";

const firstScope = ["Farmer and cooperative mapping", "Post-harvest loss-point identification", "Technical assessment of cold-room options", "Assessment of produce aggregation options", "Evaluation of digital coordination tools", "Operating and business-model analysis", "Pre-feasibility report", "Costed pilot concept"];
const secondScope = ["Maize and bean value-chain mapping", "Post-harvest loss assessment", "Storage assessment", "Low-cost farmer-registration tools", "Traceability assessment", "Buyer-seller matching assessment", "Community aggregation and storage concept", "Costed pilot concept"];
const delivery = [
  ["01", "Primary Data", "Recommendations grounded in evidence collected from the systems and stakeholders affected by the intervention."],
  ["02", "Stakeholder Engagement", "We engage farmers, cooperatives, businesses, and district authorities."],
  ["03", "Technical & Commercial Analysis", "Infrastructure and intervention options considered alongside costs, logistics, and operating models."],
  ["04", "Decision-Ready Outputs", "Recommendations are costed, actionable, and ready to inform programme or investment decisions."],
];

export default function Projects() {
  return (
    <>
      <section className="page-hero projects" data-camera-section>
        <CameraDepthScene kind="projects" />
        <div className="page-hero-inner">
          <div className="eyebrow reveal">Selected project portfolio</div>
          <h1 className="display reveal delay-1">Proof in the <em>work.</em></h1>
          <p className="reveal delay-2">A practical approach to agricultural value-chain development, post-harvest loss reduction, cold-chain assessment, digital coordination, and investment planning.</p>
          <div className="hero-meta reveal delay-3"><span>Next Ways Ltd</span><span>Portfolio / 2024—2025</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Pathline steps={["Fieldwork", "Analysis", "Appraisal", "Action"]} />
          <div className="project-list">
            <article className="project-card">
              <div className="project-visual image-shell reveal">
                <div className="image-core"><img src="/manus-storage/projects-value-chain_251f5512.jpg" alt="Field notes and produce crates during a horticultural assessment" /></div>
                <div className="feature-note"><span>Case 01</span><span>Horticulture · Nyanza</span></div>
              </div>
              <div className="project-copy reveal delay-1">
                <RouteRule>May 2025 — September 2025</RouteRule>
                <h2>Value chain &amp; cold-chain feasibility assessment for horticultural produce aggregation.</h2>
                <p>Next Ways conducted a feasibility assessment focused on horticultural produce aggregation and cold-chain opportunities in Nyanza District, Southern Province, Rwanda.</p>
                <dl className="project-meta">
                  <div><dt>Client</dt><dd>OTIS</dd></div>
                  <div><dt>Location</dt><dd>Nyanza District, Southern Province</dd></div>
                  <div><dt>Duration</dt><dd>5 months</dd></div>
                  <div><dt>Focus</dt><dd>Aggregation · cold-chain · digital coordination</dd></div>
                </dl>
                <div className="scope-title">Scope of work</div>
                <ul className="scope-list">{firstScope.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="reference">Delivered on time and on budget; received a satisfactory performance rating. Reference: Darius Niyomugabo, Managing Director — OTIS/CONS/2025/009.</div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-visual image-shell reveal delay-1">
                <div className="image-core" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "34px", background: "linear-gradient(135deg, var(--forest), var(--sage))" }}>
                  <div className="eyebrow" style={{ color: "var(--sage-pale)" }}>Case 02 / Grain systems</div>
                  <div style={{ color: "var(--paper)", fontFamily: "DM Serif Display, serif", fontSize: "clamp(2.5rem, 5vw, 5.2rem)", lineHeight: ".92", letterSpacing: "-.035em" }}>Less loss.<br /><em style={{ color: "var(--sage-pale)" }}>More signal.</em></div>
                  <div style={{ color: "rgba(253,251,247,.72)", fontSize: "11px", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>Kirehe District · Eastern Province</div>
                </div>
              </div>
              <div className="project-copy reveal delay-2">
                <RouteRule>August 2024 — December 2024</RouteRule>
                <h2>Feasibility study for a digitally-enabled grain aggregation &amp; post-harvest loss reduction pilot.</h2>
                <p>Next Ways assessed the feasibility of a community-level grain aggregation and post-harvest loss reduction pilot incorporating practical digital tools in Kirehe District, Eastern Province, Rwanda.</p>
                <dl className="project-meta">
                  <div><dt>Client</dt><dd>TESC Ltd — Top Environmental, Engineering &amp; Social Consultancies</dd></div>
                  <div><dt>Location</dt><dd>Kirehe District, Eastern Province</dd></div>
                  <div><dt>Duration</dt><dd>5 months</dd></div>
                  <div><dt>Focus</dt><dd>Grain aggregation · storage · traceability</dd></div>
                </dl>
                <div className="scope-title">Scope of work</div>
                <ul className="scope-list">{secondScope.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="reference">The completed work was recommended without reservation. Reference: Dr Ndikubwimana Innocent, Executive Director, TESC Ltd — TESC/CONS/2024/017.</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(217, 229, 220, .32)" }}>
        <div className="container">
          <SectionHeading label="02 / How we deliver" title={<>A route from evidence to <em>action.</em></>}>
            <p>Across our engagements, we combine fieldwork, stakeholder insight, technical and commercial analysis, and delivery discipline.</p>
          </SectionHeading>
          <div className="delivery-steps">
            {delivery.map(([number, title, description]) => <div className="delivery-step reveal" key={number}><div className="step-no">{number}</div><h3>{title}</h3><p>{description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner reveal">
          <div>
            <div className="eyebrow">03 / Why clients choose us</div>
            <h2 className="display">Rigorous enough for the brief. Grounded enough for the field.</h2>
          </div>
          <ActionButton href="/contact" variant="light">Start a conversation</ActionButton>
        </div>
      </section>
    </>
  );
}
