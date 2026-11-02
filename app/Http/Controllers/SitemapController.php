<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\URL;

final class SitemapController extends Controller
{
    /**
     * Public marketing routes listed in the sitemap.
     *
     * lastmod is intentionally omitted: a date that changes on every request
     * teaches search engines to ignore it, and the pages have no reliable
     * modification date.
     *
     * @var list<string>
     */
    private const array ROUTES = ['home', 'about', 'services', 'projects', 'contact'];

    public function __invoke(): Response
    {
        $siteUrl = mb_rtrim(config()->string('app.url'), '/');

        $urls = collect(self::ROUTES)
            ->map(fn (string $route): string => $siteUrl.'/'.mb_ltrim((string) parse_url(URL::route($route), PHP_URL_PATH), '/'));

        return response()
            ->view('sitemap', ['urls' => $urls])
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }
}
