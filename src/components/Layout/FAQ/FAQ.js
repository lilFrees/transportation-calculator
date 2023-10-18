<<<<<<< HEAD
import React from "react";
import FaqItem from "./FaqItem";
import style from "./FAQ.module.css";
import Questions from "./faq.json";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import { useState } from "react";

const FAQ = function () {
  const [active, setActive] = useState(null);

  const toggleAccordion = function (key) {
    setActive(key === active ? null : key);
  };
  return (
    <div className={style.faq} id="faq">
      <AlignCenter>
        <h2 className={style.heading}>Frequently Asked Questions</h2>
        {Questions.map((faq, i) => {
          return (
            <FaqItem
              question={faq.question}
              answer={faq.answer}
              key={faq.key}
              isActive={i === active}
              toggleAccordion={() => {
                toggleAccordion(faq.key);
              }}
            />
          );
        })}
      </AlignCenter>
    </div>
  );
};

export default FAQ;
=======
import React from "react";
import FaqItem from "./FaqItem";
import style from "./FAQ.module.css";
import Questions from "./faq.json";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import { useState } from "react";

const FAQ = function () {
  const [active, setActive] = useState(null);

  const toggleAccordion = function (key) {
    setActive(key === active ? null : key);
  };
  return (
    <div className={style.faq} id="faq">
      <AlignCenter>
        <h2 className={style.heading}>Frequently Asked Questions</h2>
        {Questions.map((faq, i) => {
          return (
            <FaqItem
              question={faq.question}
              answer={faq.answer}
              key={faq.key}
              isActive={i === active}
              toggleAccordion={() => {
                toggleAccordion(faq.key);
              }}
            />
          );
        })}
      </AlignCenter>
    </div>
  );
};

export default FAQ;
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
