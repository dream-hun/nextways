<?php

declare(strict_types=1);

use App\Http\Requests\StoreContactInquiryRequest;
use App\Mail\ContactInquiryReceived;
use Illuminate\Support\Facades\Mail;

/**
 * @return array{fullName: string, organization: string, email: string, phone: string|null, interest: string, location: string|null, message: string, website: string|null}
 */
function validInquiry(): array
{
    return [
        'fullName' => 'Aline Uwase',
        'organization' => 'Kivu Food Systems',
        'email' => 'aline@example.com',
        'phone' => '+250 788 000 000',
        'interest' => StoreContactInquiryRequest::INTERESTS[0],
        'location' => 'Musanze, Rwanda',
        'message' => 'We need support evaluating a regional cold-chain investment.',
        'website' => null,
    ];
}

it('sends a valid website inquiry to the configured recipient', function (): void {
    Mail::fake();
    config()->set('mail.contact_to', 'advisory@nextways.rw');

    $response = $this->post(route('contact.store'), validInquiry());

    $response->assertRedirectToRoute('contact');
    Mail::assertSent(ContactInquiryReceived::class, function (ContactInquiryReceived $mail): bool {
        return $mail->hasTo('advisory@nextways.rw')
            && $mail->inquiry['fullName'] === 'Aline Uwase'
            && $mail->inquiry['message'] === 'We need support evaluating a regional cold-chain investment.';
    });
});

it('rejects an incomplete inquiry without sending mail', function (): void {
    Mail::fake();

    $response = $this->from(route('contact'))->post(route('contact.store'), []);

    $response
        ->assertRedirect(route('contact'))
        ->assertSessionHasErrors(['fullName', 'organization', 'email', 'interest', 'message']);
    Mail::assertNothingSent();
});

it('rejects invalid inquiry values', function (string $field, string $invalidValue): void {
    Mail::fake();
    $inquiry = validInquiry();
    $inquiry[$field] = $invalidValue;

    $response = $this->from(route('contact'))->post(
        route('contact.store'),
        $inquiry,
    );

    $response->assertRedirect(route('contact'))->assertSessionHasErrors($field);
    Mail::assertNothingSent();
})->with([
    'invalid email' => ['email', 'not-an-email'],
    'unknown advisory area' => ['interest', 'Something else'],
    'brief message' => ['message', 'Too short'],
    'honeypot value' => ['website', 'https://spam.example'],
]);

it('escapes untrusted content in the inquiry email', function (): void {
    $inquiry = validInquiry();
    $inquiry['message'] = '<script>alert("xss")</script> This message is long enough.';
    $mail = new ContactInquiryReceived($inquiry);

    $html = $mail->render();

    expect($html)
        ->not->toContain('<script>alert("xss")</script>')
        ->toContain('&lt;script&gt;alert("xss")&lt;/script&gt;');
});
