<?php

namespace App\Http\Controllers\Monitor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\addmonitor\reqmonitorRequest;
use App\Http\Requests\addmonitor\updatereqmonitorRequest;
use App\Models\monitor;
use App\Models\reqMonitor;
use App\Models\NotificationTable;
use App\services\sendToken;


class reqMonitorController extends Controller
{
  
    public function index()
    {
        
    }

    public function create()
    {
        //
    }

   
    public function store(reqmonitorRequest $request)
    {
        $ispSelect = $request->ispSelect;
        $ispSelect = json_encode($ispSeleect);
        $phone = Auth()->User()->phone;
        $randcode = random_int(100000, 999999);
        $sendToken = new sendToken( $phone , $randcode );
        reqMonitor::create([
            'ispSelect' => $ispSelect,
            'interTime' => $request->interTime,
            'fetchType' => $request->fetchType,
            'randcode' => $randcode,
            'monitor_id' => $request->monitor_id
        ]);
        $notify = NotificationTable::create([
            'token' => $randcode
        ]);
        session()->flash('save','عملیات ذخیره بدرستی انجام شد.');
        return redirect()->route('homeMonitor.index');
    }

   
    public function show($id)
    {
        $id =  $id;
        return view('add-payeshgar', compact('id'));
    }

   
    public function edit($id)
    {
        $reqMonitor = reqMonitor::findOrFail($id);
        return view('edit', compact('reqMonitor'));
    }

    
    public function update(updtereqmonitorRequest $request, $id)
    {
        $ispSelect = $request->ispSelect;
        $ispSelect = json_encode($ispSeleect);
        reqMonitor::findOrFail($id)->update([
            'ispSelect' => $ispSelect,
            'interTime' => $request->interTime,
            'fetchType' => $request->fetchType,
        ]);
    }

   
    public function destroy(reqMonitor $id)
    {
        reqMonitor::destroy($id->id);
        session()->flash('delete','عملیات حذف بدرستی انجام شد.....');
        return back();
    }
}

