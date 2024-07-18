import express from 'express';
import connectDB from './config/database.js';

const app = express();


app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);

})

connectDB();