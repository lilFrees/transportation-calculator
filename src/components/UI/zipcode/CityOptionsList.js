import style from "./OptionsList.module.css";
import { motion } from "framer-motion";
import ZipItem from "./ZipItem/ZipItem";

const OptionsList = function (props) {
  let listArr = props.list.slice(0, 5);

  const cityStateHandler = function (item) {
    if (props.listId === 1) {
      localStorage.setItem(`place1`, JSON.stringify(item));
    } else if (props.listId === 2) {
      localStorage.setItem(`place2`, JSON.stringify(item));
      console.log(item);
    }
    props.onHide(props.listId);
  };

  const optionListItems = listArr.map((li) => {
    return (
      <ZipItem
        className={style["list-element"]}
        onClick={cityStateHandler}
        item={li}
        key={li.zip_code}
      />
    );
  });

  if (listArr.length === 0) {
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
