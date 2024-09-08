import User from "@/app/models/user";
export async function DELETE(req,{params}){
    try {
        const friendid=params.id;
        const deleteReq=await User.deleteOne({friend_request_sent:{$elemMatch:{_id:friendid}}});
        console.log(deleteReq)
        if (deleteReq) 
return Response.json("sucessful delete")

    } catch (error) {
        return Response.error()
    }
}