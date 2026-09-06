<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactInquiryRequest;
use App\Mail\ContactInquiryReceived;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use LogicException;

final class ContactInquiryController extends Controller
{
    public function __invoke(StoreContactInquiryRequest $request): RedirectResponse
    {
        $recipient = config('mail.contact_to');

        if (! is_string($recipient) || $recipient === '') {
            throw new LogicException('The contact inquiry recipient is not configured.');
        }

        $inquiry = $request->inquiry();

        Contact::query()->create([
            'full_name' => $inquiry['fullName'],
            'organization' => $inquiry['organization'],
            'email' => $inquiry['email'],
            'phone' => $inquiry['phone'],
            'interest' => $inquiry['interest'],
            'location' => $inquiry['location'],
            'message' => $inquiry['message'],
        ]);

        Mail::to($recipient)->queue((new ContactInquiryReceived($inquiry))->afterCommit());

        return to_route('contact')->with('success', 'Thank you. Your inquiry has been received.');
    }
}
