const mongoose = require("mongoose");

const {
  DB_URI,
  DB_NAME
} = process.env 


const dbConnect = async () => {
  try {
    mongoose.connect(`${ DB_URI }/${ DB_NAME }`);
    console.log('[INFO] MONGODB is connected');
  } catch (error) {
    console.log(error);
    throw new Error('[ERROR] Is not possible initialize MongoDB connection :( ');
  }
}

module.exports = dbConnect

