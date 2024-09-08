import mongoose from "mongoose";

const storedotpSchema=new mongoose.Schema({
    otp:Number,
    createTime:Number
},{timestamps:true})
mongoose.models = {}
const Storedotp=mongoose.model('StoredOTP',storedotpSchema)
export default Storedotp