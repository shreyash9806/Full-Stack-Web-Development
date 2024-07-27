import React from "react";
import Blogs from "../Blogs";
import Pagination from "../Pagination";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="overflow-y-hidden h-[100vh]">
      <Header />
      <div className="overflow-y-scroll h-[78vh]">
        <div className="py-[20px] sm:w-7/12 sm:mx-auto mx-4 text-xl items-center flex space-x-4">
          <button
            className="cursor-pointer rounded-md py-[5px] px-[15px] border-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <h2 className="font-semibold">
            Blogs Tagged{" "}
            <span className="underline text-[#1d4ed8]">#{tag}</span>
          </h2>
        </div>
        <Blogs />
      </div>
      <div className="absolute bg-white bottom-0 w-full">
        <Pagination />
      </div>
    </div>
  );
}

export default TagPage;
