import style from "./Calculator.module.css";
import Form from "../Form/Form";

const Calculator = function (props) {
  return (
    <div className={style.calc}>
      <Form />
    </div>
  );
};

export default Calculator;
