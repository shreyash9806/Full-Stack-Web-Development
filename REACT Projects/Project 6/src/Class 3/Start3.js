import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Routes/Home";
import BlogPage from "./Routes/BlogPage";
import TagPage from "./Routes/TagPage";
import CategoryPage from "./Routes/CategoryPage";
import { AppContext } from "./AppContext";

function Start3() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { fetchBlogPosts, setPage } = useContext(AppContext);

  useEffect(() => {
    let page = searchParams.get("page") ?? 1;
    let pager = Number(page);
    setPage(pager);
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(pager, tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(pager, null, category);
    } else {
      fetchBlogPosts(pager);
    }
    fetchBlogPosts();
  }, [location.pathname, location.search]);
  return (
    <div className=" relative">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default Start3;
