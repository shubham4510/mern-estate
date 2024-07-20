import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken'
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

export const signin = async (req,res,next) =>{
    try {
    const {email,password} = req.body;
    const validUser = await User.findOne({email});
    if(!validUser){
        return next(errorHandler(404,"User not found"));
    }
    const validPassword = bcryptjs.compareSync(password,validUser.password);
    if(!validPassword) return next(errorHandler(401,'Wrong credentials'))
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);

    delete validUser._doc.password;
    
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(validUser);
    
    } catch (error) {
        next(error);
    }

}