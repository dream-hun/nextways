<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\SiteContact;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<SiteContact> */
final class SiteContactFactory extends Factory
{
    /** @return array<string, mixed> */
    public function definition(): array
    {
        return SiteContact::DEFAULTS;
    }
}
