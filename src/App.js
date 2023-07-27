import React, { useContext, useEffect } from "react";
import style from "./App.module.css";
import { VerificationContext } from "./components/verification/VerificationContext";
import Success from "./components/submit/Success";
import NavBar from "./components/Layout/NavBar/NavBar";
import Hero from "./components/Layout/Hero/Hero";
import About from "./components/Layout/About/About";
import CTA from "./components/Layout/CTA/CTA";
import FAQ from "./components/Layout/FAQ/FAQ";

function App() {
  const { isVerified } = useContext(VerificationContext);

  return (
    <div className={`${style.app} ${isVerified ? style.still : ""}`}>
      {isVerified && <Success />}
      <NavBar />
      <Hero />
      <About />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;
