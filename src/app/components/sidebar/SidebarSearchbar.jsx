'use client'
import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import { search_friends } from '@/app/search_friends/page'
import { sendFriendrequest } from '@/app/sendFriendReq/page'
import { useUserContext } from '@/app/context/userContext'
import Image from 'next/image'
const SidebarSearchbar = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const {user,setsentRequest,sentRequest}=useUserContext()
  console.log(user)
  const handleSearch=(e)=>{
e.preventDefault()
setSearch(e.target.value)
  }
  const debouncedSearch=debounce(async(search)=>{
    if(search.trim()!==""){
      const res=await search_friends(search)
      setSearchResults(res)
      console.log(res)
    }
  },300)
  useEffect(() => {
    debouncedSearch(search)
  }, [search])

  const handle_sendFriend_request = async (data) => {
    // Send friend request to the selected friend
    // Example

    const res = await sendFriendrequest(data,user)
    console.log(res)
    if (res.status === 200) {
    }
  }
  return (
   <>
<section className='ml-3 mt-2 focus:outline-none'>
    <input type="text" placeholder="Search"  className='searchInput w-[98%] bg-[#202c33] rounded-lg pl-5  cursor-text text-white text-[0.8rem]' onChange={handleSearch} value={search}/>
</section>
{searchResults && searchResults.length > 0 && (
  <ul className='w-auto bg-gray-800 z-50'>
    {searchResults.map((friend,index) => (<>
    <li key={index} className='flex flex-row m-3 items-center   cursor-pointer justify-between ' 
    >
      
      <span className='flex flex-row items-center gap-4'>
      <Image src={friend.profilePic} alt="" width={48} height={48} className='w-12 h-12 rounded-full' />
      <p className='text-white' key={friend._id}>{friend.name}</p>
      </span>
      <button className='text-white bg-slate-900  p-2 hover:p-3 ' onClick={()=>handle_sendFriend_request(friend._id)}>Send Request</button>
      
    </li>
    </>
    ))}
  </ul>
)}
   </>

  )
}

export default SidebarSearchbar