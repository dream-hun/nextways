<?php

declare(strict_types=1);

use App\Mail\ContactInquiryReceived;

test('contact inquiry subject identifies the sender', function (): void {
    $mail = new ContactInquiryReceived([
        'fullName' => 'Aline Uwase',
        'organization' => 'Kivu Food Systems',
        'email' => 'aline@example.com',
        'phone' => null,
        'interest' => 'Environmental Consulting',
        'location' => null,
        'message' => 'We need support evaluating a regional investment.',
    ]);

    expect($mail->envelope()->subject)->toBe('Website inquiry from Aline Uwase');
});
