import style from "./Form.module.css";
import Button from "../UI/button/Button";
import SelectDrop from "../UI/dropdown/SelectDrop";
import { useReducer, useState } from "react";
import CityOptionsList from "../UI/zipcode/CityOptionsList";
import Database from "../../resource/USCities.json";

const defaultZip1 =
  localStorage.getItem("place1") && JSON.parse(localStorage.getItem("place1"));

const defaultZip2 =
  localStorage.getItem("place2") && JSON.parse(localStorage.getItem("place2"));

const initialState = {
  zipcode1: defaultZip1
    ? `${defaultZip1.zip}, ${defaultZip1.city}, ${defaultZip1.state}`
    : "",
  zipcode2: defaultZip2
    ? `${defaultZip2.zip}, ${defaultZip2.city}, ${defaultZip2.state}`
    : "",
  input1Focused: false,
  input2Focused: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ZIPCODE1":
      return { ...state, zipcode1: action.payload };
    case "SET_ZIPCODE2":
      return { ...state, zipcode2: action.payload };
    case "TOGGLE_INPUT1FOCUSED":
      return { ...state, input1Focused: !state.input1Focused };
    case "TOGGLE_INPUT2FOCUSED":
      return { ...state, input2Focused: !state.input2Focused };
    default:
      return state;
  }
};
const Form = (props) => {
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const listOfZipCodes = Database;

  const showOptionsHandler = () => {
    setOptionsAreShown(!optionsAreShown);
  };

  const submitHandler = function (e) {
    e.preventDefault();
  };

  const zipCodeChangeHandler1 = function (event) {
    dispatch({ type: "SET_ZIPCODE1", payload: event.target.value });
  };

  const filteredZipCodes1 = listOfZipCodes.filter((zip) => {
    if (state.zipcode1.trim().length === 0) {
      return null;
    }
    return zip.zip_code.toString().startsWith(state.zipcode1);
  });

  const zipCodeChangeHandler2 = function (event) {
    dispatch({ type: "SET_ZIPCODE2", payload: event.target.value });
  };

  const filteredZipCodes2 = listOfZipCodes.filter((zip) => {
    if (state.zipcode2.trim().length === 0) {
      return null;
    }
    return zip.zip_code.toString().startsWith(state.zipcode2);
  });

  const focus1Handler = function () {
    dispatch({ type: "TOGGLE_INPUT1FOCUSED" });
  };

  const focus2Handler = function () {
    dispatch({ type: "TOGGLE_INPUT2FOCUSED" });
  };

  const chooseLocationHandler = function (key) {
    if (key === 1) {
      const chosenCity1 = localStorage.getItem("place1")
        ? JSON.parse(localStorage.getItem("place1"))
        : "";
      dispatch({ type: "TOGGLE_INPUT1FOCUSED" });

      chosenCity1 &&
        dispatch({
          type: "SET_ZIPCODE1",
          payload: `${chosenCity1.zip}, ${chosenCity1.city}, ${chosenCity1.state}`,
        });
    } else if (key === 2) {
      const chosenCity2 = localStorage.getItem("place2")
        ? JSON.parse(localStorage.getItem("place2"))
        : "";
      dispatch({ type: "TOGGLE_INPUT2FOCUSED" });
      chosenCity2 &&
        dispatch({
          type: "SET_ZIPCODE2",
          payload: `${chosenCity2.zip}, ${chosenCity2.city}, ${chosenCity2.state}`,
        });
    }
  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <label htmlFor="zip1" className={style.label}>
        From (Zip Code)
        <input
          type="text"
          id="zip1"
          className={style.input}
          onFocus={focus1Handler}
          onChange={zipCodeChangeHandler1}
          value={state.zipcode1}
          autoComplete="off"
        />
        {state.input1Focused && (
          <CityOptionsList
            list={filteredZipCodes1}
            onHide={chooseLocationHandler}
            listId={1}
          />
        )}
      </label>
      <label htmlFor="zip2" className={style.label}>
        To (Zip Code)
        <input
          type="text"
          id="zip2"
          className={style.input}
          onFocus={focus2Handler}
          onChange={zipCodeChangeHandler2}
          value={state.zipcode2}
          autoComplete="off"
        />
        {state.input2Focused && (
          <CityOptionsList
            list={filteredZipCodes2}
            onHide={chooseLocationHandler}
            listId={2}
          />
        )}
      </label>

      <SelectDrop
        carsAreShown={optionsAreShown}
        showOptions={showOptionsHandler}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
