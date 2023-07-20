import React, { useContext } from "react";
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
    <div className={style.app}>
      {isVerified && <Success />}
      <NavBar />
      <Hero />
      <About />
      <CTA />
      <FAQ />
    </div>
  );
}

export default App;
