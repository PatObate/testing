import React from "react";
import BlogPage from "../containers/BlogPage";
import { BlogPost } from "../containers/BlogPage/Data";

const Blog1 = () => {
  return (
    <>
      <div>
        <BlogPage {...BlogPost} />
      </div>
    </>
  );
};

export default Blog1;
