'use client'
export const sendFriendrequest=async(friend_id,me)=>{
    try {
    const res=await fetch(`http://localhost:3000/api/friends/sendRequest/${friend_id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'authorization': `Bearer ${me.token}`
        },
        body:JSON.stringify(me._id)
        
    })
return res.json()
} catch (error) {
    console.log(error)
}
}