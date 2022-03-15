const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();