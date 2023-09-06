import React, { useContext } from "react";
import style from "./App.module.css";
import { VerificationContext } from "./components/verification/VerificationContext";
import NavBar from "./components/Layout/NavBar/NavBar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Footer from "./components/Layout/Footer/Footer";
import Contact from "./Pages/Contact";
import Success from "./components/submit/Success";

function App() {
  const { isVerified } = useContext(VerificationContext);

  return (
    <div className={`${style.app} ${isVerified ? style.still : ""}`}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
