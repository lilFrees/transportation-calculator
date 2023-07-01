import React, { useContext } from "react";
import style from "./App.module.css";
import Map from "./components/map/Map";
import Sidebar from "./components/sidebar/Sidebar";
import EmailVerification from "./components/verification/EmailVerification";

function App() {
  const ctx = useContext(EmailVerification);

  console.log(ctx);

  return (
    <div className={style.app}>
      <Sidebar className={style.sidebar} />
      <div className={style.map}>
        <Map />
      </div>
    </div>
  );
}

export default App;
