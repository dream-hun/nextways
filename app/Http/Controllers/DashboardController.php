<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

final class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        return Inertia::render('dashboard', [
            'contacts' => $request->user()?->is_admin
                ? Contact::query()->orderByDesc('id')->paginate(15)
                : null,
        ]);
    }
}
