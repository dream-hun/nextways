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
