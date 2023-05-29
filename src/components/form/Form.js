import style from "./Form.module.css";
import Button from "../UI/button/Button";

const Form = function (props) {
  const formSubmitHandler = function (e) {
    e.preventDefault();
  };

  const clearHandler = function () {};

  return (
    <form onSubmit={props.onSubmit} className={style.form}>
      <label htmlFor="zip1" className={style.label}>
        From (Zip Code)
        <input type="text" id="zip1" className={style.input} />
      </label>
      <label htmlFor="zip2" className={style.label}>
        To (Zip Code)
        <input type="text" id="zip2" className={style.input} />
      </label>
      <label htmlFor="date" className={style.label}>
        When do you want to ship?
        <input type="text" id="date" className={style.input} />
      </label>

      <label htmlFor="select" className={style.label}>
        What type of vehicle?
        <select name="type" className={style.input}>
          <option value="v1">Small Car</option>
          <option value="v2">Midsize Car</option>
          <option value="v3">Large Car</option>
          <option value="v4">Sports Car</option>
          <option value="v5">Small SUV</option>
          <option value="v5">Midsize SUV</option>
          <option value="v5">Large SUV</option>
        </select>
      </label>
      <Button type="submit" onClick={clearHandler}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
