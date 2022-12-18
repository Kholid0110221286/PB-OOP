const MahasiswaController = require('../controller/MahasiswaController');

// import express
const express = require("express");
const router = express.Router();

// membuat router
router.get("/mahasiswa", MahasiswaController.index);

module.exports = router;