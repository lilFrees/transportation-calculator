import style from "./ZipItem.module.css";
import { useState, useEffect } from "react";

const ZipItem = function (props) {
  const [optionValue, setOptionValue] = useState("123");

  const zipCode = props.item?.zip_code ?? "";
  const city = props.item.city;
  const state = props.item.state;

  useEffect(() => {
    zipCode
      ? setOptionValue(`${zipCode}, ${city}, ${state}`)
      : setOptionValue(`${city}, ${state}`);
  }, [zipCode, city, state]);

  const zipCodeSetHandler = function () {
    if (zipCode?.trim().length !== 0) {
      const locationObj = {
        zip: zipCode,
        city: city,
        state: state,
      };
      props.onClick(locationObj);
    } else {
      const locationObj = {
        city: city,
        state: state,
      };
      props.onClick(locationObj);
    }
  };

  return (
    <button className={style["list-element"]} onClick={zipCodeSetHandler}>
      {optionValue}
    </button>
  );
};

export default ZipItem;
