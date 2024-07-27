import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner";
import { AppContext } from "../AppContext";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";
import RelatedBlogs from "./RelatedBlogs";
function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const { loading, setLoading } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const blogId = location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error, "Error In Fetching Blogs!!!");
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div className="pb-[40px]">
        <div className="py-[20px] sm:w-7/12 sm:mx-auto mx-4 text-xl items-center flex space-x-4">
          <button
            className="cursor-pointer rounded-md py-[5px] px-[15px] border-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
        {loading ? <Spinner /> : blog ? (<RelatedBlogs blog={blog} relatedBlogs={relatedBlogs}/>
        ) : "No Blogs Found"}
      </div>
    </div>
  );
}

export default BlogPage;
