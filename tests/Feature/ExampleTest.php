<?php

declare(strict_types=1);

use Inertia\Testing\AssertableInertia as Assert;

test('public marketing pages render their Inertia components', function (string $routeName, string $component): void {
    $response = $this->get(route($routeName));

    $response->assertOk()->assertInertia(fn (Assert $page): Assert => $page->component($component));
})->with([
    'home' => ['home', 'marketing/home'],
    'about' => ['about', 'marketing/about'],
    'services' => ['services', 'marketing/services'],
    'projects' => ['projects', 'marketing/projects'],
    'contact' => ['contact', 'marketing/contact'],
]);

test('website shell uses the Next Ways logo for browser icons', function (): void {
    $response = $this->get(route('home'));

    $response
        ->assertSee('<link rel="icon" href="/favicon.ico?v=nextways-20260903" sizes="16x16 32x32 48x48" type="image/x-icon">', false)
        ->assertSee('<link rel="icon" href="/logo-Photoroom-icon.png?v=nextways-20260903" sizes="512x512" type="image/png">', false)
        ->assertSee('<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=nextways-20260903" sizes="180x180">', false)
        ->assertDontSee('href="/favicon.svg"', false);
});
