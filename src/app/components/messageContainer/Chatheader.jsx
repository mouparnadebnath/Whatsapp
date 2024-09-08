'use client'
import React,{useState,useRef, useEffect} from 'react'
import { IconVideo } from '@tabler/icons-react'
import { IconSearch } from '@tabler/icons-react'
import { useClickAway } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'
import { IconX}  from '@tabler/icons-react'
import Image from 'next/image'
import { useUserContext } from '@/app/context/userContext'
const Chatheader = () => {
  const {user}=useUserContext()
  const [open, setOpen] = useState(false)
  // const [profilePics, setProfilePics] = useState(user.profilePic)

  const ref = useRef(null)
  // useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>


<dialog id="my_modal_4" className="modal">
  <div className="modal-box min-h-screen max-w-screen-2xl items-center  justify-center flex flex-row">
<img className='w-[45%]'  src='https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' alt="" />
    <div className="modal-action flex flex-row ">
      <form method="dialog ">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

     <>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)]"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed  right-0 z-50  h-screen w-[30.7%] border-r-2 border-zinc-800 bg-[#111b20]"
              ref={ref}
              aria-label="Sidebar"
            >
              <span className='flex flex-row m-4 text-white gap-5'>
                        <IconX className='cursor-pointer'  onClick={toggleSidebar} /> Contact Info
              </span>
              <div className="flex flex-col  items-center justify-between p-5 border-b-2 border-zinc-800">
             
             <Image className='rounded-full w-[15rem] cursor-pointer' width={15} height={15} src='https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' alt=''  onClick={()=>document.getElementById('my_modal_4').showModal()}/>
             {/* to do */}
             <span>username</span>
             <span>email</span>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, href, Icon } = item
                  return (
                    <li key={title}>
                      <a
                        href={href}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                      >
                        <motion.span {...framerText(idx)}>{title}</motion.span>
                        <motion.div {...framerIcon}>
                          {/* <Icon className="text-2xl" /> */}
                        </motion.div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
<div className='lg-h-[8.5%] md:h-[8.5%] sm:h[5%] bg-[#202c33] flex flex-row items-center justify-between  z-20 '>
<section className= 'flex flex-row justify-around items-center  cursor-pointer w-[]'>

        <Image src="https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg" className='rounded-full ml-4 w-10 h-10 '  alt="" width={40} height={40}  onClick={toggleSidebar} />
  <h4 className=''>name</h4>
</section>
<section className='flex flex-row  items-center cursor-pointer w-[15%] justify-around'>
    <IconVideo className='video fill-[gray] stroke-transparent '/>
    <IconSearch/>
   
      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="#d1d5db" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
</section>
    </div>
    </>
  )
}

export default Chatheader

const items = [
  { title: 'Home',  href: '#' },
  { title: 'About', },
  { title: 'Contact', href: '#' },
  { title: 'Settings',  href: '#' },
  { title: 'Shop',  href: '#' },
]

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
}