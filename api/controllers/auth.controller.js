import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
export const signup = async (req,res,next)=>{
    try {
        const {username,email,password}  = req.body;
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser = await new User({
            username,email,password:hashedPassword
        });
        newUser.save();
    res.status(201).json({
        success:true,
        message:"User created successfully"
    })
    } catch (error) {
       next(error);
    }
    
}