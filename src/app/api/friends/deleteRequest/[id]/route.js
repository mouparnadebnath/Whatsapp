import User from "@/app/models/user";
export async function DELETE(req,{params}){
    try {
        const friendid=params.id;
        const id=req.json()
        // const friend=await User.find({friend_request_sent:friendid})
        await User.updateOne(
            { _id: id}, // Replace with the user's _id
            { $pull: { friend_request_sent:friendid} }
          );
        // const deleteReq=await User.deleteOne({friend_request_sent:{$elemMatch:{_id:friendid}}});
        // if (deleteReq) 
return Response.json("sucessful delete")

    } catch (error) {
        return Response.error()
    }
}