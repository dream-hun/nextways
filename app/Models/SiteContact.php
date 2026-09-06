<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\SiteContactFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['id', 'email', 'phone', 'secondary_phone', 'address', 'registered_address', 'linkedin', 'facebook', 'instagram', 'twitter', 'youtube'])]
final class SiteContact extends Model
{
    /** @use HasFactory<SiteContactFactory> */
    use HasFactory;

    public const array DEFAULTS = [
        'email' => 'info@nextways.rw',
        'phone' => '+250 788 867 106',
        'secondary_phone' => '+250 788 304 638',
        'address' => 'Norrsken House Kigali, KN 78 St, Kiyovu, Nyarugenge, Kigali, Rwanda',
        'registered_address' => 'KN1 Road 30, Muhima, Nyarugenge, Kigali, Rwanda',
        'linkedin' => null,
        'facebook' => null,
        'instagram' => null,
        'twitter' => null,
        'youtube' => null,
    ];

    /** @return array<string, string|null> */
    public static function details(): array
    {
        return self::query()->find(1)?->only(array_keys(self::DEFAULTS)) ?? self::DEFAULTS;
    }
}
