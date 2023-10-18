<<<<<<< HEAD
import style from "./AlignCenter.module.css";

const AlignCenter = function (props) {
  const classList = `${props.isFluid ? style.fluid : ""} ${
    style["align-center"]
  } ${props.className}`;
  return <div className={classList}>{props.children}</div>;
};

export default AlignCenter;
=======
import style from "./AlignCenter.module.css";

const AlignCenter = function (props) {
  const classList = `${props.isFluid ? style.fluid : ""} ${
    style["align-center"]
  } ${props.className}`;
  return <div className={classList}>{props.children}</div>;
};

export default AlignCenter;
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
