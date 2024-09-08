import React from 'react'
import Chatbox from './Chatbox'
import Chatfooter from './Chatfooter'
import Chatheader from './Chatheader'
import DefaultPage from './DefaultPage'
const MessageContainerMain = () => {
  return (
   <>
       <div className='chatbox w-[68%] bg-[#202c33] flex flex-col justify-between  '>
    {/* <DefaultPage/> */}
   <Chatheader />
    <Chatbox/>
    <Chatfooter/>
     </div> 
   
   </>
  )
}

export default MessageContainerMain