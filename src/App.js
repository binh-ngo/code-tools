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
import Footer from "./components/Footer";
import ReactPage from "./pages/ReactPage";
import CDK from "./pages/CDK/index"


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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
