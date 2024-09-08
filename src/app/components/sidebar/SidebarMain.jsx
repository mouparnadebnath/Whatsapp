import React, { useState } from 'react'
import Sidebar_header from './Sidebar_header'
import Chatlist from './Chatlist'
import MyProfile from './MyProfile'
import FriendRequests from './FriendRequests'
const SidebarMain = () => {
    const [activeComponent, setActiveComponent] = useState("chats")
  return (
<>
<div className='bg-[#111b20] w-[32%] flex flex-row  border-r-[0.1px] border-gray-600 '>
    <Sidebar_header activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
    <>
    {activeComponent==="chats" && <Chatlist/>}
    {activeComponent==="friendRequests" && <FriendRequests/>}
    {activeComponent==="profile" && <MyProfile/>}
    </>
    <div className='mt-0 mb-0 divider'></div>
    </div>
   
</>
)
}

export default SidebarMain