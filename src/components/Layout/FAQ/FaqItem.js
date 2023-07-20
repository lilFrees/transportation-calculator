import React, { useState, useRef, useEffect } from "react";
import style from "./FAQ.module.css";
import { FiChevronRight } from "react-icons/fi";

const FaqItem = function ({ question, answer, isActive, toggleAccordion }) {
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  useEffect(() => {
    setToggle(isActive);
  }, [isActive]);

  const [toggle, setToggle] = useState(isActive);

  return (
    <div className={style.accordion}>
      <button onClick={toggleAccordion} className={style.question}>
        <div className={style.visible}>{question}</div>
        <FiChevronRight className={toggle && style.active} />
      </button>
      <div
        ref={refHeight}
        className={!toggle ? style.toggle : `${style.toggle} ${style.animated}`}
        style={{
          height: toggle ? `${heightEl}` : "0px",
          minHeight: toggle ? `max-content` : "0px",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
