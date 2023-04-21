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
import Algorithms from "./pages/Algorithms/index"
import ReactPage from "./pages/ReactPage";
import CDK from "./pages/CDK/index"
import LeetCode from "./pages/LeetCode";
import Header from "./components/Header";
import { awsconfig } from "./aws-exports.ts";
import { Amplify } from "aws-amplify";

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactPage />} /> 
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/cdk" element={<CDK />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
