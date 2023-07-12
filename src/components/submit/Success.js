import Button from "../UI/button/Button";
import style from "./Success.module.css";
import { VerificationContext } from "../verification/VerificationContext";
import { useContext } from "react";

const Success = function () {
  const ctx = useContext(VerificationContext);
  const clickHandler = function () {
    ctx.onGoBack();
    localStorage.clear();
  };
  return (
    <div className={style.success}>
      <h3 className={style.heading}>Form sent successfully!</h3>
      <Button onClick={clickHandler}>Go back</Button>
    </div>
  );
};

export default Success;
