import React from "react";
import BlogPage from "../containers/BlogPage";
import { BlogPost } from "../containers/BlogPage/Data";

const Blog1 = () => {
  return (
    <>
      <BlogPage {...BlogPost} />
    </>
  );
};

export default Blog1;
