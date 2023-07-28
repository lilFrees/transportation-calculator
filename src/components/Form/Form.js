import style from "./Form.module.css";
import Button from "../UI/Button/Button";
import { useReducer, useRef, useState, useContext, useEffect } from "react";
import Database from "../../resource/USCities.json";
import CapitalsOfStates from "../../resource/States.json";
import emailjs from "emailjs-com";
import { VerificationContext } from "../verification/VerificationContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ZipInput from "../ZipInput/ZipInput";
import FormStorage from "../FormStorage/FormStorage";
import { OptionsApiList } from "../OptionsApiList/OptionsApiList";

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
  input3Focused: false,
  input4Focused: false,
  fullName: "",
  phoneNumber: undefined,
  email: "",
  vehicleType: "",
  year: null,
  make: "",
  model: "",
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
    case "TOGGLE_INPUT3FOCUSED":
      return { ...state, input3Focused: action.payload };
    case "TOGGLE_INPUT4FOCUSED":
      return { ...state, input4Focused: action.payload };
    case "SET_FULL_NAME":
      return { ...state, fullName: action.payload };
    case "SET_PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_VEHICLE_TYPE":
      return { ...state, vehicleType: action.payload };
    case "SET_YEAR":
      return { ...state, year: action.payload };
    case "SET_BRAND":
      return { ...state, make: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };

    default:
      return state;
  }
};

