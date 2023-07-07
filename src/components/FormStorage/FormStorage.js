import style from "./FormStorage.module.css";
import { forwardRef } from "react";

const FormStorage = forwardRef(function (props, ref) {
  const inputsList = props.inputs;
  return (
    <form ref={ref}>
      {inputsList.map((inp) => {
        return <input type="text" {...inp} className={style.hidden} readOnly />;
      })}
    </form>
  );
});

export default FormStorage;
