import React from "react";
import style from "./App.module.css";
import Map from "./components/map/Map";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
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
