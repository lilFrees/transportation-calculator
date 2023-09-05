import style from "./Logo.module.css";
import heading from "../../../icons/truck-heading.png";

const Logo = function () {
  return (
    <div className={style.logo}>
      <img alt="Company logo" src={heading} />
    </div>
  );
};

export default Logo;
