import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [altcheck, setAltCheck]= useState(true)
  return (
    <section className="flex justify-center bg-[#11111b]">
      <div className="w-[50%] h-screen relative">
        <div className="w-full h-full top-0 absolute bg-black/50" />
        <img src="login-sect.jpg" className="imgrender" alt="" />
      </div>
      <div className="w-[50%] flex justify-center  h-screen bg-[url('/login-bg.png')] bg-cover bg-no-repeat">
        <div className="w-[80%] py-6">
          <div className="flex flex-col gap-5">
            <span className={`introheading-2 leading-[3.75rem]`}>
              Customer SignUp
            </span>
            <div className="flex flex-col gap-y-5 w-full introheading-2 text-base">
              <form action="" method="post">
                <div className="w-full flex justify-between">
                  <div className="w-[47%]">
                    <label htmlFor="fname">First Name:</label>
                    <input
                      type="text"
                      name="fname"
                      className="py-1 text-black outline-none px-2 w-full"
                      required
                    />
                  </div>
                  <div className="w-[47%]">
                    <label htmlFor="lname">Last Name:</label>
                    <input
                      type="text"
                      name="lname"
                      className="py-1 text-black outline-none px-2 w-full"
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div className="w-[47%]">
                    <label htmlFor="fname">Phone No:</label>
                    <input
                      type="tel"
                      name="fname"
                      className="py-1 text-black outline-none px-2 w-full"
                      max={10}
                      required
                    />
                  </div>
                  <div className="w-[47%]">
                    <div className="flex justify-between items-center">
                      <label htmlFor="altnumber">Alternative No:</label>
                      <input type="checkbox" name="altno" id="" onClick={()=>{setAltCheck(!altcheck)}}/>
                    </div>
                    <input
                      type="tel"
                      name="altnumber"
                      max={10}
                      disabled = {altcheck}
                      className="py-1 text-black outline-none px-2 w-full"
                    />
                  </div>
                </div>
                <label htmlFor="useremail">E-mail:</label>
                <input
                  type="email"
                  name="useremail"
                  className="py-1 text-black outline-none px-2 w-full"
                  required
                  id=""
                />
                <div className="w-full flex justify-between">
                  <div className="w-[47%]">
                    <label htmlFor="fname">Password:</label>
                    <input
                      type="password"
                      name="fname"
                      className="py-1 text-black outline-none px-2 w-full"
                      required
                    />
                  </div>
                  <div className="w-[47%]">
                    <label htmlFor="lname">Confirm Password:</label>
                    <input
                      type="text"
                      name="lname"
                      className="py-1 text-black outline-none px-2 w-full"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="viewallbtn w-full py-2.5 mt-5 text-black">
                Sign Up
              </button>
              </form>
              <span className="w-full justify-center items-center descr-1 font-medium">OR</span>
              <button className=" bg-white w-full py-2 flex justify-center shadow-xl">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-7 h-7"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="introheading-2 text-submessage text-base">
                  Sign Up with Google
                </span>
              </div>
            </button>
            </div>
            <div className="descr-1">
              <span>
                Have an account ? {""}
                <Link to="/login">
                  <span className="text-primary font-medium cursor-pointer">
                    Sign In!
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
