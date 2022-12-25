// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// destructing object projects
const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// membuat koneksi database
const db = mysql.createConnection({
    host: DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE
});

// menghubungkan database menggunakan method connect
// menerima parameter callback

db.connect((err) => {
    if(err) {
        console.error("Error connecting" + err.stack);
        return;
    }else{
        console.log("Connect to Database");
        return;
    }
});
    
module.exports = db;
