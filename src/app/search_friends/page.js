
export const search_friends=async(data) =>{
try {
    const res=await fetch(`http://localhost:3000/api/friends/search/${data}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    return res.json()
} catch (error) {
    console.log(error);
}
}