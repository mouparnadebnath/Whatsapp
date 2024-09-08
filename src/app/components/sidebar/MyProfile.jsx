'use client'
import React,{useState,useEffect,useRef} from 'react'
import { updateProfile } from '@/app/updateprofile/page'
import { useUserContext } from '@/app/context/userContext'
import { IconPencil, IconCheck} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
const MyProfile = () => {
    const {user}=useUserContext()
    // const [profilePics, setProfilePics] = useState(user.profilePic)
    const [profilePics, setProfilePics] = useState("")
    // console.log(user.profilePic)
    const imageref = useRef(null)
    const nameRef=useRef(null)
    // useClickAway(ref, () => setOpen(false))
    const router=useRouter()
  const handleProfileimage=()=>{
    imageref.current.click()
  }
  const handleImageChange=(e)=>{
  const file=e.target.files[0]
  if (file||file.type.startsWith("image/")) {
    const reader=new FileReader()
    reader.onloadend=()=>{
  setProfilePics(reader.result)
  document.getElementById("my_modal_1").showModal()
    }
    reader.readAsDataURL(file)
  }else{
    setProfilePics("")
  }
  
  }
  const updateProfilePic=async()=>{
    // update profile picture
  const res=await updateProfile(profilePics)
  console.log(res)
    if (res) {
      localStorage.setItem("profilePic", JSON.stringify(profilePics))
      document.getElementById("my_modal_1").close()
      document.getElementById("my_modal_5").close()
    }
  }
  // useEffect(() => {
  // const storedImage=localStorage.getItem('profilePic')
  //   setProfilePics(storedImage)
  // }, [])
  const handleFocusInput=()=>{
    nameRef.current.focus()
   const btn= document.getElementsByClassName("savebtn")
   for (let i = 0; i < btn.length; i++) {
btn[i].style.display="block"    
   }
  }
  return (
   <>
   <dialog id="my_modal_1" className="modal" open={(Boolean(profilePics))}>
  <div className="modal-box">
    {/* <div className="modal-action"> */}
      <form method="dialog">
        {/* <button className="btn "><IconX/></button> */}
      <img src='https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' className="" />
      <button className='btn' onClick={updateProfilePic}>Update</button>
      </form>
    {/* </div> */}
  </div>
</dialog>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box min-h-screen min-">
<img  src='https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' alt="" />
    <div className="modal-action flex flex-row justify-between">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

       <div className="flex flex-col w-[100%]  items-center justify-around p-5 border-b-2 border-zinc-800">
             <div className='dropdown dropdown-bottom dropdown-end'>
             <img tabIndex={1} className=' rounded-full w-[15rem] cursor-pointer' width={15} height={15} src='https://ia601308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg'  
            //  onClick={()=>document.getElementById('my_modal_5').showModal()}
    role='button'
             />
             <ul tabIndex={1} className='dropdown-content menu cursor-pointer'>
             <input type="file" ref={imageref} className='hidden' onChange={handleImageChange}/>
<li onClick={handleProfileimage}>Change Pic </li>
<li onClick={()=>document.getElementById('my_modal_5').showModal()}>View Image</li>
             </ul>
             </div>
             <span>
                <h5 className='text-green-700'>Name</h5>
                <span className='flex flex-row justify-between gap-3'>
                <input type="text" ref={nameRef} className='focus:outline-none bg-transparent border-b-2 border-gray-500 focus:border-green-700' defaultValue={user?user.username:router.push("/signup")}  />
                <button onClick={handleFocusInput} className='focus:rounded-full focus:bg-green-800' >
<IconPencil className='m-2' /> 
                </button>
<button className='savebtn hidden' >
<IconCheck className=''/>
</button>
                </span>
             </span>
             <span></span>
              </div>
   </>
  )
}

export default MyProfile