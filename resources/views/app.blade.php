<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K2J6J6X8');</script>
        <!-- End Google Tag Manager -->

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico?v=nextways-20260903" sizes="16x16 32x32 48x48" type="image/x-icon">
        <link rel="icon" href="/logo-Photoroom-icon.png?v=nextways-20260903" sizes="512x512" type="image/png">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=nextways-20260903" sizes="180x180">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            @php($seo = $page['props']['seo'] ?? null)
            @if ($seo)
                <title>{{ $seo['fullTitle'] }}</title>
                <meta data-inertia="description" name="description" content="{{ $seo['description'] }}">
                <link data-inertia="canonical" rel="canonical" href="{{ $seo['canonical'] }}">
                <meta data-inertia="og-site-name" property="og:site_name" content="{{ $seo['siteName'] }}">
                <meta data-inertia="og-locale" property="og:locale" content="en_GB">
                <meta data-inertia="og-type" property="og:type" content="website">
                <meta data-inertia="og-title" property="og:title" content="{{ $seo['fullTitle'] }}">
                <meta data-inertia="og-description" property="og:description" content="{{ $seo['description'] }}">
                <meta data-inertia="og-url" property="og:url" content="{{ $seo['canonical'] }}">
                <meta data-inertia="og-image" property="og:image" content="{{ $seo['image'] }}">
                <meta data-inertia="og-image-type" property="og:image:type" content="image/jpeg">
                <meta data-inertia="og-image-width" property="og:image:width" content="1200">
                <meta data-inertia="og-image-height" property="og:image:height" content="630">
                <meta data-inertia="og-image-alt" property="og:image:alt" content="{{ $seo['imageAlt'] }}">
                <meta data-inertia="twitter-card" name="twitter:card" content="summary_large_image">
                <meta data-inertia="twitter-title" name="twitter:title" content="{{ $seo['fullTitle'] }}">
                <meta data-inertia="twitter-description" name="twitter:description" content="{{ $seo['description'] }}">
                <meta data-inertia="twitter-image" name="twitter:image" content="{{ $seo['image'] }}">
                <meta data-inertia="twitter-image-alt" name="twitter:image:alt" content="{{ $seo['imageAlt'] }}">
                @if ($seo['schema'])
                    <script data-inertia="schema" type="application/ld+json">{!! json_encode($seo['schema'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_AMP | JSON_THROW_ON_ERROR) !!}</script>
                @endif
            @else
                <title>{{ config('app.name', 'Laravel') }}</title>
            @endif
        </x-inertia::head>
        @unless (isset($page['props']['seo']))
            <meta name="robots" content="noindex, nofollow">
        @endunless
    </head>
    <body class="font-sans antialiased">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2J6J6X8"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <x-inertia::app />
    </body>
</html>
