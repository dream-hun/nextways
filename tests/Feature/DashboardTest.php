<?php

declare(strict_types=1);

use App\Models\Contact;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('guests are redirected to the login page', function (): void {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function (): void {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response->assertOk();
});

test('ordinary users cannot see contact submissions', function (): void {
    Contact::factory()->create();

    $this->actingAs(User::factory()->create())->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page->where('contacts', null));
});

test('admins can read every inquiry field with newest submissions first and pagination', function (): void {
    Contact::factory()->count(15)->create();
    $contact = Contact::factory()->create();
    $this->actingAs(User::factory()->admin()->create());

    $this->get(route('dashboard'))->assertInertia(fn (Assert $page) => $page
        ->component('dashboard')->has('contacts.data', 15)
        ->where('contacts.total', 16)
        ->where('contacts.data.0.id', $contact->id)
        ->where('contacts.data.0.full_name', $contact->full_name)
        ->where('contacts.data.0.organization', $contact->organization)
        ->where('contacts.data.0.email', $contact->email)
        ->where('contacts.data.0.phone', $contact->phone)
        ->where('contacts.data.0.interest', $contact->interest)
        ->where('contacts.data.0.location', $contact->location)
        ->where('contacts.data.0.message', $contact->message));
    $this->get(route('dashboard', ['page' => 2]))->assertInertia(fn (Assert $page) => $page
        ->has('contacts.data', 1)->where('contacts.current_page', 2));
});

test('admins see an empty inbox before any submissions', function (): void {
    $this->actingAs(User::factory()->admin()->create())->get(route('dashboard'))
        ->assertInertia(fn (Assert $page) => $page->has('contacts.data', 0)->where('contacts.total', 0));
});
