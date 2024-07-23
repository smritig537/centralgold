import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Form from "./components/Form.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";
import EnquiryNow from "./components/EnquiryNow.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/enquiry" element={<EnquiryNow />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
