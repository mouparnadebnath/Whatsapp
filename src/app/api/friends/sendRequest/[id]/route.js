import User from "@/app/models/user";

export async function POST(req, { params }) {
  try {
    const friendid = params.id;
    console.log(friendid);
    const userId = await req.json();
    console.log(userId || "not found");
    const user = await User.findOne({ _id: userId });
    const friend = await User.findById({ _id: friendid });
    console.log(user);
    const existingfriend = await User.findOne({
      friendList: { $all: [friendid] },
    });
    const existingReq = await User.findOne({
      friend_request_sent: { $all:{_id: [friendid] }},
    });
    if (existingReq) return Response.json({message:"already sent request before",data:{_id:friend._id,name:friend.name,username:friend.userName,email:friend.email,profilePic:friend.profilePic},status:200});
    if (existingfriend) return Response.json("Already friends");
    if (user && !existingfriend && !existingReq){
      const friendobj={_id: friend._id,name:friend.name,username:friend.userName,email:friend.email,profilePic:friend.profilePic}
      const userobj={_id:user._id,name: user.name,userName:user.userName,profilepic:user.profilePic,email:user.email}
      await user.friend_request_sent.push(friendobj);
    await friend.friend_request_received.push(userobj);
    await user.save();
    await friend.save();
    }

    const jsonodj = {
      status: 200,
      data: {_id: friend._id,name:friend.name,username:friend.userName,email:friend.email,profilePic:friend.profilePic},
    };
    return Response.json(jsonodj);
  } catch (error) {
    return Response.json(error);
  }
}
