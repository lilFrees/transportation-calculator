import style from "./OptionsList.module.css";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import ZipItem from "./ZipItem/ZipItem";

const OptionsList = forwardRef(function (props, ref) {
  let listArr = props.list.slice(0, 20);

  const filteredListArr = listArr.map((item) => {
    const filteredZipCode = String(item.zip_code).padStart(5, "0");
    return { ...item, zip_code: filteredZipCode };
  });

  const cityStateHandler = function (item) {
    const updateLocalStorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
      const event = new CustomEvent("customStorageChange", { detail: { key } });
      window.dispatchEvent(event);
    };

    updateLocalStorage(`place${props.listId}`, item);
    props.onHide(props.listId);
  };

  const optionListItems = filteredListArr.map((li) => {
    return (
      <ZipItem
        className={style["list-element"]}
        onClick={cityStateHandler}
        item={li}
        key={li.zip_code}
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
