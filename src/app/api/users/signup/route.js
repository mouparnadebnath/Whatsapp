import bcrypt from "bcryptjs";//-
import Storedotp from "@/app/models/storeOTP";//-
import User from "@/app/models/user";//-
import jwt from "jsonwebtoken"//-
// /**//+
//  * This function handles the POST request for user registration.//+
//  * It verifies the OTP, hashes the password, and saves the user data to the database.//+
//  *//+
//  * @param {Request} req - The incoming request object containing the user's OTP and registration data.//+
//  * @returns {Response} - The response object with a success message, the new user data, and a JWT token.//+
//  *                      If an error occurs, it returns an error message with a status code.//+
//  *//+
//  * @throws Will throw an error if the OTP is invalid or expired, or if there is an issue with saving the user data.//+
//  *///+
export async function POST(req) {
  try {
    const { otp, user} = await req.json();
console.log(user)
    // Check if OTP is valid
    const existingOTP=await Storedotp.findOne({otp})//+
    console.log(existingOTP)
    const expirationTime = existingOTP.createTime + 30000;
    // console.log(expirationTime)
    if (otp!=existingOTP.otp|| expirationTime < Date.now()) {
      await existingOTP.deleteOne({otp})
      return Response.error();
    }
    // console.log(Date.now())

    // hash the password
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(user.password,salt)
    console.log(hashedpassword)
    const profilePic="https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg"
const newuser=await new User({
  id: user.id,
  name:user.name,
  userName:user.username,
  email:user.email,
  password:hashedpassword,
profilePic:profilePic
})
if (newuser) 
  await newuser.save()
  const token= jwt.sign({userId:newuser.id,name:newuser.name},process.env.JWT_SECRET,{expiresIn:"15d"})
  console.log("Token generated:",token)
    // OTP verified, return success message
    const jsonobj={
      status:200,
      message:"Signup successful",
      data:{
        _id:newuser._id,
        name:newuser.name,
        username:newuser.userName,
        email:newuser.email,
        profilePic:newuser.profilePic,
        token:token,
      },
    }
    return Response.json(jsonobj);

  } catch (error) {
    return Response.error();
  }
}
