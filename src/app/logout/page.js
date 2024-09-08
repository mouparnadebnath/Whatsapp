"use client"
export const logout=async(id)=>{
try {
    const res=await fetch("http://localhost:3000/api/users/logout",{
        headers:{
            "content-type": "application/json",
            "Authorization":`Bearer ${user.token}`
        },
        method:"POST"
    })
    return res
} catch (error) {
  console.log(error)  
}
}