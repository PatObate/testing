import React from "react";
import BlogFreeLancerSection from "../containers/Blog/BlogFreelancerSection";
import BlogFirstSection from "../containers/Blog/BlogsFirstSection";
import { BlogOne } from "../containers/Blog/BlogsFirstSection/Data";
import { BlogCommunity } from "../containers/Blog/BlogFreelancerSection/data";

const Blog = () => {
  return (
    <>
      <BlogFirstSection {...BlogOne} />
      <BlogFreeLancerSection {...BlogCommunity} />
    </>
  );
};

export default Blog;
