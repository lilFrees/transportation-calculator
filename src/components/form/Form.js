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
import OptionsApiList from "../OptionsApiList/OptionsApiList";

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
  year: undefined,
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
<<<<<<< HEAD
    case "SET_VEHICLE_TYPE":
      return { ...state, vehicleType: action.payload };
    case "SET_YEAR":
      return { ...state, year: action.payload };
    case "SET_BRAND":
      return { ...state, make: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };

=======
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "SET_VEHICLE_TYPE":
      return { ...state, vehicleType: action.payload };
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
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
<<<<<<< HEAD
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
=======

  const stepHandler = function () {
    step === 0 ? setStep(1) : setStep(0);
  };
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf

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

<<<<<<< HEAD
  useEffect(() => {
    setMount(false);
  }, [step]);
=======
  const validateInput = (state) => {
    const errors = {};

    // Validate zip codes
    const zipRegex = /^[0-9]{5}$/;
    if (!zipRegex.test(state.zipcode1)) {
      errors.zipcode1 = "Invalid Zip Code 1";
    }
    if (!zipRegex.test(state.zipcode2)) {
      errors.zipcode2 = "Invalid Zip Code 2";
    }

    // Validate full name
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(state.fullName)) {
      errors.fullName = "Invalid Full Name";
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/; // This is a simple regex for 10 digit number. Adjust it according to your needs.
    if (!phoneRegex.test(state.phoneNumber)) {
      errors.phoneNumber = "Invalid Phone Number";
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(state.email)) {
      errors.email = "Invalid Email";
    }

    return errors;
  };
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf

  const submitHandler = function (e) {
    e.preventDefault();

<<<<<<< HEAD
    setMount(true);

    const submitFormHandler = function () {
      setLoading(true);

      emailjs
        .sendForm(
          "service_uuj7r3b",
          "template_cbrlygj",
          formRef.current,
          "xfCDVIdHUNpKsuuA2"
        )
        .then(
          () => {
            notifySuccess();
            setLoading(false);
            ctx.onVerification();
            setStep(0);
            localStorage.clear();
          },
          () => {
            notifyFail();
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
        setStep(1);
      }
      if (errors.year && errors.make && errors.model) {
        setStep(2);
      }
      if (errors.fullName && errors.email && errors.phoneNumber) {
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
=======
    const errors = validateInput(state);

    console.log(state);

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
    } else {
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
    }
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
  };

  const listOfZipCodes = Database;
  const listOfStates = CapitalsOfStates;

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
    dispatch({ type: "SET_BRAND", payload: e })
      .then(() => {
        setErrors({ ...errors, make: true });
      })
      .then(() => {
        focus3Handler(false);
      });
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
<<<<<<< HEAD
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
=======
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
            <div className={style.label}>
              Type of vehicle:
              <SelectDrop
                onChange={(e) => {
                  setChosenCar(e);
                }}
              />
              {state.errors && state.errors.vehicleType && (
                <p>{state.errors.fullName}</p>
              )}
            </div>
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
          </>
        )}
        {step === 1 && (
          <>
<<<<<<< HEAD
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
                  }, 200);
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
=======
            <label htmlFor="first_name" className={style.label}>
              Full Name
              <input
                type="text"
                id="first_name"
                className={style.input}
                required
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
                autoComplete="off"
                onChange={changeNameHandler}
                value={state.fullName}
                name="full_name"
              />
<<<<<<< HEAD
              {!errors.fullName && mount && (
                <p className={style.errorMsg}>Enter your full name</p>
=======
              {state.errors && state.errors.fullName && (
                <p>{state.errors.fullName}</p>
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
              )}
            </label>
            <label htmlFor="phone_number" className={style.label}>
              Phone Number
              <input
                type="text"
                id="phone_number"
<<<<<<< HEAD
                className={`${style.input} ${
                  !errors.phoneNumber && mount && style.error
                }`}
=======
                className={style.input}
                required
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
                autoComplete="off"
                onChange={changePhoneHandler}
                value={state.phoneNumber}
                name="phone_number"
              />
<<<<<<< HEAD
              {!errors.phoneNumber && mount && (
                <p className={style.errorMsg}>Enter your phone</p>
              )}
=======
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
            </label>
            <label htmlFor="email" className={style.label}>
              Email
              <input
<<<<<<< HEAD
                type="text"
                id="email"
                className={`${style.input} ${
                  !errors.email && mount && style.error
                }`}
=======
                type="email"
                id="email"
                className={style.input}
                required
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
                autoComplete="off"
                onChange={changeMailHandler}
                value={state.email}
                name="email"
              />
<<<<<<< HEAD
              {!errors.email && mount && (
                <p className={style.errorMsg}>Invalid Email</p>
              )}
=======
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
            </label>
          </>
        )}

        <div className={style.actions}>
<<<<<<< HEAD
          <Button type="submit">
            {loading && "Loading..."}
            {!loading &&
              (step === 0
                ? "Get Your Shipping Quote Now"
                : step === 1
                ? "Continue to the Final Step"
                : "Submit")}
          </Button>
          {step !== 0 && (
            <Button
              type="button"
              onClick={() => {
                setStep(step - 1);
=======
          {step === 1 && (
            <Button
              type="button"
              onClick={() => {
                setStep(0);
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
              }}
              className={style.back}
              color={"#555"}
              bgColor={"#bbb"}
            >
              Previous Step
            </Button>
          )}
<<<<<<< HEAD
=======

          <Button type={step === 0 ? "submit" : "button"}>
            {loading && "Loading..."}
            {!loading &&
              (step === 0 ? "Get Shipping Estimate - Free" : "Submit")}
          </Button>
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
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
