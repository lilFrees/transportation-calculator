import style from "./Pages.module.css";
import React, { useReducer, useRef, useState, useContext } from "react";
import FormStorage from "../components/FormStorage/FormStorage";
import AlignCenter from "../components/UI/AlignCenter/AlignCenter";
import emailjs from "emailjs-com";
import Button from "../components/UI/Button/Button";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Helmet } from "react-helmet";
import { VerificationContext } from "../components/verification/VerificationContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = function () {
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState();
  const formRef = useRef();
  const initialState = {
    full_name: "",
    email: "",
    message: "",
    full_nameFocus: false,
    emailFocus: false,
    messageFocus: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      case "FOCUS":
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const autoExpand = function (event) {
    const textarea = event.target;
    textarea.style.height = "auto";

    if (textarea.scrollHeight > textarea.clientHeight) {
      textarea.style.height = textarea.scrollHeight + "px";
    }
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

  const ctx = useContext(VerificationContext);

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};

    // Validate full_name
    if (state.full_name.trim() === "") {
      newErrors.full_name = "Full Name is required";
      isValid = false;
    }

    // Validate email
    if (state.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate message
    if (state.message.trim() === "" && state.message.trim().length < 50) {
      newErrors.message = "Message needs to be more than 50 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = function (event) {
    event.preventDefault();
    console.log(formRef.current);

    if (validateInputs()) {
      setLoading(true);

      emailjs
        .sendForm(
          "service_0t0ai29",
          "template_guii0nu",
          formRef.current,
          "xfCDVIdHUNpKsuuA2"
        )
        .then(
          () => {
            notifySuccess();
            setLoading(false);
            ctx.onVerification();
            window.location.href = "./success";
          },
          () => {
            notifyFail();
            setLoading(false);
          }
        );
    }
  };

  const focusHandler = function (event) {
    const { name } = event.target;
    dispatch({ type: "FOCUS", field: `${name}Focus`, value: true });
  };

  const blurHandler = function (event) {
    const { name } = event.target;
    dispatch({ type: "FOCUS", field: `${name}Focus`, value: false });
  };

  return (
    <div className={style.contact}>
      <Helmet>
        <meta
          name="description"
          content="Prime Auto Transport: Your trusted nationwide car shipping company. We specialize in safe and reliable vehicle transportation across the USA. Discover why we're the top choice for efficient car shipping services on our About Us page."
        />
        <meta
          name="keywords"
          content="Car shipping companies,
            Auto transport services,
            Vehicle shipping quotes,
            Nationwide car transporters,
            Reliable car shipping,
            Affordable auto transport,
            Cross-country vehicle shipping,
            Safe car transport,
            Expert car shipping,
            Prime Auto Transport reviews,
            Best car shipping company,
            Nationwide vehicle transport,
            Reliable auto transporters,
            Affordable car shipping,
            Cross-country car transport,
            Safe vehicle shipping,
            Prime Auto Transport testimonials,
            Top car shipping services,
            Nationwide auto transport,
            Reliable vehicle shipping
            "
        />
        <meta
          property="og:title"
          content="Contact Us | Prime Transport Contacts"
        />
        <meta
          property="og:description"
          content="Get instant quotes for car shipping services across the USA. Reliable and affordable vehicle transport services. Contact us now for a free quote."
        />

        <title>Contact Us | Prime Transport</title>
      </Helmet>
      <AlignCenter>
        <h1 className={style.heading}>Get in touch</h1>
        <h2 className={style["sub-heading"]}>
          Get in touch with us today and let's start a conversation!
        </h2>

        <div className={style.formBox}>
          <form method="POST" className={style.form} onSubmit={submitHandler}>
            <h3 className={style.title}>Drop a Message</h3>
            <label
              className={`${style.label} ${
                (state.full_name || state.full_nameFocus) && style.active
              }`}
              htmlFor="name"
            >
              <span>Full Name</span>

              <input
                className={style.input}
                type="text"
                id="name"
                name="full_name"
                onChange={handleChange}
                value={state.full_name}
                onFocus={focusHandler}
                onBlur={blurHandler}
              />
              {errors.full_name && (
                <div className={style.error}>{errors.full_name}</div>
              )}
            </label>
            <label
              className={`${style.label} ${
                (state.email || state.emailFocus) && style.active
              }`}
              htmlFor="email"
            >
              <span>E-mail</span>
              <input
                className={style.input}
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                onFocus={focusHandler}
                onBlur={blurHandler}
              />
              {errors.email && (
                <div className={style.error}>{errors.email}</div>
              )}
            </label>
            <label
              className={`${style.label} ${
                (state.message || state.messageFocus) && style.active
              }`}
              htmlFor="message"
            >
              <span>Message</span>

              <textarea
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={state.message}
                onInput={autoExpand}
                maxLength={1000}
                onFocus={focusHandler}
                onBlur={blurHandler}
              ></textarea>
              {errors.message && (
                <div className={style.error}>{errors.message}</div>
              )}
            </label>
            <Button>{loading ? "Sending..." : "Send"}</Button>
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
          <div className={style.info}>
            <div className={style.infoBox}>
              <BsGeoAlt />
              <span className={style.infoContent}>
                850 EUCLID AVE STE 819 CLEVELAND, OH 44114
              </span>
            </div>
            <div className={style.infoBox}>
              <BsTelephone />
              <span className={style.infoContent}>1-888-230-9116</span>
            </div>
            <div className={style.infoBox}>
              <MdOutlineAlternateEmail />
              <span className={style.infoContent}>
                primeautotransport.team@gmail.com
              </span>
            </div>
          </div>
        </div>
      </AlignCenter>

      <FormStorage
        ref={formRef}
        inputs={[
          { name: "full_name", value: state.full_name },
          { name: "email", value: state.email },
          { name: "message", value: state.message },
        ]}
      />
    </div>
  );
};

export default Contact;
