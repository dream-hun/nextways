<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\SiteContact;
use Illuminate\Database\Seeder;

final class SiteContactSeeder extends Seeder
{
    public function run(): void
    {
        SiteContact::query()->firstOrCreate(['id' => 1], SiteContact::DEFAULTS);
    }
}
