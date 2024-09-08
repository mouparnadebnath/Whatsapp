import User from "@/app/models/user";

export async function GET(req,{params}){
try {
    const myId=params.myid;
    const user= await User.find({_id:myId})
    const jsonobj={
        
}
} catch (error) {
    
}
}