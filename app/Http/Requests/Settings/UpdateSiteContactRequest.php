<?php

declare(strict_types=1);

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

final class UpdateSiteContactRequest extends FormRequest
{
    /** @return array<string, array<int, string>> */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50', 'regex:/^\+?[0-9 ()\-.]+$/'],
            'secondary_phone' => ['present', 'nullable', 'string', 'max:50', 'regex:/^\+?[0-9 ()\-.]+$/'],
            'address' => ['required', 'string', 'max:1000'],
            'registered_address' => ['present', 'nullable', 'string', 'max:1000'],
            'linkedin' => ['present', 'nullable', 'string', 'url:http,https', 'max:2048'],
            'facebook' => ['present', 'nullable', 'string', 'url:http,https', 'max:2048'],
            'instagram' => ['present', 'nullable', 'string', 'url:http,https', 'max:2048'],
            'twitter' => ['present', 'nullable', 'string', 'url:http,https', 'max:2048'],
            'youtube' => ['present', 'nullable', 'string', 'url:http,https', 'max:2048'],
        ];
    }
}
