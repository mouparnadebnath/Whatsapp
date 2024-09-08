'use client'
import React,{useEffect, useState} from 'react'
import OTPInput from 'react-otp-input'
import { varifyOTP } from '@/app/varification/page'
import { getOTP } from '@/app/signup/page'
const OTP = ({signup,setloading}) => {
  const [counting, setcounting] = useState(true)
    const [otp, setOtp] = useState('')
const handleOtp=(otp)=>{
setOtp(otp)
}
useEffect(() => {
console.log(otp)
}, [otp])
const handleVarify=async()=>{
  const data={signup,otp}
const res=await varifyOTP(data)
console.log(res)
}
const resendOTP= async () => {
  const res = await getOTP(signup);
};
const count=()=>{
  let timer=30
  const countdown=setInterval(() => {
    setcounting(true)
    document.getElementById("con").innerText=timer + " Seconds Remaining"
    timer--
    if (timer==0) {
      clearInterval(countdown)
      document.getElementById("con").innerText="Expired!"
      setcounting(false)
    }
  }, 1000);

}
useEffect(() => {
count()
},[])

  return (
    <div className='flex flex-col items-center align-middle '>
    <OTPInput
      value={otp}
      onChange={handleOtp}
      numInputs={6}
      renderSeparator={<span className='m-6'></span>}
      renderInput={(props) => <input {...props} />}
inputStyle={{width:"3rem",backgroundColor:"black",height:"4rem",color:"white",border:"3px solid #258649",borderRadius:"9px"}}
containerStyle={{margin:"10rem"}}
/>
{counting ? <>
<button className='bg-[#2cb540] p-4 rounded-2xl w-[6rem] text-white hover:bg-[#3add53]' onClick={handleVarify}>Varify</button>
<div id='con' className='m-6 text-2xl font-thin'></div>
</>:
<button className='bg-[#2cb540] p-4 rounded-2xl w-[6rem] text-white hover:bg-[#3add53]' onClick={resendOTP}>Resend OTP</button>


}


</div>
  )
}

export default OTP