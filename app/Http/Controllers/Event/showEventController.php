<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\showEvent;

class showEventController extends Controller
{
   
    public function index()
    {
        $showEvent = showEvent::paginate(10);
        return view('showEvent', compact('showEvent'));
    }

  
    public function create()
    {
        //
    }

  
    public function store(showEventRequest $request)
    {
        
    }

   
    public function show($id)
    {
        //
    }

   
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        monitor::destroy($id);
        session()->flash('delete','عملیات حذف بدرستی انجام شد.....');
        return back();
    }
}
