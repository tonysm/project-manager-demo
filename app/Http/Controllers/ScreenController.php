<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ScreenController extends Controller
{
    public function internal()
    {
	    return view('layouts.internal');
    }
}
