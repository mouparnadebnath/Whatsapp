'use client'
import React, { useEffect, useState } from 'react'
import userlogin from '@/app/login/page'
import { HoverBorderGradient } from '../ui/Hover'
const Login = () => {
    const [login, setLogin] = useState({
        email:"",
        password:""
    })
    const handleLoginChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})
    }
    useEffect(() => {
    console.log(login)
    }, [login])
    const handleLogin=async()=>{
await userlogin(login)
    }
  return (
    <>
     <section section className="flex flex-col align-middle items-center justify-center m-[2rem] w-screen">
     <HoverBorderGradient containerClassName='m-3'clockwise={false} >
    <input   className="flex h-10 w-[100%] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
        focus-visible:outline-none 
         disabled:cursor-not-allowed disabled:opacity-50 focus:border-none" type="email" placeholder='Email' name='email' value={login.email} onChange={handleLoginChange}/>
     </HoverBorderGradient>
     <HoverBorderGradient containerClassName='m-3'clockwise={false} >
    <input   className="flex h-10 w-[100%] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
        focus-visible:outline-none 
         disabled:cursor-not-allowed disabled:opacity-50 focus:border-none" type="password" placeholder='Password' name='password' value={login.password} onChange={handleLoginChange}/>
     </HoverBorderGradient>
     <HoverBorderGradient >
    <button className="" type='submit' onClick={handleLogin}>Login</button>

     </HoverBorderGradient>
    </section>
    </>
  )
}

export default Login