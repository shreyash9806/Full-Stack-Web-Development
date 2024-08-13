import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { RxHamburgerMenu } from "react-icons/rx";
import TempelateLogIn from "./tempelates/TempelateLogIn";
import TempelateLogOut from "./tempelates/TempelateLogOut";
function Start3() {
  document.body.style.backgroundColor = "#000814";

  const [logIn, setLogIn] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "Student",
    firstName: "",
    lastName: "",
    emailAddress: "",
    createPassword: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    const { type, value, name } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <div className=" bg-deepBlue h-[100vh]">
      <nav
        className=" py-[15px] text-gray-300 w-10/12 mx-auto text-[1.1rem] flex justify-between
      items-center"
      >
        <Link to={"/"}>
          <img width={"150px"} src={Logo} alt="" />
        </Link>
        <div className="space-x-4 hidden md:block">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
        </div>

        <div className=" text-gray-400 hidden md:block">
          {logIn ? <TempelateLogOut setLogIn={setLogIn} /> : <TempelateLogIn />}
        </div>

        <div className="md:hidden">
          <RxHamburgerMenu className={`"cursor-pointer"`} fontSize={"1.3rem"} />
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home text={"Home"} />} />\
        <Route
          path="/dashboard"
          element={<Home text={"Welcome To Studynotion"} />}
        />
        \
        <Route
          path="/login"
          element={
            <Login
              setLogIn={setLogIn}
              logIn={logIn}
              formData={formData}
              setFormData={setFormData}
              changeHandler={changeHandler}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              setLogIn={setLogIn}
              logIn={logIn}
              formData={formData}
              setFormData={setFormData}
              changeHandler={changeHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Start3;
