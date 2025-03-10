import express from 'express';
import connectDB from './config/database.js';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js';

const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);

});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
})

connectDB();