<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ContactFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['full_name', 'organization', 'email', 'phone', 'interest', 'location', 'message'])]
final class Contact extends Model
{
    /** @use HasFactory<ContactFactory> */
    use HasFactory;
}
