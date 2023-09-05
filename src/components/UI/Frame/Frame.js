import style from "./Frame.module.css";

const Frame = function (props) {
  const classList = `${props?.className} ${style.frame} ${
    props.overflow ? style.overflow : ""
  }`;
  return <div className={classList}>{props.children}</div>;
};

export default Frame;
