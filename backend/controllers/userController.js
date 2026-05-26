import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async(req, res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({message:"Password do not match"}); 
        }
        // If user already exists in our database
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"Username already exists try different name"})
        }
        // now we can register
        // we can't store password directly to the database so we'll convert it to a hashcode first for safety purpose (bcrypt.js)
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is length that is default

        // profilePhoto -> used a website avatar-placeholder
        const maleProfilePhoto = `https://api.dicebear.com/7.x/avataaars/svg?seed=John?username=${username}`
        const femaleProfilePhoto = `https://api.dicebear.com/7.x/avataaars/svg?seed=Jane?username=${username}`

        await User.create({
            fullName, // here both key and value are same so not necessary to give it explicitely
            username,
            password:hashedPassword, // key and value pair
            profilePhoto: gender === "male"? maleProfilePhoto : femaleProfilePhoto,
            gender
        });
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }catch(error){
        console.log(error); 
    }
}