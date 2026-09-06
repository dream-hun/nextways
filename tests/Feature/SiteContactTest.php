<?php

declare(strict_types=1);

use App\Models\SiteContact;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

it('requires authentication to manage site contact', function (): void {
    $this->get(route('site-contact.edit'))->assertRedirectToRoute('login');
    $this->put(route('site-contact.update'), SiteContact::DEFAULTS)->assertRedirectToRoute('login');
    $this->assertDatabaseCount('site_contacts', 0);
});

it('forbids ordinary users from managing site contact', function (): void {
    $this->actingAs(User::factory()->create());

    $this->get(route('site-contact.edit'))->assertForbidden();
    $this->put(route('site-contact.update'), SiteContact::DEFAULTS)->assertForbidden();
    $this->assertDatabaseCount('site_contacts', 0);
});

it('requires administrators to verify their email', function (): void {
    $this->actingAs(User::factory()->admin()->unverified()->create());

    $this->get(route('site-contact.edit'))->assertRedirectToRoute('verification.notice');
    $this->put(route('site-contact.update'), SiteContact::DEFAULTS)->assertRedirectToRoute('verification.notice');
    $this->assertDatabaseCount('site_contacts', 0);
});

it('shows default contact details before the first save', function (): void {
    $this->actingAs(User::factory()->admin()->create())
        ->get(route('site-contact.edit'))
        ->assertInertia(fn (Assert $page) => $page->component('settings/site-contact')
            ->where('siteContact.email', 'info@nextways.rw')
            ->where('siteContact.linkedin', null));
    $this->assertDatabaseCount('site_contacts', 0);
});

it('saves and updates one contact record and shares it with visitors', function (): void {
    $this->actingAs(User::factory()->admin()->create());
    $details = [...SiteContact::DEFAULTS, 'email' => 'hello@example.com', 'phone' => '+250 700 000 001', 'address' => 'New office, Kigali', 'linkedin' => 'https://linkedin.com/company/nextways', 'facebook' => 'https://facebook.com/nextways', 'instagram' => 'https://instagram.com/nextways', 'twitter' => 'https://x.com/nextways', 'youtube' => 'https://youtube.com/@nextways'];

    $this->put(route('site-contact.update'), $details)->assertRedirectToRoute('site-contact.edit')->assertSessionHasNoErrors();
    $this->assertDatabaseHas('site_contacts', $details);

    $details['email'] = 'updated@example.com';
    $details['linkedin'] = null;
    $details['secondary_phone'] = null;
    $details['registered_address'] = null;
    $this->put(route('site-contact.update'), $details)->assertSessionHasNoErrors();
    $this->assertDatabaseCount('site_contacts', 1);
    $this->assertDatabaseHas('site_contacts', $details);
    auth()->logout();

    foreach (['home', 'about', 'services', 'projects', 'contact'] as $route) {
        $this->get(route($route))->assertInertia(fn (Assert $page) => $page->where('siteContact', $details));
    }
});

it('rejects invalid contact changes without overwriting saved details', function (string $field, mixed $value): void {
    SiteContact::factory()->create(['id' => 1]);
    $this->actingAs(User::factory()->admin()->create());

    $this->put(route('site-contact.update'), [...SiteContact::DEFAULTS, $field => $value])->assertSessionHasErrors($field);
    $this->assertDatabaseHas('site_contacts', SiteContact::DEFAULTS);
})->with([
    'email required' => ['email', ''],
    'invalid email' => ['email', 'invalid'],
    'phone required' => ['phone', ''],
    'invalid phone' => ['phone', 'call me'],
    'long phone' => ['phone', str_repeat('1', 51)],
    'invalid secondary phone' => ['secondary_phone', 'invalid'],
    'address required' => ['address', ''],
    'long address' => ['address', str_repeat('a', 1001)],
    'long registered address' => ['registered_address', str_repeat('a', 1001)],
    'unsafe linkedin' => ['linkedin', 'javascript:alert(1)'],
    'invalid facebook' => ['facebook', 'not-a-url'],
    'invalid instagram' => ['instagram', 'ftp://example.com'],
    'invalid twitter' => ['twitter', 'data:text/html,test'],
    'invalid youtube' => ['youtube', 'not-a-url'],
    'long URL' => ['youtube', 'https://example.com/'.str_repeat('a', 2048)],
]);

it('does not allow profile updates to grant admin privileges', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->patch(route('profile.update'), ['name' => $user->name, 'email' => $user->email, 'is_admin' => true])->assertSessionHasNoErrors();

    expect($user->refresh()->is_admin)->toBeFalse();
});
