'use client'
import React,{useEffect,useState} from 'react'
import { useUserContext } from '@/app/context/userContext'
import { getSentrequestHistory } from '@/app/getSentRequestHistory/page'
const FriendRequests = () => {
const [activeReqComponent, setactiveReqComponent] = useState("received")
const received=activeReqComponent==="received"?"bg-green-900" && "text-green-500" : "bg-[#202c33]"
const sent=activeReqComponent==="sent"?"bg-green-900" && "text-green-500" : "bg-[#202c33]"


  return (
    <section className=' m-3 w-[100%]'>
        <h1 className='text-white text-2xl font-semibold'>Friend Requests</h1>
        <section className='flex flex-row w-[50%] justify-start gap-3 mt-3 text-gray-400 text-[0.9rem]'>
<button onClick={()=>setactiveReqComponent("received")} className={`rounded-full bg-[#202c33] p-2  hover:bg-gray-700 ${received}`}>Received</button>
<button onClick={()=>setactiveReqComponent("sent")} className={`rounded-full bg-[#202c33] pl-3 pr-3 hover:bg-gray-700 ${sent}`}>Sent</button>
</section>
<div className='divider w-[100%] '></div>
{activeReqComponent==="received" && <ReceivedRequests/>}
{activeReqComponent==="sent" && <SentRequests/>}
    </section>
  )
}

const SentRequests=()=>{
    const {user}=useUserContext()
    const [sentRequest, setsentRequest] = useState([])

    const handleSentreq=async()=>{
        try {
            const res=await getSentrequestHistory(user)
            
        } catch (error) {
            throw new Error("Failed to fetch sent requests");
            
        }
    }
useEffect(() => {

}, [])
    return(
<>{sentRequest.map((sentreq,index)=>(
    <>
    <div>{sentreq.name}</div>
    </>
))}</>
    )
}
const ReceivedRequests=()=>{

    return(
<div>received</div>
    )
}
export default FriendRequests