import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png";
import login from "../assets/login.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login({ formData, changeHandler, setLogIn }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);

    toast.success("Successfully Logged In");
    setLogIn(true);
    navigate("/dashboard");
  }

  function showHandler() {
    setShow(!show);
  }

  return (
    <div className="w-10/12 mx-auto flex flex-col-reverse items-center
     md:flex-row md:justify-between">
      <div className="text-white left-part block space-y-4 md:w-[45%]">
        <h1 className="text-3xl mt-[40px]">Welcome Back</h1>

        <p className="text-[1.2rem] leading-[1.2] text-gray-400">
          Build Skills for today, tommorow, and beyond. <br />
          <span className="italic text-[#47a5c5]">
            Education to future-proof your career.
          </span>
        </p>

        <form onSubmit={submitHandler}>
          <div className="mb-[10px] text-white flex flex-col">
            <label htmlFor="Email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              className="bg-grayBlue rounded-md p-[10px]"
              id="Email"
              name="email"
              value={formData.email}
              required
              type="text"
              onChange={changeHandler}
              placeholder="Enter email address"
            />
          </div>

          <div className="text-white flex flex-col relative">
            <label htmlFor="Password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className="bg-grayBlue rounded-md p-[10px] pr-[40px]"
              required
              name="password"
              id="Password"
              onChange={changeHandler}
              value={formData.password}
              type={show ? "password" : "text"}
              placeholder="Enter Password"
            />
            <div
              className="cursor-pointer absolute p-[10px]
              bottom-[25px] right-0"
              onClick={showHandler}
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </div>
            <p className=" text-right cursor-pointer text-[#47a5c5]">
              Forgot Password
            </p>
          </div>

          <button className="rounded-md text-[1.1rem] font-semibold text-black bg-deepYellow mt-[30px] mb-[10px] w-[100%] py-[5px]">
            Sign In
          </button>
          <div className="flex items-center gap-3 justify-between text-gray-700">
            <hr className="w-[100%] border-gray-700" />
            <p>OR</p>
            <hr className="w-[100%] border-gray-700" />
          </div>
          <div className="flex justify-center  items-center gap-2 border border-gray-500 font-semibold rounded-md  text-gray-500 my-[20px] cursor-pointer w-[100%] py-[7px]">
            <FcGoogle fontSize={"1.3rem"} />
            Sign In with Google
          </div>
        </form>
      </div>
    
      <div className="right-part relative md:w-[40%] md:mt-0 mt-[30px]">
        <img
          className="absolute top-[20px] left-[15px]"
          src={frame}
          alt="frame"
        />

        <img className=" relative " src={login} alt="" />
      </div>
    </div>
  );
}

export default Login;
