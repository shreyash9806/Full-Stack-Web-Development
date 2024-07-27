import React from "react";
import { useNavigate } from "react-router-dom";

function Pages({ post }) {
  const tags = [...post.tags];
  const navigate = useNavigate();
  const category = post.category.replaceAll(" ", "-");
  return (
    <div className="">
      <h1
        className="text-xl font-semibold hover:decoration-solid hover:underline cursor-pointer"
        onClick={() => {
          navigate(`/blog/${post.id}`);
        }}
      >
        {post.title}
      </h1>
      <div className="text-[0.9rem] mt-[10px]">
        <p>
          By <i>{post.author}</i> on{" "}
          <button
            onClick={() => {
              navigate(`/categories/${category}`);
            }}
            className="decoration-solid cursor-pointer underline font-semibold"
          >
            {post.category}
          </button>
        </p>
        <p>
          Posted On <span>{post.date}</span>
        </p>
      </div>
      <br />
      <p className="text-[1.1rem]">{post.content}</p>
      <p className="mt-[10px] flex-wrap flex gap-3">
        {tags.map((tag, index) => {
          const tag1 = tag.replaceAll(" ", "-");
          return (
            <span
              key={index}
              onClick={() => {
                navigate(`/tags/${tag1}`);
              }}
              className="font-semibold text-[#0000CD] cursor-pointer underline decoration-solid"
            >
              #{tag}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Pages;
