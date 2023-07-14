import styles from "./Button.module.css";

const Button = function (props) {
  return (
    <button
      type={props.type}
      className={styles.button}
      onClick={props.onClick}
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      {props.children}
    </button>
  );
};

export default Button;
