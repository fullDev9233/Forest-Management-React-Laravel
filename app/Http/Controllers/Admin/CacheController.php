<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CacheController extends Controller
{
    public function clearCache()
    {
        $exitCode = \Artisan::call('cache:clear');

        session()->flash('admin_messages', ['All caches cleared successfully']);

        return redirect()->back();
    }
}
