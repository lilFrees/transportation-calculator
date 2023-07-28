import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import style from "./Footer.module.css";

const Footer = function () {
  return (
    <div className={style.footer}>
      <AlignCenter>
        <div className={style.container}>
          <div className={style.copyright}>&copy; Prime Auto Transport</div>
        </div>
      </AlignCenter>
    </div>
  );
};

export default Footer;
