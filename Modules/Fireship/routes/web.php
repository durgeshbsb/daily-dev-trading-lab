<?php

use Illuminate\Support\Facades\Route;
use Modules\Fireship\Http\Controllers\FireshipController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('fireships', FireshipController::class)->names('fireship');
});

Route::get('/fireship', [FireshipController::class, 'fireship'])->name('fireship');
