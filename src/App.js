import React, { useState } from "react";
import "./App.css";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import PopSaleEffect from "./components/PopSaleEffect";
import Footer from "./components/Footer";
import Activities from "./pages/Activities";
import FAQ from "./pages/FAQ";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ChatBot />
      <PopSaleEffect />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} preload={scrollTop} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
          preload={scrollTop}
        />
        <Route path="/blog" element={<Blog />} preload={scrollTop} />
        <Route path="/blog/blog1" element={<Blog1 />} preload={scrollTop} />
        <Route path="/blog/blog2" element={<Blog2 />} preload={scrollTop} />
        <Route path="/blog/blog3" element={<Blog3 />} preload={scrollTop} />
        <Route
          path="/activities"
          element={<Activities preload={scrollTop} />}
        />
        <Route path="/faq" element={<FAQ />} preload={scrollTop} />
        <Route path="/pricing" element={<Pricing />} preload={scrollTop} />
        <Route path="/contact" element={<ContactUs />} preload={scrollTop} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
