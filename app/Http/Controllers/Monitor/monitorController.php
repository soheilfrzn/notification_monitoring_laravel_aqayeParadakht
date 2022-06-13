<?php

namespace App\Http\Controllers\Monitor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\addmonitor\monitorRequest;
//use App\Http\Requests\addmonitor\updatereqmonitorRequest;
use App\Models\User;
use App\Models\monitor;

class monitorController extends Controller
{
    
    public function index()
    {
        return view('Monitor.add-monitor');
    }

  
    public function create()
    {
        
    }

  
    public function store(monitorRequest $request)
    {
        $user_id = Auth()->User()->id;
        monitor::create([
            'name' => $request->name,
            'url' => $request->url,
            'user_id' => $user_id
        ]);
        session()->flash('save','عملیات ذخیره بدرستی انجام شد.');
        return redirect()->route('listMonitor.index');
    }

   
    public function show($id)
    {
        //
    }

   
    public function edit($id)
    {
        $monitor = monitor::findOrFail($id);
        return view('Monitor.edit-monitor', compact('monitor'));
    }

   
    public function update(updatemonitorRequest $request, $id)
    {
        monitor::findOrFail($id)->update([
            'name' => $request->name,
            'url' => $request->url
        ]);
        session()->flash('update','عملیات بروزرسانی بدرستی انجام شد.');
        return redirect()->route('listMonitor.index');
    }

   
    public function destroy($id)
    {
        monitor::destroy($id);
        session()->flash('delete','عملیات حذف بدرستی انجام شد.....');
        return back();
    }
}
