import style from "./Pages.module.css";
import React, { useReducer, useRef, useState } from "react";
import FormStorage from "../components/FormStorage/FormStorage";
import AlignCenter from "../components/UI/AlignCenter/AlignCenter";
import emailjs from "emailjs-com";
import Button from "../components/UI/Button/Button";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact = function () {
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

  const submitHandler = function (event) {
    event.preventDefault();
    console.log(formRef.current);

    emailjs.sendForm(
      "service_isz7fji",
      "template_ei768ps",
      formRef.current,
      "MtPs8eVT0a2ozx5EU"
    );
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
            </label>
            <Button>Send</Button>
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
              <span className={style.infoContent}>example@gmail.com</span>
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
