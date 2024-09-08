"use client";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { getOTP } from "../signup/page";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/userContext";
import { Bounce, ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from "react-loader-spinner";
const OTP = () => {
  const { user,loading,setLoading ,setUser} = useUserContext();
  console.log(user)
  const [counting, setcounting] = useState(true);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const toastMSGsuccess=(msg)=>{
toast.success(msg, {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
  })
  }
  const toastMSerr=(msg)=>{
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      }); 
     }
  const varifyOTP = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/users/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
    } catch (error) {
      console.log(error.message);
    }
  };


  const handleVarify = async () => {
    try {
      if (!otp=="") {
        const data = {user, otp };
        const res = await varifyOTP(data);
        console.log(res)
        if (res.status==200) {
          await setUser(res.data)
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      }else{
        toastMSerr("Please enter OTP")
        document.getElementById("field").textContent="OTP Field is required"
      }
      
    } catch (error) {
      console.log(error)
    }
  };
  const resendOTP = async () => {
    try {
     await setLoading(true)
      const res = await getOTP(user);
      if (res.ok) {
        toastMSGsuccess("OTP sent successfully")
        await setLoading(false)
        setcounting(true);
      }else{
        toastMSerr("Failed to send OTP")
      }
    } catch (error) {
      console.log(error);
    }
  };
  const count = () => {
    let timer = 30;
    const countdown = setInterval(() => {
      setcounting(true);
      if (loading===false) {
        document.getElementById("con").innerText = timer + " Seconds Remaining";
      }
      timer--;
      if (timer == 0) {
        clearInterval(countdown);
        setcounting(false);
      }
    }, 1000);
  };
  useEffect(() => {
    if (otp!=="") {
      count();
    }
  }, []);
useEffect(() => {
count()
}, [loading===false])
  return (<>      <ToastContainer position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition= {Bounce}/>

    <div className="flex flex-col items-center align-middle min-h-screen">
      <OTPInput
        value={otp}
        onChange={(otp)=>setOtp(otp)}
        numInputs={6}
        renderSeparator={<span className="m-6"></span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          width: "3rem",
          backgroundColor: "black",
          height: "4rem",
          color: "white",
          border: "3px solid #258649",
          borderRadius: "9px",
          fontSize: "3rem",
          cursor: "auto",
        }}
        containerStyle={{ margin: "10rem" }}
      />
      {counting && loading===false ? (
        <>
          <button
            className="bg-[#2cb540] p-4 rounded-2xl w-[6rem] text-white hover:bg-[#3add53]"
            onClick={handleVarify}
          >
            Varify
          </button>
          <div id="con" className="m-6 text-2xl font-thin"></div>
          <div id="field" className="m-6 text-2xl font-thin"></div>
        </>
      ) : (
        <>
          <button
            className="bg-[#2cb540]  p-4 rounded-2xl w-[10%] text-white hover:bg-[#3add53]"
            onClick={resendOTP}
          >
            {!loading ?
          <span>
            Resend OTP
          </span>:
          <span className="flex flex-row gap-3 justify-between text-xl items-center">
            <p>
            Sending..
            </p>
            <span>
            {loading? (
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
            ) : null}
            </span>
          </span>

          }

          </button>
        </>
      )}
    </div>
      </>
  );
};

export default OTP;
