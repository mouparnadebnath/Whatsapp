import User from "@/app/models/user";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/lib/database";
import Storedotp from "@/app/models/storeOTP";
export async function POST(req) {
 await connectDB()
  try {
    const {email,username,password,confirmPassword} =await req.json();
        const user = await User.findOne({email:email});
        const existinguser=await User.findOne({userName:username});
        if (existinguser) {
            return Response.error()
        }
        console.log(existinguser)
    if (!user) {
      // check if password and confirmpassword is same
if (password!=confirmPassword) {
return Response.error()
}

  const gmail = process.env.GMAIL;
  const nodepassword = process.env.NODEMAILER_PASSWORDS;
  // generate random OTP 
    const otp = Math.floor(Math.random() * 900000) + 100000;
    console.log(otp);
    // // hashing the OTP for security
   const createTime=Date.now()
   console.log(createTime)
     // store the hashed otp
  const newOTP=  new Storedotp({
    otp,
    createTime:Date.now()
  })
  await newOTP.save()
    const transporter = nodemailer.createTransport({
      host: gmail,
      service: "gmail",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: gmail,
        pass: nodepassword,
      },
    });
  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: gmail, // sender address
      to: email, // list of receivers
      subject: "Varify Your Email", // Subject line
      text: "", // plain text body
      html: `<h4>Your varification Code is:</h4><h1>${otp}</h1><br/><p>Your OTP will be expired after 30 seconds.</p>`, // html body
    });
   
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

  return Response.json({message:"OTP sent successfully",status:200});
    }
else{
  return Response.error();
 
}
  } catch (error) {
    return Response.error();
  }
}
