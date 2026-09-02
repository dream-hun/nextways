<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

final class StoreContactInquiryRequest extends FormRequest
{
    /** @var list<string> */
    public const INTERESTS = [
        'Environmental Consulting',
        'Agribusiness & Value-Chain Analysis',
        'Cold-Chain & Post-Harvest',
        'Feasibility & Pre-Investment',
        'Monitoring & Evaluation',
        'Digital Agriculture & Traceability',
        'Rural Transport & Logistics',
        'Other Advisory Support',
    ];

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fullName' => ['required', 'string', 'max:120'],
            'organization' => ['required', 'string', 'max:160'],
            'email' => ['required', Rule::email()->rfcCompliant(), 'max:254'],
            'phone' => ['nullable', 'string', 'max:40'],
            'interest' => ['required', Rule::in(self::INTERESTS)],
            'location' => ['nullable', 'string', 'max:160'],
            'message' => ['required', 'string', 'min:20', 'max:5000'],
            'website' => ['nullable', 'prohibited'],
        ];
    }

    /** @return array<string, string> */
    public function messages(): array
    {
        return [
            'message.min' => 'Please share at least 20 characters so we can understand your project.',
            'website.prohibited' => 'Your inquiry could not be submitted. Please try again.',
        ];
    }

    /**
     * @return array{fullName: string, organization: string, email: string, phone: string|null, interest: string, location: string|null, message: string}
     */
    public function inquiry(): array
    {
        return [
            'fullName' => $this->string('fullName')->toString(),
            'organization' => $this->string('organization')->toString(),
            'email' => $this->string('email')->toString(),
            'phone' => $this->filled('phone') ? $this->string('phone')->toString() : null,
            'interest' => $this->string('interest')->toString(),
            'location' => $this->filled('location') ? $this->string('location')->toString() : null,
            'message' => $this->string('message')->toString(),
        ];
    }
}
