<?php

declare(strict_types=1);

beforeEach(function (): void {
    config(['app.url' => 'https://nextways.rw']);
});

it('serves the public sitemap with all marketing pages', function (): void {
    $response = $this->get(route('sitemap'));

    $response->assertOk()
        ->assertHeader('Content-Type', 'application/xml; charset=UTF-8')
        ->assertSee('<loc>https://nextways.rw/</loc>', false)
        ->assertSee('<loc>https://nextways.rw/about</loc>', false)
        ->assertSee('<loc>https://nextways.rw/services</loc>', false)
        ->assertSee('<loc>https://nextways.rw/projects</loc>', false)
        ->assertSee('<loc>https://nextways.rw/contact</loc>', false);
});

it('builds sitemap URLs from the configured site URL', function (): void {
    config(['app.url' => 'https://staging.nextways.rw/']);

    $response = $this->get(route('sitemap'));

    $response->assertOk()
        ->assertSee('<loc>https://staging.nextways.rw/about</loc>', false)
        ->assertDontSee('<loc>https://nextways.rw/', false);
});

it('omits lastmod because the pages have no reliable modification date', function (): void {
    $response = $this->get(route('sitemap'));

    $response->assertOk()->assertDontSee('<lastmod>', false);
});
