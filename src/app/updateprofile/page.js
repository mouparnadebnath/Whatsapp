
export const updateProfile = async(data) => {
 try {
const res= await fetch('http://localhost:3000/api/profile/updateprofile', {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
   })
   const data = await res.json()
   console.log(data)
   return res.json()
 } catch (error) {
  console.log("response error: " + error)
 }
}

