import React from "react";
import Pages from "../Pages";

function RelatedBlogs({ blog, relatedBlogs }) {
  return (
    <div className="sm:w-7/12 sm:mx-auto mx-4">
      <Pages post={blog} />

      <h1 className="text-3xl font-semibold py-[40px]">Related Blogs</h1>
      <div className="space-y-6">
        {relatedBlogs.map((ele, i) => {
          return <Pages key={ele.id} post={ele} />;
        })}
      </div>
    </div>
  );
}

export default RelatedBlogs;
