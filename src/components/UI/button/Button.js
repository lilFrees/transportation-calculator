import styles from "./Button.module.css";

const Button = function (props) {
  return (
    <button
      type={props.type}
<<<<<<< HEAD
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
      }}
=======
      className={styles.button}
      onClick={props.onClick}
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
    >
      {props.children}
    </button>
  );
};

export default Button;
