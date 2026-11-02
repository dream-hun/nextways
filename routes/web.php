<?php

declare(strict_types=1);

use App\Http\Controllers\ContactInquiryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MarketingPageController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::get('/', MarketingPageController::class)->name('home');
Route::get('about', MarketingPageController::class)->name('about');
Route::get('services', MarketingPageController::class)->name('services');
Route::get('projects', MarketingPageController::class)->name('projects');
Route::get('contact', MarketingPageController::class)->name('contact');
Route::get('sitemap.xml', SitemapController::class)->name('sitemap');
Route::post('contact', ContactInquiryController::class)
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__.'/settings.php';
