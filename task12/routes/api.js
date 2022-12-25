// import StudentController
const StudentController = require('../controllers/StudentController');

// import express
const express = require('express');
const router = express.Router();

// membuat routing
// router.get('/',(req, res) => {
//     res.send ('Hello Express!');
// });
// router.get("/students",(req, res) => {
//     res.send ('Menampilkan semua students!');
// });
// router.post("/students",(req, res) => {
//     res.send ('Menambah data students!');
// });
// // router.put("/students",(req, res) => {
// //     res.send ('Mengedit data students');
// // });
// router.put("/students/:id",(req, res) => {
//     const {id} = req.params;
//     res.send (`Mengedit data students ${id}`);
// });
// // router.delete("/students",(req, res) => {
// //     res.send ('Menghapus data students!');
// // });
// router.delete("/students/:id",(req, res) => {
//     const {id} = req.params;
//     res.send (`Menghapus data students ${id}`);
// });

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;