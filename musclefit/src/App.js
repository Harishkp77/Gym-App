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
import Loginpage from "./components/Loginpage";
import RegisterComponent from "./components/RegisterComponent";
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
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
      <ScrollUp />
    </Router>
  );
}

export default App;
