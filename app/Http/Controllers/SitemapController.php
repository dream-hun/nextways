<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;

final class SitemapController extends Controller
{
    private const string SITE_URL = 'https://nextways.rw';

    public function __invoke(): Response
    {
        $urls = collect(['home', 'about', 'services', 'projects', 'contact'])
            ->map(fn (string $route): array => [
                'loc' => self::SITE_URL.'/'.mb_ltrim((string) parse_url(URL::route($route), PHP_URL_PATH), '/'),
                'lastmod' => Carbon::now()->toDateString(),
            ]);

        return response()
            ->view('sitemap', ['urls' => $urls])
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }
}
