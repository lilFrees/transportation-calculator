import React, { useContext } from "react";
import style from "./App.module.css";
import { VerificationContext } from "./components/verification/VerificationContext";
import Success from "./components/submit/Success";
import NavBar from "./components/Layout/NavBar/NavBar";
import Hero from "./components/Layout/Hero/Hero";
import About from "./components/Layout/About/About";

function App() {
  const { isVerified } = useContext(VerificationContext);

  return (
    <div className={style.app}>
      {isVerified && <Success />}
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
