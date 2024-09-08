// "use client";
// import { useState, useEffect } from "react";
// import React from "react";
// import { getOTP } from "@/app/signup/page";
// import OTP from "./OTP";
// import { HoverBorderGradient } from "../ui/Hover";
// import { useRouter } from "next/navigation";
// import { CardSpotlight } from "../ui/Spotlight";
// import { TailSpin } from "react-loader-spinner";
// const Signup = () => {
//   const [loading, setloading] = useState(true);
//   const [sendotp, setSendotp] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const handlechange = (e) => {
//     setSendotp({ ...sendotp, [e.target.name]: e.target.value });
//     console.log(sendotp);
//   };
//   const handleGetOTP = async () => {
//     setloading(true);
//     const res = await getOTP(sendotp);
//     setloading(false);
//   };

//   useEffect(() => {
//     console.log(sendotp);
//   }, [sendotp]);
// const router=useRouter()
//   const handlechangetologin=()=>{
// router.push('/login')
//   }
//   return (
//     <CardSpotlight className="w-screen h-screen flex flex-col align-middle  items-center justify-center ">
//     <>
//       {loading ? (
//         <>
          
//             <HoverBorderGradient containerClassName='m-3'clockwise={false} >
//               <input
//                 className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
//           file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
//           focus-visible:outline-none 
//            disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
//                 value={sendotp.name}
//                 name="name"
//                 type="text"
//                 placeholder="Name"
//                 onChange={handlechange}
//               />
//             </HoverBorderGradient>
        
       
//             <HoverBorderGradient containerClassName='m-3'>
//               <input
//                 className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
//         file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
//         focus-visible:outline-none 
//          disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
//                 value={sendotp.email}
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 onChange={handlechange}
//               />
//             </HoverBorderGradient>
         

//           <HoverBorderGradient containerClassName='m-3' clockwise={false}>
//             <input
//               className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
//           file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
//           focus-visible:outline-none 
//            disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
//               value={sendotp.password}
//               name="password"
//               type="password"
//               placeholder="Password"
//               onChange={handlechange}
//             />
//           </HoverBorderGradient>
//           <HoverBorderGradient containerClassName='m-5'>
//             <input
//               className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
//            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
//            focus-visible:outline-none 
//             disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
//               value={sendotp.confirmPassword}
//               name="confirmPassword"
//               type="password"
//               placeholder="ConfirmPassword"
//               onChange={handlechange}
//             />
//           </HoverBorderGradient>
//           <HoverBorderGradient  >
//             <span onClick={handleGetOTP} className="flex flex-row m-1 gap-2">
//               <p>Get Varification Email OTP</p> <span>{!loading? <><TailSpin
//   visible={true}
//   height="20"
//   width="20"
//   color="#fff"
//   ariaLabel="tail-spin-loading"
//   radius="1"
//   wrapperStyle={{}}
//   wrapperClass=""
//   /></>:<>&rarr;</>}</span>
//             </span>
//           </HoverBorderGradient>
//           <span onClick={handlechangetologin}>Already an user? Log in!</span>
//         </>
//       ) : (
//         <OTP signup={sendotp} loading={setloading} />
//       )}
//     </>
//     </CardSpotlight>

//   );
// };

// export default Signup;
