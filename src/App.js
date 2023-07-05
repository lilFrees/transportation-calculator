import React, { useContext } from "react";
import style from "./App.module.css";
import Map from "./components/map/Map";
import Sidebar from "./components/sidebar/Sidebar";
import { VerificationContext } from "./components/verification/VerificationContext";
import Success from "./components/submit/Success";

function App() {
  const ctx = useContext(VerificationContext);

  console.log(ctx);

  return (
    <div className={style.app}>
      <>
        <Sidebar className={style.sidebar} />
        <div className={style.map}>
          <Map />
        </div>
      </>
    </div>
  );
}

export default App;
