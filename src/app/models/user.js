// import FriendRequest from "./friendRequest";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    min:6
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  friendList: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  friend_request_sent: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  friend_request_received: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  blocked_users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // ref: User,
    },
  ],
  createdAt: {type:Date,default:Date.now},
  updatedAt: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
