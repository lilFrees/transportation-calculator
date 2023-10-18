<<<<<<< HEAD
<<<<<<<< HEAD:src/components/UI/zipcode/OptionsList.js
import style from "./OptionsList.module.css";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ZipItem from "./ZipItem/ZipItem";

const OptionsList = forwardRef(function (props, ref) {
  let listArr = props.list.slice(0, 20);

  const filteredListArr = listArr.map((item) => {
    const filteredZipCode = String(item.zip_code)?.padStart(5, "0");
    if (filteredZipCode === "undefined") {
      return item;
    } else {
      return { ...item, zip_code: filteredZipCode };
    }
  });

  const cityStateHandler = function (item) {
    const updateLocalStorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
      const event = new CustomEvent("customStorageChange", {
        detail: { key },
      });
      window.dispatchEvent(event);
    };

    updateLocalStorage(`place${props.listId}`, item);
    props.onHide(props.listId);
    props.onPick();
  };

  const optionListItems = filteredListArr.map((li, index) => {
    return (
      <ZipItem
        className={style["list-element"]}
        onClick={cityStateHandler}
        item={li}
        key={index}
      />
    );
  });

  if (filteredListArr.length === 0) {
    return;
  }

  return (
    <motion.div
      className={style.list}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      ref={ref}
    >
      {optionListItems}
    </motion.div>
  );
});

export default OptionsList;
========
=======
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
import style from "./OptionsList.module.css";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ZipItem from "./ZipItem/ZipItem";

const OptionsList = forwardRef(function (props, ref) {
  let listArr = props.list.slice(0, 20);

  const filteredListArr = listArr.map((item) => {
    const filteredZipCode = String(item.zip_code)?.padStart(5, "0");
    if (filteredZipCode === "undefined") {
      return item;
    } else {
      return { ...item, zip_code: filteredZipCode };
    }
  });

  const cityStateHandler = function (item) {
    const updateLocalStorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
<<<<<<< HEAD
      const event = new CustomEvent("customStorageChange", { detail: { key } });
=======
      const event = new CustomEvent("customStorageChange", {
        detail: { key },
      });
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
      window.dispatchEvent(event);
    };

    updateLocalStorage(`place${props.listId}`, item);
    props.onHide(props.listId);
<<<<<<< HEAD
  };

  const optionListItems = filteredListArr.map((li) => {
=======
    props.onPick();
  };

  const optionListItems = filteredListArr.map((li, index) => {
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
    return (
      <ZipItem
        className={style["list-element"]}
        onClick={cityStateHandler}
        item={li}
<<<<<<< HEAD
        key={Math.random()}
=======
        key={index}
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
      />
    );
  });

  if (filteredListArr.length === 0) {
    return;
  }

  return (
    <motion.div
      className={style.list}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      ref={ref}
    >
      {optionListItems}
    </motion.div>
  );
});

export default OptionsList;
<<<<<<< HEAD
>>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf:src/components/UI/zipcode/CityOptionsList.js
=======
>>>>>>> d136389c6c90047bdf2fb7b70ea495457b726cbf
