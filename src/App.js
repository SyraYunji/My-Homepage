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
import AIESEC2 from "./activities/aiesec/aiesec2";
import URPDetail from "./project/co-deep/URP Detail";
import Contact from "./contact/contact";
import ComingSoon from "./coming soon/ComingSoon";
import Hanium from "./project/hanium/hanium";
import KurtainCall from "./project/kurtaincall/kurtaincall";
import ReLocal from "./project/relocal/relocal";
import Lachu from "./project/lachu/lachu";
import Story from "./story/Story";
import SchoolWork from "./schoolwork/SchoolWork";
import StatisticsDetail from "./schoolwork/StatisticsDetail";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Story />} />
          <Route path="/schoolwork" element={<SchoolWork />} />
          <Route path="/schoolwork/statistics" element={<StatisticsDetail />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />

          {/* AIESEC 프로젝트들 (기획) */}
          <Route path="/activities/aiesec1" element={<AIESEC1 />} />
          <Route path="/activities/aiesec2" element={<AIESEC2 />} />

          {/* 프론트엔드 프로젝트들 */}
          <Route path="/project/timi" element={<Timi />} />
          <Route path="/project/co-deep" element={<CoDeepDetail />} />
          <Route path="/project/hanium" element={<Hanium />} />

          {/* 풀스택 프로젝트들 */}
          <Route path="/project/re-local" element={<ReLocal />} />
          <Route path="/project/lachu" element={<Lachu />} />

          {/* 하드웨어 프로젝트 */}
          <Route path="/project/kurtaincall" element={<KurtainCall />} />

          {/* 기타 라우트들 */}
          <Route path="/platform-detail" element={<PlatformDetail />} />
          <Route path="/urp" element={<URPDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
