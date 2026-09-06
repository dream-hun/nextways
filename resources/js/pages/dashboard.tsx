import { Head, Link } from '@inertiajs/react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';

type Contact = {
    id: number;
    full_name: string;
    organization: string;
    email: string;
    phone: string | null;
    interest: string;
    location: string | null;
    message: string;
    created_at: string;
};

type Contacts = {
    data: Contact[];
    total: number;
    current_page: number;
    last_page: number;
};

export default function Dashboard({ contacts }: { contacts: Contacts | null }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                <Heading
                    title={contacts ? 'Contact inquiries' : 'Dashboard'}
                    description={
                        contacts
                            ? `${contacts.total} submissions from the contact page. Newest first.`
                            : 'Welcome to your dashboard.'
                    }
                />
                {contacts && (
                    <>
                        <div className="overflow-hidden rounded-xl border">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <caption className="sr-only">
                                        Contact inquiries, newest submissions
                                        first
                                    </caption>
                                    <thead className="bg-muted/50 text-muted-foreground border-b">
                                        <tr>
                                            {[
                                                'Name',
                                                'Organization',
                                                'Email',
                                                'Phone',
                                                'Interest',
                                                'Location',
                                                'Message',
                                                'Submitted',
                                            ].map((heading) => (
                                                <th
                                                    key={heading}
                                                    scope="col"
                                                    className="px-4 py-3 font-medium whitespace-nowrap"
                                                >
                                                    {heading}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {contacts.data.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan={8}
                                                    className="p-8 text-center"
                                                >
                                                    <p className="font-medium">
                                                        No inquiries yet
                                                    </p>
                                                    <p className="text-muted-foreground mt-2">
                                                        Contact form submissions
                                                        will appear here.
                                                    </p>
                                                </td>
                                            </tr>
                                        ) : (
                                            contacts.data.map((contact) => (
                                                <tr
                                                    key={contact.id}
                                                    className="hover:bg-muted/30 align-top"
                                                >
                                                    <th
                                                        scope="row"
                                                        className="min-w-40 px-4 py-4 font-medium"
                                                    >
                                                        {contact.full_name}
                                                    </th>
                                                    <td className="min-w-40 px-4 py-4">
                                                        {contact.organization}
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <a
                                                            className="underline underline-offset-4"
                                                            href={`mailto:${contact.email}`}
                                                        >
                                                            {contact.email}
                                                        </a>
                                                    </td>
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        {contact.phone ??
                                                            'Not provided'}
                                                    </td>
                                                    <td className="min-w-48 px-4 py-4">
                                                        {contact.interest}
                                                    </td>
                                                    <td className="min-w-40 px-4 py-4">
                                                        {contact.location ??
                                                            'Not provided'}
                                                    </td>
                                                    <td className="min-w-64 px-4 py-4">
                                                        <details>
                                                            <summary className="cursor-pointer rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4">
                                                                View message
                                                                <span className="sr-only">
                                                                    {' '}
                                                                    from{' '}
                                                                    {
                                                                        contact.full_name
                                                                    }
                                                                </span>
                                                            </summary>
                                                            <p className="mt-3 max-w-sm leading-relaxed wrap-break-word whitespace-pre-wrap">
                                                                {
                                                                    contact.message
                                                                }
                                                            </p>
                                                        </details>
                                                    </td>
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        <time
                                                            dateTime={
                                                                contact.created_at
                                                            }
                                                        >
                                                            {new Intl.DateTimeFormat(
                                                                'en-GB',
                                                                {
                                                                    dateStyle:
                                                                        'medium',
                                                                    timeZone:
                                                                        'Africa/Kigali',
                                                                },
                                                            ).format(
                                                                new Date(
                                                                    contact.created_at,
                                                                ),
                                                            )}
                                                        </time>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {contacts.last_page > 1 && (
                            <nav
                                aria-label="Inquiry pages"
                                className="flex items-center justify-between gap-3"
                            >
                                <Button
                                    variant="outline"
                                    asChild
                                    disabled={contacts.current_page === 1}
                                >
                                    <Link
                                        href={dashboard({
                                            query: {
                                                page: contacts.current_page - 1,
                                            },
                                        })}
                                        preserveScroll
                                        aria-disabled={
                                            contacts.current_page === 1
                                        }
                                        tabIndex={
                                            contacts.current_page === 1
                                                ? -1
                                                : undefined
                                        }
                                        onClick={(event) => {
                                            if (contacts.current_page === 1)
                                                event.preventDefault();
                                        }}
                                    >
                                        Previous
                                    </Link>
                                </Button>
                                <span className="text-muted-foreground text-sm">
                                    Page {contacts.current_page} of{' '}
                                    {contacts.last_page}
                                </span>
                                <Button
                                    variant="outline"
                                    asChild
                                    disabled={
                                        contacts.current_page ===
                                        contacts.last_page
                                    }
                                >
                                    <Link
                                        href={dashboard({
                                            query: {
                                                page: contacts.current_page + 1,
                                            },
                                        })}
                                        preserveScroll
                                        aria-disabled={
                                            contacts.current_page ===
                                            contacts.last_page
                                        }
                                        tabIndex={
                                            contacts.current_page ===
                                            contacts.last_page
                                                ? -1
                                                : undefined
                                        }
                                        onClick={(event) => {
                                            if (
                                                contacts.current_page ===
                                                contacts.last_page
                                            )
                                                event.preventDefault();
                                        }}
                                    >
                                        Next
                                    </Link>
                                </Button>
                            </nav>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: dashboard() }],
};
