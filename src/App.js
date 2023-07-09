import React, { useContext } from "react";
import style from "./App.module.css";
import { VerificationContext } from "./components/verification/VerificationContext";
import Success from "./components/submit/Success";
import Calculator from "./components/Calculator/Calculator";

function App() {
  const ctx = useContext(VerificationContext);

  console.log(ctx);

  return (
    <div className={style.app}>
      {ctx.isVerified && <Success />}
      <Calculator />
    </div>
  );
}

export default App;
