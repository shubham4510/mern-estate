import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

 const connectDB = async () => {
try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Database connected successfully`);
} catch (error) {
    console.log(`Database connection error`);
    process.exit(1);
}
}

export default connectDB;