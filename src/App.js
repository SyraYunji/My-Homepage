import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import About from "./about/About";
import Projects from "./project/project";
import Activities from "./activities/Activities";
import AIESEC1 from "./activities/aiesec/aiesec1";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} /> {/* 경로 수정 */}
          <Route path="/activities/aiesec" element={<AIESEC1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
