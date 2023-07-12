import style from "./Form.module.css";
import Button from "../UI/button/Button";
import SelectDrop from "../UI/dropdown/SelectDrop";
import { useReducer, useRef, useState, useContext } from "react";
import Database from "../../resource/USCities.json";
import CapitalsOfStates from "../../resource/States.json";
import emailjs from "emailjs-com";
import { VerificationContext } from "../verification/VerificationContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ZipInput from "../ZipInput/ZipInput";
import FormStorage from "../FormStorage/FormStorage";

const defaultZip1 =
  localStorage.getItem("place1") && JSON.parse(localStorage.getItem("place1"));

const defaultZip2 =
  localStorage.getItem("place2") && JSON.parse(localStorage.getItem("place2"));

const initialState = {
  zipcode1: !defaultZip1
    ? ""
    : defaultZip1.zip
    ? `${defaultZip1.zip}, ${defaultZip1.city}, ${defaultZip1.state}`
    : `${defaultZip1.city}, ${defaultZip1.state}`,

  zipcode2: !defaultZip2
    ? ""
    : defaultZip2.zip
    ? `${defaultZip2.zip}, ${defaultZip2.city}, ${defaultZip2.state}`
    : `${defaultZip2.city}, ${defaultZip2.state}`,
  input1Focused: false,
  input2Focused: false,
  fullName: "",
  phoneNumber: undefined,
  email: "",
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
    case "SET_FIRST_NAME":
      return { ...state, fullName: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const Form = () => {
  const formRef = useRef();
  const ctx = useContext(VerificationContext);

  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [chosenCar, setChosenCar] = useState("");
  const [step, setStep] = useState(0);

  const stepHandler = function () {
    step === 0 ? setStep(1) : setStep(0);
  };

  const notifySuccess = function () {
    toast.success("Form sent successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyFail = function () {
    toast.error("Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const submitHandler = function (e) {
    e.preventDefault();

    setLoading(true);

    console.log(formRef.current);

    emailjs
      .sendForm(
        "service_isz7fji",
        "template_ei768ps",
        formRef.current,
        "MtPs8eVT0a2ozx5EU"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess();
          setLoading(false);
          ctx.onVerification();
        },
        (error) => {
          console.log(error.text);
          notifyFail();
        }
      );
  };

  const listOfZipCodes = Database;
  const listOfStates = CapitalsOfStates;

  const zipCodeChangeHandler1 = function (event) {
    dispatch({ type: "SET_ZIPCODE1", payload: event.target.value });
  };

  let filteredZipCodes1 =
    state.zipcode1.trim().length === 0
      ? []
      : isNaN(state.zipcode1)
      ? listOfStates.filter((city) =>
          city.city.toLowerCase().startsWith(state.zipcode1.toLowerCase())
        )
      : listOfZipCodes.filter((zip) =>
          zip.zip_code.toString().startsWith(state.zipcode1)
        );

  const zipCodeChangeHandler2 = function (event) {
    dispatch({ type: "SET_ZIPCODE2", payload: event.target.value });
  };

  let filteredZipCodes2 =
    state.zipcode2.trim().length === 0
      ? []
      : isNaN(state.zipcode2)
      ? listOfStates.filter((city) =>
          city.city.toLowerCase().startsWith(state.zipcode2.toLowerCase())
        )
      : listOfZipCodes.filter((zip) =>
          zip.zip_code.toString().startsWith(state.zipcode2)
        );

  const focus1Handler = function () {
    dispatch({ type: "TOGGLE_INPUT1FOCUSED" });
  };

  const focus2Handler = function () {
    dispatch({ type: "TOGGLE_INPUT2FOCUSED" });
  };

  const changeNameHandler = function (event) {
    dispatch({ type: "SET_FIRST_NAME", payload: event.target.value });
  };

  const changePhoneHandler = function (event) {
    dispatch({ type: "SET_PHONE_NUMBER", payload: event.target.value });
  };

  const changeMailHandler = function (event) {
    dispatch({ type: "SET_EMAIL", payload: event.target.value });
  };

  const chooseLocationHandler = function (key) {
    if (key === 1) {
      const chosenCity1 = localStorage.getItem("place1")
        ? JSON.parse(localStorage.getItem("place1"))
        : "";
      dispatch({ type: "TOGGLE_INPUT1FOCUSED" });

      if (chosenCity1 && chosenCity1.zip) {
        dispatch({
          type: "SET_ZIPCODE1",
          payload: `${chosenCity1.zip}, ${chosenCity1.city}, ${chosenCity1.state}`,
        });
      } else {
        dispatch({
          type: "SET_ZIPCODE1",
          payload: `${chosenCity1.city}, ${chosenCity1.state}`,
        });
      }
    } else if (key === 2) {
      const chosenCity2 = localStorage.getItem("place2")
        ? JSON.parse(localStorage.getItem("place2"))
        : "";
      dispatch({ type: "TOGGLE_INPUT2FOCUSED" });
      if (chosenCity2 && chosenCity2.zip) {
        dispatch({
          type: "SET_ZIPCODE2",
          payload: `${chosenCity2.zip}, ${chosenCity2.city}, ${chosenCity2.state}`,
        });
      } else {
        dispatch({
          type: "SET_ZIPCODE2",
          payload: `${chosenCity2.city}, ${chosenCity2.state}`,
        });
      }
    }
  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      {step === 0 && (
        <>
          <ZipInput
            label="From (Zip Code):"
            id="zip1"
            name="from_geo"
            value={state.zipcode1}
            onFocus={focus1Handler}
            onBlur={focus1Handler}
            onChange={zipCodeChangeHandler1}
            isFocused={state.input1Focused}
            filteredZipCodes={filteredZipCodes1}
            onHide={chooseLocationHandler}
            listId={1}
          />

          <ZipInput
            label="To (Zip Code):"
            id="zip2"
            name="to_geo"
            value={state.zipcode2}
            onFocus={focus2Handler}
            onBlur={focus2Handler}
            onChange={zipCodeChangeHandler2}
            isFocused={state.input2Focused}
            filteredZipCodes={filteredZipCodes2}
            c
            onHide={chooseLocationHandler}
            listId={2}
          />

          <input
            type="text"
            id="car"
            className={style.hidden}
            value={chosenCar}
            name="vehicle_type"
            readOnly
          />
          <label className={style.label}>Type of vehicle:</label>

          <SelectDrop
            onChange={(e) => {
              setChosenCar(e);
            }}
          />
        </>
      )}
      {step === 1 && (
        <>
          <button
            type="button"
            onClick={() => {
              setStep(0);
            }}
            className={style.back}
          >
            Back
          </button>
          <label htmlFor="first_name" className={style.label}>
            Full Name
            <input
              type="text"
              id="first_name"
              className={style.input}
              required
              autoComplete="off"
              onChange={changeNameHandler}
              value={state.fullName}
              name="full_name"
            />
          </label>
          <label htmlFor="phone_number" className={style.label}>
            Phone Number
            <input
              type="text"
              id="phone_number"
              className={style.input}
              required
              autoComplete="off"
              onChange={changePhoneHandler}
              value={state.phoneNumber}
              name="phone_number"
            />
          </label>
          <label htmlFor="email" className={style.label}>
            Email
            <input
              type="email"
              id="email"
              className={style.input}
              required
              autoComplete="off"
              onChange={changeMailHandler}
              value={state.email}
              name="email"
            />
          </label>
        </>
      )}
      <FormStorage
        inputs={[
          { name: "from_geo", value: state.zipcode1 },
          { name: "to_geo", value: state.zipcode2 },
          { name: "vehicle_type", value: chosenCar },
          { name: "full_name", value: state.fullName },
          { name: "phone_number", value: state.phoneNumber },
          { name: "email", value: state.email },
        ]}
        ref={formRef}
      />

      <Button type={step === 0 ? "submit" : "button"} onClick={stepHandler}>
        {loading && "Loading..."}
        {!loading && (step === 0 ? "Next Step" : "Submit")}
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
};

export default Form;
