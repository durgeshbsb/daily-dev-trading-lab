<?php

use Illuminate\Support\Facades\Route;
use Modules\Fireship\Http\Controllers\FireshipController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('fireships', FireshipController::class)->names('fireship');
});
