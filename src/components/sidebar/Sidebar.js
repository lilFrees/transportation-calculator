import style from "./Sidebar.module.css";
import Form from "../form/Form";
import { useState } from "react";
import Frame from "../UI/Frame/Frame";

const Sidebar = function () {
  const formSubmitHandler = function (e) {};

  const [showCars, setShowCars] = useState(false);

  const showCarHandler = function () {
    setShowCars(!showCars);
  };

  return (
    <div className={style.side}>
      <Frame>
        <Form
          onSubmit={formSubmitHandler}
          show={showCars}
          onShow={showCarHandler}
        />
      </Frame>
      {/* <div className={style.success}>
        <span className={style.message}>Form sent successfully</span>
        <div className={style.timer}></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
