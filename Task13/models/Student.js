// import database
const db = require("../config/database");

// membuat class model student
// class Student {
//     static all(callback){
//         const query = "SELECT * from students";
//         db.query(query, (err, result) => {
//             callback(results);
//         });
//     };
// };

// solution menggunakan promise
class Student {
        static all(){
            return new Promise((resolve, reject)=>{
            const query = "SELECT * from students";
            db.query(query, (err, result) => {
                callback(results);
            });
        });
    };

    static async create(data){
        const id = await new Promise((resolve, reject)=>{
            const sql = "INSERT INTO students SET?";
            db.query(sql, data, (err, result)=>{
                resolve(result,insertId);
            });
        });
        const student = this.find(id);
        return student;
    };
    static find(id){
        return new Promise((resolce, reject) => {
            const sql = "SELECT * FROM Students where id = ?";
            db.query(sql, id, (err, result)=>{
                const [student] = result;
                resolve(student);
            })
        })
    };
    static delete(id){
        return new Promise((resolce, reject) => {
            const sql = "DELETE FROM Stuedent where id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            })
        })
    }
};


// export students
module.exports = Student;