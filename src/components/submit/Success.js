import Button from "../UI/Button/Button";
import style from "./Success.module.css";
import { VerificationContext } from "../verification/VerificationContext";
import { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../../resource/success-animation.json";

const Success = function () {
  const ctx = useContext(VerificationContext);
  const clickHandler = function () {
    ctx.onGoBack();
    localStorage.clear();
  };

  return (
    <div className={style.success}>
      <div className={style.animation}>
        <Lottie animationData={animationData} loop={false} />
      </div>
      <h3 className={style.heading}>Form sent successfully!</h3>
      <Button onClick={clickHandler} size={1.6}>
        Go back
      </Button>
    </div>
  );
};

export default Success;
