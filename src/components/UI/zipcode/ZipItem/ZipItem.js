import style from "./ZipItem.module.css";

const ZipItem = function (props) {
  const zipCode = props.item.zip_code;
  const city = props.item.city;
  const state = props.item.state;

  const zipCodeSetHandler = function () {
    const locationObj = {
      zip: zipCode,
      city: city,
      state: state,
    };
    props.onClick(locationObj);
  };

  return (
    <button className={style["list-element"]} onClick={zipCodeSetHandler}>
      {props.item.zip_code}, {props.item.city}, {props.item.state}
    </button>
  );
};

export default ZipItem;
