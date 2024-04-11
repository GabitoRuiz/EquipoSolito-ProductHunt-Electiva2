const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./database/db')

// Env VARS
const port = process.env.PORT

app.use(express.json());

// DB 
dbConnect();

// app routes
app.use('/api/v1', require("./routes/userRoutes"))
app.use('/api/v1', require("./routes/productRoutes"))

app.listen(port, () => {
  console.log(`[INFO] SERVER RUNNING AT PORT ${port}`);
});