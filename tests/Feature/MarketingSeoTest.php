<?php

declare(strict_types=1);

use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function (): void {
    config(['app.url' => 'https://nextways.rw']);
});

test('marketing pages render search and social meta tags in the initial HTML', function (string $routeName, string $path, string $title, string $image): void {
    $response = $this->get(route($routeName));

    $response->assertOk()
        ->assertSee('<title>'.e($title).' - Next Ways Ltd</title>', false)
        ->assertSee('<meta data-inertia="description" name="description" content="', false)
        ->assertSee("<link data-inertia=\"canonical\" rel=\"canonical\" href=\"https://nextways.rw{$path}\">", false)
        ->assertSee("<meta data-inertia=\"og-url\" property=\"og:url\" content=\"https://nextways.rw{$path}\">", false)
        ->assertSee("<meta data-inertia=\"og-image\" property=\"og:image\" content=\"https://nextways.rw{$image}\">", false)
        ->assertSee('<meta data-inertia="twitter-card" name="twitter:card" content="summary_large_image">', false)
        ->assertDontSee('name="robots"', false);
})->with([
    'home' => ['home', '/', 'Environmental & Agribusiness Advisory in Rwanda', '/images/og/home.jpg'],
    'about' => ['about', '/about', 'About Our Rwandan Advisory Firm', '/images/og/about.jpg'],
    'services' => ['services', '/services', 'Advisory & Consulting Services in Rwanda', '/images/og/services.jpg'],
    'projects' => ['projects', '/projects', 'Feasibility & Value-Chain Projects in Rwanda', '/images/og/projects.jpg'],
    'contact' => ['contact', '/contact', 'Contact Our Kigali Advisory Team', '/images/og/contact.jpg'],
]);

test('marketing pages each have a unique meta description of search-friendly length', function (): void {
    $descriptions = collect(['home', 'about', 'services', 'projects', 'contact'])
        ->map(function (string $routeName): string {
            $description = null;

            $this->get(route($routeName))->assertInertia(function (Assert $page) use (&$description): Assert {
                $description = $page->toArray()['props']['seo']['description'];

                return $page;
            });

            return $description;
        });

    expect($descriptions->unique())->toHaveCount(5)
        ->and($descriptions->every(fn (string $description): bool => mb_strlen($description) >= 120 && mb_strlen($description) <= 160))->toBeTrue();
});

test('the canonical URL ignores query strings', function (): void {
    $response = $this->get(route('services', ['utm_source' => 'newsletter']));

    $response->assertOk()
        ->assertSee('<link data-inertia="canonical" rel="canonical" href="https://nextways.rw/services">', false)
        ->assertDontSee('rel="canonical" href="https://nextways.rw/services?', false);
});

test('only the home page includes organization structured data', function (): void {
    $this->get(route('home'))
        ->assertOk()
        ->assertSee('<script data-inertia="schema" type="application/ld+json">', false)
        ->assertSee('"@type":"ProfessionalService"', false)
        ->assertSee('"email":"info@nextways.rw"', false);

    $this->get(route('about'))
        ->assertOk()
        ->assertDontSee('application/ld+json', false);
});

test('structured data escapes HTML from editable site contact details', function (): void {
    App\Models\SiteContact::factory()->create([
        'id' => 1,
        'address' => '</script><script>alert(1)</script>',
    ]);

    $response = $this->get(route('home'));

    $response->assertOk()
        ->assertDontSee('</script><script>alert(1)', false)
        ->assertSee('</script>', false);
});

test('non-marketing pages are excluded from search indexing', function (): void {
    $response = $this->get(route('login'));

    $response->assertOk()
        ->assertSee('<meta name="robots" content="noindex, nofollow">', false)
        ->assertDontSee('rel="canonical"', false);
});
