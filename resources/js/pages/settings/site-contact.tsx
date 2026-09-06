import { Form, Head, usePage } from '@inertiajs/react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { edit, update } from '@/routes/site-contact';
import type { SiteContact } from '@/types/site-contact';

const groups = [
    {
        title: 'Contact details',
        description: 'Shown on the contact page and in the site footer.',
        fields: [
            {
                name: 'email',
                label: 'Contact email',
                type: 'email',
                required: true,
                maxLength: 255,
            },
            {
                name: 'phone',
                label: 'Phone',
                type: 'tel',
                required: true,
                maxLength: 50,
            },
            {
                name: 'secondary_phone',
                label: 'Secondary phone (optional)',
                type: 'tel',
                maxLength: 50,
            },
            {
                name: 'address',
                label: 'Head office address',
                type: 'text',
                required: true,
                maxLength: 1000,
            },
            {
                name: 'registered_address',
                label: 'Registered office address (optional)',
                type: 'text',
                maxLength: 1000,
            },
        ],
    },
    {
        title: 'Social media',
        description:
            'Enter complete profile URLs. Leave a field blank to hide its link.',
        fields: [
            {
                name: 'linkedin',
                label: 'LinkedIn',
                type: 'url',
                maxLength: 2048,
            },
            {
                name: 'facebook',
                label: 'Facebook',
                type: 'url',
                maxLength: 2048,
            },
            {
                name: 'instagram',
                label: 'Instagram',
                type: 'url',
                maxLength: 2048,
            },
            {
                name: 'twitter',
                label: 'X / Twitter',
                type: 'url',
                maxLength: 2048,
            },
            { name: 'youtube', label: 'YouTube', type: 'url', maxLength: 2048 },
        ],
    },
] satisfies {
    title: string;
    description: string;
    fields: {
        name: keyof SiteContact;
        label: string;
        type: string;
        required?: boolean;
        maxLength: number;
    }[];
}[];

export default function SiteContactSettings() {
    const { siteContact } = usePage().props;
    return (
        <>
            <Head title="Site contact" />
            <Heading
                variant="small"
                title="Site contact"
                description="Manage the contact information visitors see on your website."
            />
            <Form
                {...update.form()}
                options={{ preserveScroll: true }}
                className="space-y-8"
            >
                {({ errors, processing, recentlySuccessful }) => (
                    <>
                        {groups.map((group) => (
                            <fieldset key={group.title} className="space-y-5">
                                <legend className="font-medium">
                                    {group.title}
                                </legend>
                                <p className="text-muted-foreground text-sm">
                                    {group.description}
                                </p>
                                {group.fields.map((field) => (
                                    <div
                                        key={field.name}
                                        className="grid gap-2"
                                    >
                                        <Label htmlFor={field.name}>
                                            {field.label}
                                        </Label>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            required={
                                                'required' in field &&
                                                field.required
                                            }
                                            maxLength={field.maxLength}
                                            defaultValue={
                                                siteContact[field.name] ?? ''
                                            }
                                            aria-invalid={Boolean(
                                                errors[field.name],
                                            )}
                                            aria-describedby={
                                                errors[field.name]
                                                    ? `${field.name}-error`
                                                    : undefined
                                            }
                                        />
                                        <InputError
                                            id={`${field.name}-error`}
                                            message={errors[field.name]}
                                        />
                                    </div>
                                ))}
                            </fieldset>
                        ))}
                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>
                                {processing
                                    ? 'Saving…'
                                    : 'Save contact details'}
                            </Button>
                            {recentlySuccessful && (
                                <p
                                    role="status"
                                    className="text-muted-foreground text-sm"
                                >
                                    Contact details saved.
                                </p>
                            )}
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

SiteContactSettings.layout = {
    breadcrumbs: [{ title: 'Site contact', href: edit() }],
};
