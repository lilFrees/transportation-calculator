import style from "./AlignCenter.module.css";

const AlignCenter = function (props) {
  return <div className={style["align-center"]}>{props.children}</div>;
};

export default AlignCenter;
