'use client'
import React, { useEffect, useState } from 'react'
import { HoverBorderGradient } from '../components/ui/Hover'
import { useRouter } from 'next/navigation'
import { CardSpotlight } from '../components/ui/Spotlight'
import { useUserContext } from '../context/userContext'
const userlogin=async(data)=>{
  try {
    const res=await fetch("http://localhost:3000/api/users/login",{
      method:'post',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    console.log(res)
    return res.json()

  } catch (error) {
    console.log(error.message)
  }
  }
const Login = () => {
  const {setUser}=useUserContext()
  const [login, setLogin] = useState({
      email:"",
      password:""
  })
   const router=useRouter()
  
    
  const handleLoginChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})
  }
  useEffect(() => {
  console.log(login)
  }, [login])
  const handleLogin=async()=>{
const res=await userlogin(login)
console.log(res)
if (res.status==200) {
  setUser(res.data)
  router.push("/")
}
  }
  const handlechangetosignup=()=>{
router.push("/signup")
  }
return (
  <>
  <CardSpotlight className="flex flex-col align-middle items-center justify-center min-w-screen min-h-screen">
   
   <HoverBorderGradient containerClassName='m-3'clockwise={false} >
  <input   className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none 
                 disabled:cursor-not-allowed disabled:opacity-50 focus:border-none" type="email" placeholder='Email' name='email' value={login.email} onChange={handleLoginChange}/>
   </HoverBorderGradient>
   <HoverBorderGradient containerClassName='m-3'clockwise={false} >
  <input   className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none 
                 disabled:cursor-not-allowed disabled:opacity-50 focus:border-none" type="password" placeholder='Password' name='password' value={login.password} onChange={handleLoginChange}/>
   </HoverBorderGradient>
   <HoverBorderGradient onClick={handleLogin}>
   Login
   </HoverBorderGradient>
   <span onClick={handlechangetosignup} className="cursor-pointer  m-2 z-10 text-white font-thin">New user? Sign Up!</span>
  </CardSpotlight>

  </>
)
}

export default Login