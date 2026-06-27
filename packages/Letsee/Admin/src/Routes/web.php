<?php

// use App\Http\Controllers\phpController;
use Illuminate\Support\Facades\Route;
use Package\Letsee\Admin\Controllers\TestController;

// Route::inertia('/wel2', 'welcome')->name('home');
Route::get('/wel2', [TestController::class, 'wel2'])->name('wel2');

Route::get('/test/{x}', function ($x) {
    return $x;
})->name('wel2');

// // Route::middleware(['auth', 'verified'])->group(function () {
// Route::inertia('dashboard', 'dashboard')->name('dashboard');
// // });

// Route::get('/runphp', [phpController::class, 'runphp']);

// Route::get('/welcome', function () {
//     $count = 0;
//     function increase()
//     {
//         global $count;
//         $count++;
//     };
//     // $increase = ($count) => $count +1;
//     return view('welcome', ['count' => $count]);
// });

// require __DIR__ . '/settings.php';
