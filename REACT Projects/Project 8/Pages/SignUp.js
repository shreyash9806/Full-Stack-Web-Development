import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import frame from "../assets/frame.png";
import signup from "../assets/signup.png";

function SignUp({ formData, setLogIn, changeHandler }) {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("Student");
  function showHandler() {
    setShow1(!show1);
  }
  function showHandler1() {
    setShow2(!show2);
  }

  function accountHander(event) {
    formData.accountType = `${event.target.innerText}`;
    setAccountType(event.target.innerText);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("Password fo not match");
    } else if (formData.createPassword === formData.confirmPassword) {
      toast.success("Account Created");
      setLogIn(true);
      navigate("/dashboard");
    }
  }
  return (
    <div
      className={
        " text-white flex flex-col-reverse items-center md:flex-row md:justify-between md:items-start w-10/12 mx-auto"
      }
    >
      <div className="md:w-[40%] space-y-4 pt-[40px]">
        <h1 className="text-[2rem]">
          Join the millions learning to code with StudyNotion for free
        </h1>

        <p className="leading-6 text-gray-400 text-[1.2rem]">
          Build Skills for today, tomorrow, and beyond. <br />
          <span className=" italic text-[#47a5c5]">
            Education to future-proof your career.
          </span>
        </p>

        <form className="space-y-3 ">
          <div className="flex transition-all duration-500">
            <div className="bg-[#161d29] text-[1.2rem] p-[5px] rounded-full flex gap-2">
              <div
                onClick={accountHander}
                className={`${
                  accountType === "Student" ? "bg-deepBlue" : "bg-none"
                }  cursor-pointer px-[15px] py-[7px] rounded-full
                transition-all duration-500`}
              >
                Student
              </div>
              <div
                onClick={accountHander}
                className={` ${
                  accountType === "Instructor" ? "bg-deepBlue" : "bg-none"
                } cursor-pointer px-[15px] py-[7px] rounded-full
                transition-all duration-500`}
              >
                Instructor
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First name"
                className=" bg-grayBlue rounded-md p-[10px]"
                name="firstName"
                onChange={changeHandler}
                value={formData.firstName}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                className=" bg-grayBlue rounded-md p-[10px]"
                name="lastName"
                onChange={changeHandler}
                value={formData.lastName}
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter email address"
              className="bg-grayBlue rounded-md p-[10px]"
              name="emailAddress"
              onChange={changeHandler}
              value={formData.emailAddress}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col relative">
              <label htmlFor="createPassword">
                Create Password <span className="text-red-500">*</span>
              </label>
              <input
                id="createPassword"
                type={show1 ? "password" : "text"}
                placeholder="Enter Password"
                className="bg-grayBlue rounded-md p-[10px]"
                name="createPassword"
                onChange={changeHandler}
                value={formData.createPassword}
              />
              <div
                className="cursor-pointer absolute p-[10px]
              bottom-[5px] right-0 xyy"
                onClick={showHandler}
              >
                {show1 ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div className="flex flex-col relative">
              <label htmlFor="confirmPassword">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPassword"
                type={show2 ? "password" : "text"}
                placeholder="Confirm Password"
                className="bg-grayBlue rounded-md p-[10px]"
                name="confirmPassword"
                onChange={changeHandler}
                value={formData.confirmPassword}
              />

              <div
                className="cursor-pointer absolute p-[10px]
              bottom-[5px] right-0 xyz"
                onClick={showHandler1}
              >
                {show2 ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>

          <br />
          <button
            onClick={submitHandler}
            className="rounded-md text-[1rem] font-medium text-black bg-deepYellow  mb-[10px] w-[100%] py-[5px]"
          >
            Create Account
          </button>
          <div className="flex items-center gap-3 justify-between text-gray-700">
            <hr className="w-[100%] border-gray-700" />
            <p>OR</p>
            <hr className="w-[100%] border-gray-700" />
          </div>
          <br />
          <div className="flex justify-center  items-center gap-2 border border-gray-500 font-semibold rounded-md  text-gray-200 my-[20px] cursor-pointer w-[100%] py-[7px]">
            <FcGoogle fontSize={"1.3rem"} />
            Sign In with Google
          </div>
        </form>
      </div>

      <div className="right-part relative md:w-[40%] md:mt-[40px] mt-[30px]">
        <img
          className="absolute top-[20px] left-[15px]"
          src={frame}
          alt="frame"
        />

        <img className=" relative " src={signup} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
