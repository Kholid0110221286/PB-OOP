<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patients extends Model
{
    use HasFactory;

    public $table = 'Patients';

    public $fillable = ['name', 
    'phone', 
    'address', 
    'status', 
    'in_date_out', 
    'out_date_out', 
    'timestamp'
];
}
