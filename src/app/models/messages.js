import mongoose from "mongoose";
import User from "./user";
const messagesSchema=new mongoose.Schema({
sender_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    required:true
},
reciever_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    required:true
},
messages:{
    type:String,
    required:true,
    enum:['text','image','audio','video','file','system']
},

},{timestamps:true})

const Messages=mongoose.models.Messages||mongoose.model("Messages",messagesSchema)
export default Messages