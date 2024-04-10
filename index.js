const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./database/db')

// Env VARS
const port = process.env.PORT

// DB 
dbConnect();

// app routes

app.listen(port, () => {
  console.log(`[INFO] SERVER RUNNING AT PORT ${port}`);
});