import User from '../models/user.model.js';

export const signup = async (req,res)=>{
    try {
        const newUser = await new User()
    res.send("signup")
    } catch (error) {
        res.send(500).json({
            message:"User cannot be created",
        });
    }
    
}