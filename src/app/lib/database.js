import mongoose from "mongoose";

export const connectDB=async()=>{
try {
  await mongoose.connect(process.env.MONGODBURL,{autoIndex:false})
  console.log("database connected successfully")
} catch (error) {
  console.log(error.message)
}
}
