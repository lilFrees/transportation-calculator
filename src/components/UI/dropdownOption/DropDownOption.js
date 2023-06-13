import { useRef } from "react";
import style from "./DropDownOption.module.css";

const DropDownOption = function (props) {
  const pickHandler = function () {
    props.onChoose(props.car);
  };

  const ref = useRef(null);

  return (
    <button className={style.option} onClick={pickHandler} ref={ref}>
      {props.car.name}
    </button>
  );
};

export default DropDownOption;
