import React from "react";
import BlogPage from "../containers/BlogPage";
import { BlogPost3 } from "../containers/BlogPage/Data";

const Blog3 = () => {
  return (
    <>
      <div>
        <BlogPage {...BlogPost3} />
      </div>
    </>
  );
};

export default Blog3;
