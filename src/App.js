import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import About from "./about/About";
import Projects from "./project/project";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./contact/contact";
import Story from "./story/Story";
import SchoolWork from "./schoolwork/SchoolWork";
import StatisticsDetail from "./schoolwork/StatisticsDetail";
import SwAgentAction from "./project/sw-agent-action/SwAgentAction";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Story />} />
          <Route path="/schoolwork" element={<SchoolWork />} />
          <Route path="/schoolwork/statistics" element={<StatisticsDetail />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/sw-agent-action" element={<SwAgentAction />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy route redirects */}
          <Route path="/activities/aiesec1" element={<Navigate to="/project/aiesec-ogx" replace />} />
          <Route path="/activities/aiesec2" element={<Navigate to="/project/aiesec-nldc" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
