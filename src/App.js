import React from "react";
import "./style.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/index";
import Javascript from "./pages/Js/index"
import ReactPage from "./pages/ReactPage";
import CDK from "./pages/CDK/index"
import LeetCode from "./pages/LeetCode";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactPage />} /> 
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/cdk" element={<CDK />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
