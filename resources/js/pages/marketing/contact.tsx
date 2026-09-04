import {
    MARKETING_HERO_IMAGES,
    MarketingHead,
    PageHero,
} from '@/components/marketing/site';
import { Form } from '@inertiajs/react';
import { store } from '@/routes/contact';
import { cn } from '@/lib/utils';

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
                image={MARKETING_HERO_IMAGES.contact.fallbackSrc}
            />
            <PageHero
                image={MARKETING_HERO_IMAGES.contact}
                title={
                    <>
                        Let’s discuss your{' '}
                        <em className="text-sage font-normal not-italic">
                            next project.
                        </em>
                    </>
                }
                description="Tell us about your organization and the advisory support you need."
            />

            <section className="marketing-container py-18 lg:py-44">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
                    {/* DETAILS */}
                    <div>
                        <p className="text-sage mb-4 text-xs font-bold tracking-[0.2em] uppercase">
                            Contact details
                        </p>
                        <h2 className="font-heading text-ink text-[1.8rem] leading-tight font-semibold tracking-[-0.02em] text-balance lg:text-[2.6rem]">
                            Start with the brief.
                        </h2>
                        <div className="border-mkt-line mt-8 border-t">
                            {[
                                {
                                    label: 'Head office',
                                    value: (
                                        <>
                                            Norrsken House Kigali
                                            <br />
                                            KN 78 St, Kiyovu
                                            <br />
                                            Nyarugenge, Kigali, Rwanda
                                        </>
                                    ),
                                },
                                {
                                    label: 'Registered office',
                                    value: (
                                        <>
                                            KN1 Road 30
                                            <br />
                                            Muhima, Nyarugenge
                                            <br />
                                            Kigali, Rwanda
                                        </>
                                    ),
                                },
                                {
                                    label: 'Phone',
                                    value: (
                                        <>
                                            <a
                                                href="tel:+250788867106"
                                                className="text-forest hover:text-sage font-bold"
                                            >
                                                +250 788 867 106
                                            </a>
                                            <br />
                                            <a
                                                href="tel:+250788304638"
                                                className="text-forest hover:text-sage font-bold"
                                            >
                                                +250 788 304 638
                                            </a>
                                        </>
                                    ),
                                },
                                {
                                    label: 'Email',
                                    value: (
                                        <a
                                            href="mailto:info@nextways.rw"
                                            className="text-forest hover:text-sage font-bold"
                                        >
                                            info@nextways.rw
                                        </a>
                                    ),
                                },
                            ].map((block) => (
                                <div
                                    key={block.label}
                                    className="border-mkt-line border-b py-5"
                                >
                                    <h3 className="text-sage mb-2 text-xs font-bold tracking-[0.17em] uppercase">
                                        {block.label}
                                    </h3>
                                    <p className="text-ink text-[0.95rem] leading-relaxed">
                                        {block.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="border-mkt-line border-t pt-10 lg:pt-0">
                        <Form
                            {...store.form()}
                            className="flex flex-col gap-5 lg:gap-[1.9rem]"
                            resetOnSuccess
                        >
                            {({ errors, processing, recentlySuccessful }) => (
                                <>
                                    <h2 className="font-heading text-ink text-2xl leading-tight font-semibold tracking-[-0.02em] text-balance lg:text-[2.2rem]">
                                        Send us a message.
                                    </h2>

                                    <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
                                        <Field
                                            id="full-name"
                                            label="Full name"
                                            error={errors.fullName}
                                            errorId="full-name-error"
                                        >
                                            <input
                                                className={inputClass}
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
                                        </Field>
                                        <Field
                                            id="organization"
                                            label="Organization"
                                            error={errors.organization}
                                            errorId="organization-error"
                                        >
                                            <input
                                                className={inputClass}
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
                                        </Field>
                                        <Field
                                            id="email"
                                            label="Email address"
                                            error={errors.email}
                                            errorId="email-error"
                                        >
                                            <input
                                                className={inputClass}
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
                                        </Field>
                                        <Field
                                            id="phone"
                                            label="Phone number"
                                            error={errors.phone}
                                            errorId="phone-error"
                                        >
                                            <input
                                                className={inputClass}
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
                                        </Field>
                                    </div>

                                    <Field
                                        id="interest"
                                        label="Area of interest"
                                        error={errors.interest}
                                        errorId="interest-error"
                                    >
                                        <select
                                            className={inputClass}
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
                                            {interests.map((interest) => (
                                                <option
                                                    key={interest}
                                                    value={interest}
                                                >
                                                    {interest}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>

                                    <Field
                                        id="location"
                                        label="Project location"
                                        error={errors.location}
                                        errorId="location-error"
                                    >
                                        <input
                                            className={inputClass}
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
                                    </Field>

                                    <Field
                                        id="message"
                                        label="Message / project description"
                                        error={errors.message}
                                        errorId="message-error"
                                    >
                                        <textarea
                                            className={cn(
                                                inputClass,
                                                'min-h-32 resize-y',
                                            )}
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
                                    </Field>

                                    <div
                                        className="contact-honeypot sr-only"
                                        aria-hidden="true"
                                    >
                                        <label htmlFor="website">Website</label>
                                        <input
                                            className={inputClass}
                                            id="website"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="border-mkt-line mt-2 flex flex-col items-start gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between">
                                        <span
                                            className="text-mkt-muted max-w-[30ch] text-sm leading-relaxed"
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
                                            type="submit"
                                            disabled={processing}
                                            className={cn(
                                                'bg-forest text-paper hover:bg-forest-deep inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-colors disabled:opacity-55',
                                            )}
                                        >
                                            {processing
                                                ? 'Sending…'
                                                : 'Send inquiry'}
                                        </button>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </section>
        </>
    );
}

const inputClass =
    'peer w-full min-h-[52px] border-0 border-b border-mkt-line bg-transparent py-3.5 text-base text-ink outline-none transition-colors focus:border-b-2 focus:border-sage aria-[invalid=true]:border-b-clay lg:text-[1.15rem]';

function Field({
    id,
    label,
    children,
    error,
    errorId,
}: {
    id: string;
    label: string;
    children: React.ReactNode;
    error?: string;
    errorId: string;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="text-mkt-muted text-xs font-semibold tracking-wide"
            >
                {label}
            </label>
            {children}
            {error ? (
                <span className="text-clay text-xs" id={errorId} role="alert">
                    {error}
                </span>
            ) : null}
        </div>
    );
}
