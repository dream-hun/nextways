<?php

declare(strict_types=1);

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\UpdateSiteContactRequest;
use App\Models\SiteContact;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class SiteContactController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('settings/site-contact');
    }

    public function update(UpdateSiteContactRequest $request): RedirectResponse
    {
        SiteContact::query()->updateOrCreate(['id' => 1], $request->validated());

        return to_route('site-contact.edit');
    }
}
