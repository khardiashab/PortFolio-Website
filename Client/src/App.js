import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AllProjects from "./Pages/Projects/AllProjects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import "./App.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:type/:id" element={<Projects />}/>
        <Route path="/projects/:type" element={<AllProjects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
