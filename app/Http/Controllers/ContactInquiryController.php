<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactInquiryRequest;
use App\Mail\ContactInquiryReceived;
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

        Mail::to($recipient)->send(new ContactInquiryReceived($request->inquiry()));

        return to_route('contact')->with('success', 'Thank you. Your inquiry has been sent.');
    }
}
