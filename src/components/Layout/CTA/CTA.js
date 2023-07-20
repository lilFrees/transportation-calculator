import style from "./CTA.module.css";
import tick from "../../../icons/approval.png";
import money from "../../../icons/zakat.png";
import stopwatch from "../../../icons/stopwatch.png";

const CTA = function () {
  return (
    <div className={style.cta}>
      <div className={style.container}>
        <div className={style.heading}>
          <h2>Book a shipper today</h2>
          <p>Get an instant quote, then book a shipper online</p>
        </div>
        <div className={style.content}>
          <div className={style.card}>
            <div className={style["icon-box"]}>
              <img src={tick} className={style.icon} alt="tick" />
            </div>
            <h4 className={style["card-title"]}>Vetted shippers only</h4>
          </div>
          <div className={style.card}>
            <div className={style["icon-box"]}>
              <img src={money} className={style.icon} alt="money" />
            </div>
            <h4 className={style["card-title"]}>Save up to 50%</h4>
          </div>
          <div className={style.card}>
            <div className={style["icon-box"]}>
              <img src={stopwatch} className={style.icon} alt="stopwatch" />
            </div>
            <h4 className={style["card-title"]}>Fast online booking</h4>
          </div>
        </div>
        <a href="#hero" className={style.button}>
          Get your instant FREE quote
        </a>
      </div>
    </div>
  );
};

export default CTA;
