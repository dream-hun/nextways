<?php

declare(strict_types=1);

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
