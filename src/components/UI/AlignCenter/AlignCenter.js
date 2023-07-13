import style from "./AlignCenter.module.css";

const AlignCenter = function (props) {
  const classList = `${props.isFluid ? style.fluid : ""} ${
    style["align-center"]
  }`;
  return <div className={classList}>{props.children}</div>;
};

export default AlignCenter;
