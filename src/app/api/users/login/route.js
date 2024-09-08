import User from '@/app/models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export async function POST(req){
try {
    const {email,password}=await req.json()
    const user=await User.findOne({email})
    const correctPassword=await bcrypt.compare(password,user?.password)
if (!user) 
    return Response.json("user not found")
    if (!correctPassword ) 
        return Response.error("Invalid password");
    
const token=jwt.sign({userid:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:"15d"})
const jsonObj={
    status:200,
    message:"Login successful",
    data:{
        _id:user._id,
        name:user.name,
        username:user.userName,
        email:user.email,
        profilePic:user.profilePic,
        token:token,
    }
}
    return Response.json(jsonObj)
} catch (error) {
    return Response.error()
}
}
