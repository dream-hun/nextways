/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import { useState, type FormEvent } from "react";
import { ActionButton, PageHero, Pathline, SectionHeading } from "@/components/site";

const interests = [
  "Environmental Consulting",
  "Agribusiness & Value-Chain Analysis",
  "Cold-Chain & Post-Harvest",
  "Feasibility & Pre-Investment",
  "Monitoring & Evaluation",
  "Digital Agriculture & Traceability",
  "Rural Transport & Logistics",
  "Other Advisory Support",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero kind="contact contact-hero" label="Get in touch" title={<>Let’s discuss your <em>next project.</em></>} description="If your organization is planning an environmental, agribusiness, value-chain, post-harvest, cold-chain, feasibility, evaluation, digital-agriculture, or rural-logistics initiative, talk to Next Ways about how we can support your decision-making." meta="Kigali · Rwanda" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <SectionHeading label="01 / Contact details" title="Start with the brief.">
                <p>Use the form to tell us about your organization and the advisory support you need. We’ll come back to the question behind the project.</p>
              </SectionHeading>
              <Pathline steps={["Share the context", "Frame the need", "Shape the brief", "Start the work"]} />
              <div style={{ marginTop: 42 }}>
                <div className="contact-block reveal"><h3>Head office</h3><p>Norrsken House Kigali<br />KN 78 St, Kiyovu<br />Nyarugenge, Kigali — Rwanda</p></div>
                <div className="contact-block reveal delay-1"><h3>Registered office</h3><p>KN1 Road 30<br />Muhima, Nyarugenge<br />Kigali, Rwanda</p></div>
                <div className="contact-block reveal delay-2"><h3>Phone</h3><p><a href="tel:+250788867106">+250 788 867 106</a><br /><a href="tel:+250788304638">+250 788 304 638</a></p></div>
                <div className="contact-block reveal delay-3"><h3>Email</h3><p><a href="mailto:sebasile@yahoo.fr">sebasile@yahoo.fr</a></p></div>
                <div className="contact-block reveal delay-4"><h3>TIN</h3><p>121512145</p></div>
              </div>
            </div>

            <div className="contact-form-shell reveal delay-1">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a message.</h2>
                <p>Tell us enough to understand where you are and what needs to move next.</p>
                <div className="form-grid">
                  <div className="field"><label htmlFor="full-name">Full name</label><input id="full-name" name="fullName" autoComplete="name" required /></div>
                  <div className="field"><label htmlFor="organization">Organization</label><input id="organization" name="organization" autoComplete="organization" required /></div>
                  <div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" name="email" autoComplete="email" required /></div>
                  <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" type="tel" name="phone" autoComplete="tel" /></div>
                  <div className="field full"><label htmlFor="interest">Area of interest</label><select id="interest" name="interest" defaultValue="" required><option value="" disabled>Select an advisory area</option>{interests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}</select></div>
                  <div className="field full"><label htmlFor="location">Project location</label><input id="location" name="location" placeholder="District, country, or region" /></div>
                  <div className="field full"><label htmlFor="message">Message / project description</label><textarea id="message" name="message" required placeholder="What decision, challenge, or opportunity are you working through?" /></div>
                </div>
                <div className="form-actions">
                  {sent ? <div className="form-status" role="status">Thank you. Your inquiry has been captured for the next step.</div> : <span className="form-status">We respect the context behind every brief.</span>}
                  <button className="btn btn-primary" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner reveal">
          <div>
            <div className="eyebrow">02 / The Next Ways promise</div>
            <h2 className="display">Sustainably driven. Evidence-led. Implementation-focused.</h2>
          </div>
          <ActionButton href="/services" variant="light">Explore our services</ActionButton>
        </div>
      </section>
    </>
  );
}
