<?php

namespace App\Http\Controllers;

use App\Models\Patients;
use Illuminate\Http\Request;

class PatientsController extends Controller
{
    public function index() 
    // {
    //     $patient = Patients::all();

    //     $data = [
    //         'messsage' => 'Get All Patients',
    //         'data' => $patient
    //     ];
    //     return response()-> json($data, 200);
    // }
    {
        $patients = Patients::all();
        if (!$patients->isEmpty()) {
            $data = [
                'message' => 'Get all Patients',
                'data' => $patients
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Patients not found',
            ];
            return response()->json($data, 404);
        }
    }

    public function show($id) {
        $patients = patients::find($id);
        if ($patients) {
            $data = [
                'message' => 'Get detail Patients',
                'data' => $patients
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Patients not found',
            ];
            return response()->json($data, 404);
        }
    }

    public function store(Request $request) {
        $patients = [
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'in_date_out' => $request->in_date_out,
            'out_date_out' => $request->out_date_out,
            'timestamp' => $request->timestamp,
        ];
        foreach ($patients as $key => $value) {
            if (!$key || !$value) {
                $data = [
                    'message' => $key . ' is required',
                ];
                
                return response()->json($data, 404);
            }
        }
        $data = [
            'message' => 'Patients is created successfully',
            'data' => Patients::create($patients),
        ];
        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        $patients = Patients::find($id);
        if ($patients) {
            $input = [
                'name' => $request->name ?? $patients->name,
                'phone' => $request->phone ?? $patients->phone,
                'address' => $request->address ?? $patients->address,
                'status' => $request->status ?? $patients->status,
                'in_date_out' => $request->in_date_out, $patients->in_date_out,
                'out_date_out' => $request->out_date_out, $patients->out_date_out,
                'timestamp' => $request->timestamp, $patients->timestamp,
            ];
            $patients->update($input);
            $data = [
                'message' => 'patients is updated successfully',
                'data' => $patients,
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'patients not found',
            ];
            return response()->json($data, 404);
        }
    }

    public function destroy($id) {
        $patients = patients::find($id);
        if ($patients) {
            $patients->delete();
            $data = [
                'message' => 'patients is deleted successfully',
            ];  
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'patients not found',
            ];
    
            return response()->json($data, 404);
        }
    }
}
