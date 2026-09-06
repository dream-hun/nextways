<?php

declare(strict_types=1);

use App\Http\Controllers\ContactInquiryController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::get('/', fn (): Response => Inertia::render('marketing/home'))->name('home');
Route::get('about', fn (): Response => Inertia::render('marketing/about'))->name('about');
Route::get('services', fn (): Response => Inertia::render('marketing/services'))->name('services');
Route::get('projects', fn (): Response => Inertia::render('marketing/projects'))->name('projects');
Route::get('contact', fn (): Response => Inertia::render('marketing/contact'))->name('contact');
Route::post('contact', ContactInquiryController::class)
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__.'/settings.php';
