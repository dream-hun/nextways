/* Field Notes / Editorial Practice: warm paper field, Next Ways Forest anchor, DM Serif Display + Manrope, editorial splits, field-note labels, restrained transform/opacity motion. */
import {
    ActionButton,
    MarketingHead,
    PageHero,
    Pathline,
    SectionHeading,
} from '@/components/marketing/site';
import { Form } from '@inertiajs/react';
import { store } from '@/routes/contact';

const interests = [
    'Environmental Consulting',
    'Agribusiness & Value-Chain Analysis',
    'Cold-Chain & Post-Harvest',
    'Feasibility & Pre-Investment',
    'Monitoring & Evaluation',
    'Digital Agriculture & Traceability',
    'Rural Transport & Logistics',
    'Other Advisory Support',
];

export default function Contact() {
    return (
        <>
            <MarketingHead
                title="Contact"
                description="Contact Next Ways Ltd in Kigali about environmental, agribusiness, feasibility, evaluation, digital agriculture, or rural logistics advisory."
            />
            <PageHero
                kind="contact contact-hero"
                label="Get in touch"
                title="Let’s discuss your next project."
                description="If your organization is planning an environmental, agribusiness, value-chain, post-harvest, cold-chain, feasibility, evaluation, digital-agriculture, or rural-logistics initiative, talk to Next Ways about how we can support your decision-making."
                meta="Kigali · Rwanda"
            />

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-details">
                            <SectionHeading
                                label="01 / Contact details"
                                title="Start with the brief."
                            >
                                <p>
                                    Use the form to tell us about your
                                    organization and the advisory support you
                                    need. We’ll come back to the question behind
                                    the project.
                                </p>
                            </SectionHeading>
                            <Pathline
                                steps={[
                                    'Share the context',
                                    'Frame the need',
                                    'Shape the brief',
                                    'Start the work',
                                ]}
                            />
                            <div style={{ marginTop: 42 }}>
                                <div className="contact-block reveal">
                                    <h3>Head office</h3>
                                    <p>
                                        Norrsken House Kigali
                                        <br />
                                        KN 78 St, Kiyovu
                                        <br />
                                        Nyarugenge, Kigali — Rwanda
                                    </p>
                                </div>
                                <div className="contact-block reveal delay-1">
                                    <h3>Registered office</h3>
                                    <p>
                                        KN1 Road 30
                                        <br />
                                        Muhima, Nyarugenge
                                        <br />
                                        Kigali, Rwanda
                                    </p>
                                </div>
                                <div className="contact-block reveal delay-2">
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="tel:+250788867106">
                                            +250 788 867 106
                                        </a>
                                        <br />
                                        <a href="tel:+250788304638">
                                            +250 788 304 638
                                        </a>
                                    </p>
                                </div>
                                <div className="contact-block reveal delay-3">
                                    <h3>Email</h3>
                                    <p>
                                        <a href="mailto:sebasile@yahoo.fr">
                                            sebasile@yahoo.fr
                                        </a>
                                    </p>
                                </div>
                                <div className="contact-block reveal delay-4">
                                    <h3>TIN</h3>
                                    <p>121512145</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-shell reveal delay-1">
                            <Form
                                {...store.form()}
                                className="contact-form"
                                resetOnSuccess
                            >
                                {({
                                    errors,
                                    processing,
                                    recentlySuccessful,
                                }) => (
                                    <>
                                        <h2>Send us a message.</h2>
                                        <p>
                                            Tell us enough to understand where
                                            you are and what needs to move next.
                                        </p>
                                        <div className="form-grid">
                                            <div className="field">
                                                <label htmlFor="full-name">
                                                    Full name
                                                </label>
                                                <input
                                                    id="full-name"
                                                    name="fullName"
                                                    autoComplete="name"
                                                    maxLength={120}
                                                    required
                                                    aria-invalid={Boolean(
                                                        errors.fullName,
                                                    )}
                                                    aria-describedby={
                                                        errors.fullName
                                                            ? 'full-name-error'
                                                            : undefined
                                                    }
                                                />
                                                {errors.fullName && (
                                                    <span
                                                        className="field-error"
                                                        id="full-name-error"
                                                        role="alert"
                                                    >
                                                        {errors.fullName}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="field">
                                                <label htmlFor="organization">
                                                    Organization
                                                </label>
                                                <input
                                                    id="organization"
                                                    name="organization"
                                                    autoComplete="organization"
                                                    maxLength={160}
                                                    required
                                                    aria-invalid={Boolean(
                                                        errors.organization,
                                                    )}
                                                    aria-describedby={
                                                        errors.organization
                                                            ? 'organization-error'
                                                            : undefined
                                                    }
                                                />
                                                {errors.organization && (
                                                    <span
                                                        className="field-error"
                                                        id="organization-error"
                                                        role="alert"
                                                    >
                                                        {errors.organization}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="field">
                                                <label htmlFor="email">
                                                    Email address
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    autoComplete="email"
                                                    inputMode="email"
                                                    spellCheck={false}
                                                    maxLength={254}
                                                    required
                                                    aria-invalid={Boolean(
                                                        errors.email,
                                                    )}
                                                    aria-describedby={
                                                        errors.email
                                                            ? 'email-error'
                                                            : undefined
                                                    }
                                                />
                                                {errors.email && (
                                                    <span
                                                        className="field-error"
                                                        id="email-error"
                                                        role="alert"
                                                    >
                                                        {errors.email}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="field">
                                                <label htmlFor="phone">
                                                    Phone number
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    name="phone"
                                                    autoComplete="tel"
                                                    inputMode="tel"
                                                    maxLength={40}
                                                    aria-invalid={Boolean(
                                                        errors.phone,
                                                    )}
                                                    aria-describedby={
                                                        errors.phone
                                                            ? 'phone-error'
                                                            : undefined
                                                    }
                                                />
                                                {errors.phone && (
                                                    <span
                                                        className="field-error"
                                                        id="phone-error"
                                                        role="alert"
                                                    >
                                                        {errors.phone}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="field full">
                                                <label htmlFor="interest">
                                                    Area of interest
                                                </label>
                                                <select
                                                    id="interest"
                                                    name="interest"
                                                    defaultValue=""
                                                    required
                                                    aria-invalid={Boolean(
                                                        errors.interest,
                                                    )}
                                                    aria-describedby={
                                                        errors.interest
                                                            ? 'interest-error'
                                                            : undefined
                                                    }
                                                >
                                                    <option value="" disabled>
                                                        Select an advisory area
                                                    </option>
                                                    {interests.map(
                                                        (interest) => (
                                                            <option
                                                                key={interest}
                                                                value={interest}
                                                            >
                                                                {interest}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                                {errors.interest && (
                                                    <span
                                                        className="field-error"
                                                        id="interest-error"
                                                        role="alert"
                                                    >
                                                        {errors.interest}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="field full">
                                                <label htmlFor="location">
                                                    Project location
                                                </label>
                                                <input
                                                    id="location"
                                                    name="location"
                                                    autoComplete="off"
                                                    maxLength={160}
                                                    placeholder="District, country, or region…"
                                                    aria-invalid={Boolean(
                                                        errors.location,
                                                    )}
                                                    aria-describedby={
                                                        errors.location
                                                            ? 'location-error'
                                                            : undefined
                                                    }
                                                />
                                                {errors.location && (
                                                    <span
                                                        className="field-error"
                                                        id="location-error"
                                                        role="alert"
                                                    >
                                                        {errors.location}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="field full">
                                                <label htmlFor="message">
                                                    Message / project
                                                    description
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    minLength={20}
                                                    maxLength={5000}
                                                    required
                                                    placeholder="What decision, challenge, or opportunity are you working through?…"
                                                    aria-invalid={Boolean(
                                                        errors.message,
                                                    )}
                                                    aria-describedby={
                                                        errors.message
                                                            ? 'message-error'
                                                            : undefined
                                                    }
                                                />
                                                {errors.message && (
                                                    <span
                                                        className="field-error"
                                                        id="message-error"
                                                        role="alert"
                                                    >
                                                        {errors.message}
                                                    </span>
                                                )}
                                            </div>
                                            <div
                                                className="contact-honeypot"
                                                aria-hidden="true"
                                            >
                                                <label htmlFor="website">
                                                    Website
                                                </label>
                                                <input
                                                    id="website"
                                                    name="website"
                                                    tabIndex={-1}
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-actions">
                                            <span
                                                className="form-status"
                                                role={
                                                    recentlySuccessful
                                                        ? 'status'
                                                        : undefined
                                                }
                                                aria-live="polite"
                                            >
                                                {recentlySuccessful
                                                    ? 'Thank you. Your inquiry has been sent.'
                                                    : 'We respect the context behind every brief.'}
                                            </span>
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                disabled={processing}
                                            >
                                                {processing
                                                    ? 'Sending…'
                                                    : 'Send inquiry'}{' '}
                                                {!processing && (
                                                    <span aria-hidden="true">
                                                        ↗
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="cta-inner reveal container">
                    <div>
                        <div className="eyebrow">
                            02 / The Next Ways promise
                        </div>
                        <h2 className="display">
                            Sustainably driven. Evidence-led.
                            Implementation-focused.
                        </h2>
                    </div>
                    <ActionButton to="services" variant="light">
                        Explore our services
                    </ActionButton>
                </div>
            </section>
        </>
    );
}