const Form = () => {
  const formRef = useRef();
  const ctx = useContext(VerificationContext);

  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(0);
  const [mount, setMount] = useState(false);
  const [errors, setErrors] = useState({
    email: state.email ? true : false,
    fullName: state.fullName ? true : false,
    phoneNumber: state.phoneNumber ? true : false,
    vehicleType: state.vehicleType.length > 0 ? true : false,
    zipCode1: state.zipcode1 ? true : false,
    zipCode2: state.zipcode2 ? true : false,
    brand: state.make ? true : false,
    model: state.model ? true : false,
  });

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

  useEffect(() => {
    setMount(false);
  }, [step]);

  const submitHandler = function (e) {
    e.preventDefault();

    setMount(true);

    const submitFormHandler = function () {
      setLoading(true);

      emailjs
        .sendForm(
          "service_isz7fji",
          "template_ei768ps",
          formRef.current,
          "MtPs8eVT0a2ozx5EU"
        )
        .then(
          (result) => {
            notifySuccess();
            setLoading(false);
            ctx.onVerification();
            console.log(result);
            setStep(0);
            localStorage.clear();
          },
          (error) => {
            notifyFail();
            console.log(error);
            setLoading(false);
          }
        );
    };

    if (step < 3) {
      const nameRegex = /^[a-zA-Z ]+$/;

      const phoneRegex = /^\d{11,}$/;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      setErrors({
        ...errors,
        zipCode1: localStorage.getItem("place1") ? true : false,
        zipCode2: localStorage.getItem("place2") ? true : false,
        email: emailRegex.test(state.email) ? true : false,
        phoneNumber: phoneRegex.test(state.phoneNumber) ? true : false,
        fullName: nameRegex.test(state.fullName) ? true : false,
      });
      if (errors.zipCode1 && errors.zipCode2) {
        console.log("Step 1");
        setStep(1);
      }
      if (errors.year && errors.make && errors.model) {
        console.log("Step 2");
        setStep(2);
      }
      if (errors.fullName && errors.email && errors.phoneNumber) {
        console.log("Step 3");
        submitFormHandler();
      }
    }
  };

  const listOfZipCodes = Database;
  const listOfStates = CapitalsOfStates;

  const pickHandler1 = () => {
    setErrors({ ...errors, zipCode1: true });
  };

  const pickHandler2 = () => {
    setErrors({ ...errors, zipCode2: true });
  };

  const zipCodeChangeHandler1 = function (event) {
    const zipCode1 = event.target.value;
    dispatch({ type: "SET_ZIPCODE1", payload: zipCode1 });

    if (localStorage.getItem("place1")) {
      setErrors({
        ...errors,
        zipCode1: true,
      });
    }
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
    const zipCode2 = event.target.value;
    dispatch({ type: "SET_ZIPCODE2", payload: zipCode2 });

    if (localStorage.getItem("place2")) {
      setErrors({
        ...errors,
        zipCode2: true,
      });
    }
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

  const focus3Handler = function (bool) {
    dispatch({ type: "TOGGLE_INPUT3FOCUSED", payload: bool });
  };

  const focus4Handler = function (bool) {
    dispatch({ type: "TOGGLE_INPUT4FOCUSED", payload: bool });
  };

  const changeNameHandler = function (event) {
    const fullName = event.target.value;
    dispatch({ type: "SET_FULL_NAME", payload: fullName });

    const nameRegex = /^[a-zA-Z ] +$/;

    setErrors({
      ...errors,
      fullName: !nameRegex.test(state.fullName) ? true : false,
    });
  };

  const changePhoneHandler = function (event) {
    const phoneNumber = event.target.value;
    dispatch({ type: "SET_PHONE_NUMBER", payload: phoneNumber });

    const phoneRegex = /^\d{11,}$/;
    setErrors({
      ...errors,
      phoneNumber: !phoneRegex.test(state.phoneNumber) ? true : false,
    });
  };

  const changeMailHandler = function (event) {
    const email = event.target.value;
    dispatch({ type: "SET_EMAIL", payload: email });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setErrors({ ...errors, email: !emailRegex.test(email) ? false : true });
  };

  const changeYearHandler = function (event) {
    const year = event.target.value;
    dispatch({ type: "SET_YEAR", payload: event.target.value });

    setErrors({ ...errors, year: year.length === 4 });
  };

  const changeModelHandler = function (event) {
    const model = event.target.value;
    dispatch({ type: "SET_MODEL", payload: model });
  };

  const selectModelHandler = function (e) {
    dispatch({ type: "SET_MODEL", payload: e });
    console.log("Select model");
    setErrors({ ...errors, model: true });

    setTimeout(() => {
      focus3Handler();
    }, 1000);
  };

  const changeBrandHandler = function (event) {
    const make = event.target.value;
    setErrors({ ...errors, make: true });
    dispatch({ type: "SET_BRAND", payload: make });
  };

  const selectBrandHandler = function (e) {
    console.log("Select Brand");
    dispatch({ type: "SET_BRAND", payload: e });
    setErrors({ ...errors, make: true });
    focus3Handler();
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
    <>
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
              error={!errors.zipCode1 && mount}
              onPick={pickHandler1}
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
              onHide={chooseLocationHandler}
              listId={2}
              error={!errors.zipCode2 && mount}
              onPick={pickHandler2}
            />
          </>
        )}
        {step === 1 && (
          <>
            <label className={style.label} htmlFor="year">
              Year
              <input
                type="number"
                max={2023}
                id="year"
                className={`${style.input} ${
                  !errors.year && mount && style.error
                }`}
                autoComplete="off"
                onChange={changeYearHandler}
                value={state.year}
                name="year"
              />
              {!errors.year && mount && (
                <p className={style.errorMsg}>Invalid Year</p>
              )}
            </label>
            <label className={style.label} htmlFor="make">
              Make
              <input
                type="text"
                id="make"
                className={`${style.input} ${
                  !errors.make && mount && style.error
                }`}
                autoComplete="off"
                onChange={changeBrandHandler}
                onFocus={() => {
                  focus3Handler(true);
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    focus3Handler(false);
                  }, 100);
                }}
                value={state.make}
                name="make"
              />
              {state.input3Focused && (
                <div className={style.optionList}>
                  {
                    <OptionsApiList
                      type="make"
                      value={state.make}
                      onPick={selectBrandHandler}
                    />
                  }
                </div>
              )}
              {!errors.make && mount && (
                <p className={style.errorMsg}>Invalid Make</p>
              )}
            </label>
            <label className={style.label} htmlFor="model">
              Model
              <input
                type="text"
                id="model"
                className={`${style.input} ${
                  !errors.model && mount && style.error
                }`}
                autoComplete="off"
                onChange={changeModelHandler}
                onFocus={() => {
                  focus4Handler(true);
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    focus4Handler(false);
                  }, 100);
                }}
                value={state.model}
                name="model"
              />
              {state.input4Focused && (
                <div className={style.optionList}>
                  {
                    <OptionsApiList
                      type="model"
                      value={state.model}
                      onPick={selectModelHandler}
                      make={state.make}
                    />
                  }
                </div>
              )}
              {!errors.model && mount && (
                <p className={style.errorMsg}>Invalid Model</p>
              )}
            </label>
          </>
        )}
        {step === 2 && (
          <>
            <label htmlFor="full_name" className={style.label}>
              Full Name
              <input
                type="text"
                id="full_name"
                className={`${style.input} ${
                  !errors.fullName && mount && style.error
                }`}
                autoComplete="off"
                onChange={changeNameHandler}
                value={state.fullName}
                name="full_name"
              />
              {!errors.fullName && mount && (
                <p className={style.errorMsg}>Enter your full name</p>
              )}
            </label>
            <label htmlFor="phone_number" className={style.label}>
              Phone Number
              <input
                type="text"
                id="phone_number"
                className={`${style.input} ${
                  !errors.phoneNumber && mount && style.error
                }`}
                autoComplete="off"
                onChange={changePhoneHandler}
                value={state.phoneNumber}
                name="phone_number"
              />
              {!errors.phoneNumber && mount && (
                <p className={style.errorMsg}>Enter your phone</p>
              )}
            </label>
            <label htmlFor="email" className={style.label}>
              Email
              <input
                type="text"
                id="email"
                className={`${style.input} ${
                  !errors.email && mount && style.error
                }`}
                autoComplete="off"
                onChange={changeMailHandler}
                value={state.email}
                name="email"
              />
              {!errors.email && mount && (
                <p className={style.errorMsg}>Invalid Email</p>
              )}
            </label>
          </>
        )}

        <div className={style.actions}>
          <Button type="submit">
            {loading && "Loading..."}
            {!loading &&
              (step === 0
                ? "Get Shipping Estimate - Free"
                : step === 1
                ? "Continue to the Final Step"
                : "Submit")}
          </Button>
          {step !== 0 && (
            <Button
              type="button"
              onClick={() => {
                setStep(step - 1);
              }}
              className={style.back}
              color={"#555"}
              bgColor={"#bbb"}
            >
              Previous Step
            </Button>
          )}
        </div>
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
      <FormStorage
        inputs={[
          { name: "from_geo", value: state.zipcode1 },
          { name: "to_geo", value: state.zipcode2 },
          { name: "full_name", value: state.fullName },
          { name: "phone_number", value: state.phoneNumber },
          { name: "email", value: state.email },
          { name: "year", value: state.year },
          { name: "make", value: state.make },
          { name: "model", value: state.model },
        ]}
        A37A74
        ref={formRef}
      />
    </>
  );
};

export default Form;
