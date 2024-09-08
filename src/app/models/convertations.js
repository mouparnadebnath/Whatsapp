import mongoose from "mongoose";
import User from "./user";
import Messages from "./messages";
const conversationSchema=new mongoose.Schema({
  participants:[
{type:mongoose.Schema.Types.ObjectId,
    ref:User
}] ,
messages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:Messages,
    default:[]
}] 
})
const Conversation=mongoose.models.Conversation||mongoose.model("Conversation",conversationSchema)
export default Conversation