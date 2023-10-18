<<<<<<< HEAD
import style from "./Frame.module.css";

const Frame = function (props) {
  const classList = `${props?.className} ${style.frame} ${
    props.overflow ? style.overflow : ""
  }`;
  return <div className={classList}>{props.children}</div>;
};

export default Frame;
=======
import style from "./Frame.module.css";

const Frame = function (props) {
  const classList = `${props?.className} ${style.frame} ${
    props.overflow ? style.overflow : ""
  }`;
  return <div className={classList}>{props.children}</div>;
};

export default Frame;
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
