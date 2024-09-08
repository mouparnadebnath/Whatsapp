// import mongoose from "mongoose";
// import User from "./user";

// const friendSchema=new mongoose.Schema({
//     sender:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:User
//     },
//     recipient:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:User
//     },
//     status:{
//         type:String,
//         enum:['pending','accepted','rejected']
//     },
//     createdAt:Date,
//     updatedAt:Date
// })
// const FriendRequest=mongoose.models.FriendRequest||mongoose.model("FriendRequest",friendSchema)
// export default FriendRequest