import style from "./Hero.module.css";
import Calculator from "../../Calculator/Calculator";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import Frame from "../../UI/Frame/Frame";
import Map from "../../map/Map";

const Hero = function () {
  return (
    <article className={style.hero} id="hero">
      <AlignCenter>
        <div className={style.container}>
          <Frame className={style.calculator}>
            <h1 className={style.heading}>Car shipping across USA</h1>
            <h2 className={style.tagline}>
              <span>Free Online Calculator</span> based on quotes from Trusted
              Shipping Companies
            </h2>
            <Calculator />
          </Frame>
          <Frame className={style.map} overflow={true}>
            <Map />
          </Frame>
        </div>
      </AlignCenter>
    </article>
  );
};

export default Hero;
