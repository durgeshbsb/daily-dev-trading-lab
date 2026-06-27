<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class phpController extends Controller
{
    public static function runphp(Request $request)
    {

        // return $request->query('q');
        // dd($request->input("q"));
        // dd($request->path());
        // dd($request->url());

        // dd($request->host());
        // dd($request->header());
        // dd($request->file->store('images8'));
        // return [1, 2, 3];
        // response('Hello World', 200)
        //     ->header('Content-Type', 'text/plain');

        return Inertia::render('ww3',['props']);

    }
}
