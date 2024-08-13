import React from "react";
import { Link} from "react-router-dom";

function TempelateLogIn() {
  return (
    <div className="flex gap-3">
      <div className="p-[10px] bg-gray-900 rounded-md border border-gray-800 ">
        <Link to={"/login"}>Log In</Link>
      </div>
      <div className="p-[10px] bg-gray-900 rounded-md border border-gray-800 ">
        <Link to={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
}

export default TempelateLogIn;
