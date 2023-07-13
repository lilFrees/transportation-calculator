import style from "./Hero.module.css";
import Calculator from "../../Calculator/Calculator";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import Frame from "../../UI/Frame/Frame";
import Map from "../../map/Map";

const Hero = function () {
  return (
    <div className={style.hero}>
      <AlignCenter>
        <div className={style.container}>
          <Frame className={style.calculator}>
            <h1>Prime Autotransport</h1>
            <Calculator />
          </Frame>
          <Frame className={style.map} overflow={true}>
            <Map />
          </Frame>
        </div>
      </AlignCenter>
    </div>
  );
};

export default Hero;
