"use client";
import { useState, useEffect } from "react";
import React from "react";
import { HoverBorderGradient } from "../components/ui/Hover";
import { useRouter } from "next/navigation";
import { CardSpotlight } from "../components/ui/Spotlight";
import { TailSpin } from "react-loader-spinner";
import { useUserContext } from "../context/userContext";
export const getOTP = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/api/users/sendOTP", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
const Signup = () => {
  const {setUser,loading,setLoading}=useUserContext()
  const [sendotp, setSendotp] = useState({
    name: "",
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router=useRouter()
 
  const handlechange = (e) => {
    setSendotp({ ...sendotp, [e.target.name]: e.target.value });
  };
  const handleGetOTP = async () => {
await setLoading(true);
    const res = await getOTP(sendotp);
    if (res.status==200) {
      setUser(sendotp)
      // localStorage.setItem('user',JSON.stringify(sendotp))
      setTimeout(() => {
        router.push("/varification")
      }, 2000);
    }
   await setLoading(false);
  };

  useEffect(() => {
    console.log(sendotp);
  }, [sendotp]);
  const handlechangetologin = () => {
    router.push("/login");
  };
  return ( 
    <CardSpotlight className="min-h-screen flex flex-col align-middle  items-center justify-center dark:bg-grid-small-gray-500 ">
      <>    
     <h1 className="text-4xl text-white font-thin m-2  ">SignUp</h1>
            <HoverBorderGradient containerClassName="m-3 " clockwise={false}>
              <input
                className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none 
                 disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
                value={sendotp.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={handlechange}
              />
            </HoverBorderGradient>
            <HoverBorderGradient containerClassName="m-3 " clockwise={false}>
              <input
                className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none 
                 disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
                value={sendotp.username}
                name="username"
                type="text"
                placeholder="Username"
                onChange={handlechange}
              />
            </HoverBorderGradient>

            <HoverBorderGradient containerClassName="m-3">
              <input
                className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
              focus-visible:outline-none 
               disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
                value={sendotp.email}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handlechange}
              />
            </HoverBorderGradient>

            <HoverBorderGradient containerClassName="m-3" clockwise={false}>
              <input
                className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none 
                 disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
                value={sendotp.password}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handlechange}
              />
            </HoverBorderGradient>
            <HoverBorderGradient containerClassName="m-5">
              <input
                className="flex h-10 w-[20rem] border-none bg-transparent text-black dark:text-white shadow-input px-3 py-2 text-sm file:bg-transparent 
                 file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                 focus-visible:outline-none 
                  disabled:cursor-not-allowed disabled:opacity-50 focus:border-none "
                value={sendotp.confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="ConfirmPassword"
                onChange={handlechange}
              />
            </HoverBorderGradient>
            <HoverBorderGradient>
              <span onClick={handleGetOTP} className="flex flex-row m-1 gap-2">
                <p>Get Varification Email OTP</p>
                <span>
                  {loading ? (
                    <>
                      <TailSpin
                        visible={true}
                        height="20"
                        width="20"
                        color="#fff"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </>
                  ) : (
                    <>&rarr;</>
                  )}
                </span>
              </span>
            </HoverBorderGradient>
          {/* </>
        ) : (
          <OTP signup={sendotp} loading={setloading} />
          )} */}
      <span onClick={handlechangetologin} className="cursor-pointer m-2 z-10 text-white font-thin"> Already an user? Log in!</span>
      </>
    </CardSpotlight>
  );
};

export default Signup