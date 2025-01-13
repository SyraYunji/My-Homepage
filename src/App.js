import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import About from "./about/About";
import Projects from "./project/project";
import Activities from "./activities/Activities";
import AIESEC1 from "./activities/aiesec/aiesec1";
import CoDeepDetail from "./project/co-deep/CoDeepDetail";
import Timi from "./project/timi/timi";
import PlatformDetail from "./project/co-deep/platform-detail";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/activities" element={<Activities />} /> {/* 경로 수정 */}
          <Route path="/activities/aiesec" element={<AIESEC1 />} />
          <Route path="/co-deep" element={<CoDeepDetail />} />
          <Route path="/timi" element={<Timi />} />
          <Route path = "/platform-detail" element = {<PlatformDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
