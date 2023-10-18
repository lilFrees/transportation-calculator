import style from "./Hero.module.css";
import Calculator from "../../Calculator/Calculator";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import Frame from "../../UI/Frame/Frame";
import Map from "../../map/Map";
import Video from "../../../icons/trucks.mp4";

const Hero = function () {
  return (
    <article className={style.hero} id="hero">
      <video className={style.videoBg} autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <AlignCenter>
        <div className={style.container}>
          <Frame className={style.calculator}>
            <h1 className={style.heading}>
              Nationwide Car Shipping Services You Can Trust
            </h1>
            <h2 className={style.tagline}>
              <span>Reliable, Secure, and Affordable</span> Vehicle Transport
              Solutions
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
