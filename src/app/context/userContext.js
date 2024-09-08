'use client'
import { createContext,useContext,useEffect,useState } from "react"

export const Usercontext=createContext()

export const useUserContext=()=>{
    return useContext(Usercontext)
}

export const UserContextProvider=({children})=>{
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(false)
const [receivedRequest, setreceivedRequest] = useState([])
useEffect(() => {
const storeduser=localStorage.getItem('user')
setUser(JSON.parse(storeduser))
}, [])
useEffect(() => {
if (user) {
   localStorage.setItem('user',JSON.stringify(user))    
}
}, [user])
    return <Usercontext.Provider value={{user,setUser,loading,setLoading,setreceivedRequest,receivedRequest}}>{children}</Usercontext.Provider>
}
