<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        echo "Menampilkan data animals"; 
    }

    public function store(Request $request)
    {
        echo "Menampilkan data animals - ";
        echo "Nama Hewan : $request->nama";
    }

    public function update(Request $request, $id)
    {
        echo "Mengubah data animal id $id - ";
        echo "Nama Hewan : $request->nama";
    }
    
    public function destroy($id)
    {
        echo "Menghapus data animal id $id";
    }

}
