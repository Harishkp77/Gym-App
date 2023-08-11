import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Membership from "./components/Membership";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import RegisterComponent from "./components/RegisterComponent";
import UserReport from "./components/UserReport";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Program />
              <Membership />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/report" element={<UserReport/>} />
      </Routes>
      <ScrollUp />
    </Router>
  );
}

export default App;
