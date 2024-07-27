import { createContext, useState } from "react";
import { baseUrl } from "../Class 2/baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const navigate = useNavigate();

  async function fetchBlogPosts(page, tag = null, category) {
    setLoading(true);
    if (page === undefined) {
      return;
    }
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.posts || data.posts.length === 0)
        throw new Error("Something Went Wrong");
      // console.log("Api Response", data);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }

    setLoading(false);
  }

  function changeHandler(page) {
    navigate({ search: `?page=${page}` });

    setPage(page);
  }
  const value = {
    posts,
    setLoading,
    loading,
    setPosts,
    setPage,
    page,
    setTotalPage,
    totalPage,
    fetchBlogPosts,
    changeHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
