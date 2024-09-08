import User from "@/app/models/user";
export async function GET(req,{params}){
    try {
      const username=params.username;
            const users=await User.find({userName:username})
            if (!users){
                return Response.json({message:"User not found"});
            }
       
            
            return Response.json(users)
    
    } catch (error) {
        return Response.json({error:"not found"});
    }

}