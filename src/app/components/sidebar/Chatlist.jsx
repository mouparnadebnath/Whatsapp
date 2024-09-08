'use client'
import React,{useState} from 'react'
import SidebarSearchbar from './SidebarSearchbar'
import { useRouter } from 'next/navigation'
import { logout } from '@/app/logout/page'
import { useUserContext } from '@/app/context/userContext'
const Chatlist = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
const {setUser,user}=useUserContext()
  const handleSearch=(e)=>{
e.preventDefault()
setSearch(e.target.value)
console.log(search)
  }
  const handleLogout=async()=>{
    try {
      const res=await logout(user.token)
      if (res.ok) {
        // router.push('/login')
setUser(null)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='flex flex-col w-[100%]'>
      <section className='flex flex-row justify-between m-3'>
        <h1 className='text-white text-2xl font-semibold'>Chats</h1>
        <section>
        <button data-icon="new-chat-outline" className="focus:bg-gray-600 focus:rounded-full p-[0.50rem]">
    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="#d1d5db"></path>
    </svg>
    </button>
    <div className='dropdown dropdown-left dropdown-bottom'>
    <button role='button' tabIndex={1} data-icon="menu" className="focus:bg-gray-600 focus:rounded-full p-[0.50rem]">
      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="#d1d5db" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
      </button>
      <ul tabIndex={1}  className='dropdown-content menu cursor-pointer bg-[#2a363d] w-[10rem]'>
<li className='p-2' onClick={handleLogout}>Log out</li>
      </ul>
    </div>
        </section>
      </section>
<SidebarSearchbar/>
<section className='flex flex-row w-[50%] justify-around mt-3 text-gray-400 text-[0.9rem]'>
<button className='rounded-full bg-[#202c33] pl-3 pr-3 hover:bg-gray-700 focus:bg-green-900 focus:text-green-500'>All</button>
<button className='rounded-full bg-[#202c33] p-2 hover:bg-gray-700 focus:bg-green-900 focus:text-green-500'>Unread</button>
<button className='rounded-full bg-[#202c33] p-2 hover:bg-gray-700 focus:bg-green-900 focus:text-green-500'>Groups</button>
</section>
    </section>
  )
}

export default Chatlist