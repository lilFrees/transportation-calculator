import style from "./Hero.module.css";
import Calculator from "../../Calculator/Calculator";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";

const Hero = function () {
  return (
    <div className={style.hero}>
      <AlignCenter>
        <h1>Prime Autotransport</h1>
        <Calculator />
      </AlignCenter>
    </div>
  );
};

export default Hero;
