import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import RegisterComponent from "./components/RegisterComponent";
import UserReport from "../src/report/UserReport";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/report" element={<UserReport />} />
        </Routes>
         </Router>
    </>
  );
}

export default App;
