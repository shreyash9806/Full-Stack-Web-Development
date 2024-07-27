import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Spinner from "../Spinner";
import Blogs from "../Blogs";
import Pagination from "../Pagination";
import Header from "../Header";

function Home() {
  const { loading } = useContext(AppContext);
  return (
    <div className="overflow-y-hidden h-[100vh]">
      <div className=" ">
        <Header />
      </div>
      <div className="overflow-y-scroll h-[78vh] py-[40px]">
        {loading ? <Spinner /> : <Blogs />}
      </div>
      <div className="absolute bg-white bottom-0 w-full">
        {loading ? "" : <Pagination />}
      </div>
    </div>
  );
}

export default Home;
