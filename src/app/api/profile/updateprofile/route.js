import User from "@/app/models/user";
    export async function PUT(req){
        try {
            const {profilePic}=req.json();
            console.log(profilePic)
            // save image to the server
            // update user profile with the image url
            const image=await User.updateOne({profilePic:profilePic})
            const jsonObj={status: 200, data:{image:image}}
            return Response.json(jsonObj)
        } catch (error) {
            return Response.json("error", error)
        }
    }