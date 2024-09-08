'use client'

export const getSentrequestHistory=async(user)=>{
    try {
        const res=await fetch(`http://localhost:3000/api/friends/history/getSentReqHistory/${user._id}`,{
            headers:{
                "content-type": "application/json",
                'authorization': `Bearer ${user.token}`
                
            },
            method:"GET"
        })
return res.json()
    } catch (error) {
        throw new Error(error.message);  
    }
}