<?php

use Illuminate\Support\Facades\Route;
use Modules\Primagen\Http\Controllers\PrimagenController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('primagens', PrimagenController::class)->names('primagen');
});
