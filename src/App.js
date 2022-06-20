import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Switch, Route } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import PopSaleEffect from "./components/PopSaleEffect";
import Footer from "./components/Footer";
import Activities from "./pages/Activities";
import FAQ from "./pages/FAQ";
import Blog1 from "./pages/Blog1";
import ScrollToTop from "./ScrollToTop";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ChatBot />
      <PopSaleEffect />
      <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/blog1" component={Blog1} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={ContactUs} />
      <Footer />
    </>
  );
}

export default App;
