import React from "react";
import BlogPage from "../containers/BlogPage";
import { BlogPost2 } from "../containers/BlogPage/Data";

const Blog2 = () => {
  return (
    <>
      <div>
        <BlogPage {...BlogPost2} />
      </div>
    </>
  );
};

export default Blog2;
