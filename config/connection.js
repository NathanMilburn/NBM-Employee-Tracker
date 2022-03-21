const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: "employees_db",
    },
);

module.exports = db;