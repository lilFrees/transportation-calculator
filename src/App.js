import React, { useContext } from "react";
import style from "./App.module.css";
import { VerificationContext } from "./components/verification/VerificationContext";
import Success from "./components/submit/Success";
import NavBar from "./components/Layout/NavBar/NavBar";
import Hero from "./components/Layout/Hero/Hero";
import About from "./components/Layout/About/About";
import CTA from "./components/Layout/CTA/CTA";
import FAQ from "./components/Layout/FAQ/FAQ";
import Footer from "./components/Layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  const { isVerified } = useContext(VerificationContext);

  return (
    <div className={`${style.app} ${isVerified ? style.still : ""}`}>
      <Routes>
        <Route path="/success" element={isVerified && <Success />} />
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <About />
              <FAQ />
              <CTA />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
