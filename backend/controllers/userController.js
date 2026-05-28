import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        const maleProfilePhoto = `https://api.dicebear.com/7.x/avataaars/svg?seed=Jane?username=${username}`
        const femaleProfilePhoto = `https://api.dicebear.com/7.x/avataaars/svg?seed=John?username=${username}`

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
};
export const login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({
                message: "All fields are required"
            });
        };
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                message: "Incorrect username or password",
                success:false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message: "Incorrect username or password",
                success:false
            })
        };
        const tokenData={
            userId:user._id
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:'2d'});

        // key"token" and value token
        return res.status(200).cookie("token", token, {maxAge:2*24*60*60*1000,/* 2 days in ms */httpOnly:true, sameSite:'strict'}).json({
            _id:user._id,
            username:user.username,
            fullName:user.fullName,
            profilePhoto:user.profilePhoto
        });
    } catch (error) {
        console.log(error);
    }
};
export const logout = (req, res)=>{
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message:"logged out successfully!"
        })
    } catch (error) {
        console.log(error);
    }
}
export const getOtherUsers = async(req, res)=>{
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password"); // password should not be printed
        return res.status(200).json(otherUsers);
    } catch (error) {
        console.log(error)
    }
}