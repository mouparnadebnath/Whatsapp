import User from "@/app/models/user";

export async function GET(req,{params}){
try {
    const myId=params.myid;
    const user= await User.find({_id:myId})
    const mi={friend: ['66de8bdc4e9ae9d21f9d9cb7' ] }
    console.log(mi.friend)

    const jsonobj={
        sentRequest:user.friend_request_sent
}
return Response.json("ok")
} catch (error) {
    return Response.error()
}
}