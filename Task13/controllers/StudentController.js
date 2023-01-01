// import models student
const Student = require("../models/Student");
// make student controller
class StudentController{
    // index(req, res){
    //     // memanggil method static 
    //     Student.all(function(student) {;
    //     const data = { 
    //         message : 'Menampilkan semua student',
    //         data : []
    //     }
    //         res.json(data);
    //     })
    // }

    // menambahkan keyword async untuk memberitahu proses asynchronous
    async index(req, res){
        // memanggil method dengan async await
        const students = await Students.all();
        if(students.length > 0){
            const data = { 
                message : 'Menampilkan semua student',
                data : students
            }
            res.status(200).json(data);
        }
        const data = {
            message : 'Student is empty',
        }
        return res.status(200).json(data);
    }
    async store(req, res){
        const {nama, nim, email, jurusan} = req.body;
        if (!nama || !nim || !email || !jurusan){
            const data = {
                message : 'Semua data harus dikirim'
            }
            return res.status(422).json(data);
        }
        // memanggil method create dari models student
        const student = await Student.create(req.body);
        const data = {
            message : 'Menambahkan data students',
            data : student
        }
        return res.status(200).json(data);
    }
    async update(req, res){
        const {id} = req.params;
        const student = await Student.find();
        if (student){
            const student = Student.update(id, req.body);
            const data = {
                message : 'Mengedit data students',
                data : student
        };
        res.status(200).json(data);
        }else{
            const data = {
                message : 'Student not found    '
            };
            res.status(404).json(data);
        }
    }
    async destroy(req, res){
        const {id} = req.params;
        const student = await Student.find(id);
        if (student){
            await Student.delete(id);
            const data = {
                message : `Menghapus data students dengan`,
            };
            res.status(200).json(data);
        }else{
            const data = {
                message : 'Student not found    '
            };
            res.status(404).json(data);
        }
    }
    async show(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);
        if(student){
            const data = {
                message : "Menampilkan detail student",
                data : student,
            }
            res.status(200).json(data);
        }else{
            const data = {
                message : 'Student not found    '
            };
            res.status(404).json(data);
        }
    }
};

const object = new StudentController();
module.exports = object;