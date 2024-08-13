import React from "react";
import { Link} from "react-router-dom";

function TempelateLogOut({ setLogIn, active }) {
  return (
    <div className={`${active} "flex gap-3`}>
      <div className="p-[10px] cursor-pointer bg-gray-900 rounded-md border border-gray-800 ">
        <Link
          onClick={() => {
            setLogIn(false);
          }}
          to={"/login"}
        >
          Log out
        </Link>
      </div>
      <div className="p-[10px] cursor-pointer bg-gray-900 rounded-md border border-gray-800 ">
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
}

export default TempelateLogOut;
