import React, { useContext } from "react";
import Pages from "./Pages";
import { AppContext } from "./AppContext";

function Blogs() {
  const { posts } = useContext(AppContext);
  return (
    <div className="sm:w-7/12 sm:mx-auto mx-4 space-y-8">
      {posts.map((ele, i) => {
        return <Pages key={ele.id} post={ele}/>;
      })}
    </div>
  );
}

export default Blogs;
