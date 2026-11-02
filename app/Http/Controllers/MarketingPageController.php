<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\SiteContact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

final class MarketingPageController extends Controller
{
    private const string SITE_NAME = 'Next Ways Ltd';

    private const string LOGO_PATH = '/logo-Photoroom.png';

    /**
     * Search and social metadata for each public marketing page, keyed by route name.
     *
     * @var array<string, array{title: string, description: string, image: string, imageAlt: string}>
     */
    private const array PAGES = [
        'home' => [
            'title' => 'Environmental & Agribusiness Advisory in Rwanda',
            'description' => 'Kigali-based advisory firm delivering environmental, agribusiness, cold-chain and feasibility consulting that turns sustainability goals into practical results.',
            'image' => '/images/og/home.jpg',
            'imageAlt' => 'Next Ways consultant reviewing field notes with farmers on a terraced Rwandan hillside',
        ],
        'about' => [
            'title' => 'About Our Rwandan Advisory Firm',
            'description' => 'Founded in 2023 at Norrsken House Kigali, Next Ways Ltd delivers evidence-based advisory across environment, agribusiness and rural livelihoods in East Africa.',
            'image' => '/images/og/about.jpg',
            'imageAlt' => 'Next Ways team reviewing a map with a community member above Rwandan farmland',
        ],
        'services' => [
            'title' => 'Advisory & Consulting Services in Rwanda',
            'description' => 'Environmental, value-chain, cold-chain, feasibility, M&E, digital agriculture and rural logistics consulting for organisations in Rwanda and East Africa.',
            'image' => '/images/og/services.jpg',
            'imageAlt' => 'Next Ways consultants collecting a water sample beside farmland in Rwanda',
        ],
        'projects' => [
            'title' => 'Feasibility & Value-Chain Projects in Rwanda',
            'description' => 'Selected Next Ways assignments: cold-chain feasibility for horticultural aggregation in Nyanza and a grain post-harvest loss pilot study in Kirehe, Rwanda.',
            'image' => '/images/og/projects.jpg',
            'imageAlt' => 'Field notebook beside crates of tomatoes and leafy greens during a horticulture assessment',
        ],
        'contact' => [
            'title' => 'Contact Our Kigali Advisory Team',
            'description' => 'Talk to Next Ways Ltd in Kigali about environmental, agribusiness, feasibility, evaluation, digital agriculture or rural logistics advisory. Email or call us.',
            'image' => '/images/og/contact.jpg',
            'imageAlt' => 'Two Next Ways advisors reviewing a report on a terrace overlooking Kigali',
        ],
    ];

    public function __invoke(Request $request): Response
    {
        $pageName = (string) $request->route()?->getName();

        return Inertia::render("marketing/{$pageName}", [
            'seo' => $this->seo($pageName, $request),
        ]);
    }

    /**
     * @return array{title: string, fullTitle: string, description: string, canonical: string, image: string, imageAlt: string, siteName: string, schema: array<string, mixed>|null}
     */
    private function seo(string $pageName, Request $request): array
    {
        $page = self::PAGES[$pageName];
        $canonical = $this->absoluteUrl($request->path());

        return [
            'title' => $page['title'],
            'fullTitle' => "{$page['title']} - ".self::SITE_NAME,
            'description' => $page['description'],
            'canonical' => $canonical,
            'image' => $this->absoluteUrl($page['image']),
            'imageAlt' => $page['imageAlt'],
            'siteName' => self::SITE_NAME,
            'schema' => $pageName === 'home' ? $this->organizationSchema($page['description']) : null,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function organizationSchema(string $description): array
    {
        $siteContact = SiteContact::details();

        return [
            '@context' => 'https://schema.org',
            '@type' => 'ProfessionalService',
            'name' => self::SITE_NAME,
            'alternateName' => 'Next Ways',
            'description' => $description,
            'url' => $this->absoluteUrl('/'),
            'logo' => $this->absoluteUrl(self::LOGO_PATH),
            'image' => $this->absoluteUrl(self::PAGES['home']['image']),
            'email' => $siteContact['email'],
            'telephone' => $siteContact['phone'],
            'address' => $siteContact['address'],
            'foundingDate' => '2023',
            'areaServed' => ['Rwanda', 'East Africa'],
            'sameAs' => array_values(array_filter([
                $siteContact['linkedin'],
                $siteContact['facebook'],
                $siteContact['instagram'],
                $siteContact['twitter'],
                $siteContact['youtube'],
            ])),
        ];
    }

    private function absoluteUrl(string $path): string
    {
        $path = mb_ltrim($path, '/');

        return mb_rtrim(config()->string('app.url'), '/').'/'.$path;
    }
}
