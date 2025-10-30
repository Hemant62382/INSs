import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./coman/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./coman/Footer";
import ContactUs from "./pages/ContactUs";
import Placement from "./pages/Placement";
import CareerCoursePage from "./component/courses/CareerCoursePage";

const App = () => {
  return (
    <Router basename="/INSs/">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/CareerCoursePage" element={<CareerCoursePage />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
