import React, { useState } from "react";
import BlogFreeLancerSection from "../containers/Blog/BlogFreelancerSection";
import BlogFirstSection from "../containers/Blog/BlogsFirstSection";
import { BlogOne } from "../containers/Blog/BlogsFirstSection/Data";
import { BlogCommunity } from "../containers/Blog/BlogFreelancerSection/data";
import ModalGetStarted from "../components/ModalGetStarted";

const Blog = () => {
  const [showModal2, setShowModal2] = useState(false);
  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  return (
    <>
      <div>
        <ModalGetStarted
          showModal2={showModal2}
          setShowModal2={setShowModal2}
        />
        <BlogFirstSection {...BlogOne} />
        <BlogFreeLancerSection {...BlogCommunity} toggleModal={openModal2} />
      </div>
    </>
  );
};

export default Blog;
