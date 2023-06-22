import style from "./OptionsList.module.css";
import { motion } from "framer-motion";
import ZipItem from "./ZipItem/ZipItem";

const OptionsList = function (props) {
  let listArr = props.list.slice(0, 5);

  const filteredListArr = listArr.map((item) => {
    if (item.zip_code.toString().length < 5) {
      return { ...item, zip_code: `0${item.zip_code}` };
    } else {
      return { ...item };
    }
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
    >
      {optionListItems}
    </motion.div>
  );
};

export default OptionsList;
