import style from "./ZipInput.module.css";
import CityOptionsList from "../UI/zipcode/CityOptionsList";

const ZipInput = function ({
  label,
  id,
  name,
  value,
  onFocus,
  onBlur,
  onChange,
  isFocused,
  filteredZipCodes,
  onHide,
  listId,
}) {
  return (
    <label htmlFor={id} className={style.label}>
      {label}
      <input
        type="text"
        id={id}
        name={name}
        className={style.input}
        onFocus={onFocus}
        onBlur={() => {
          setTimeout(() => {
            onBlur();
          }, 100);
        }}
        onChange={onChange}
        value={value}
        autoComplete="off"
      />
      {isFocused && (
        <CityOptionsList
          list={filteredZipCodes}
          onHide={onHide}
          listId={listId}
        />
      )}
    </label>
  );
};

// ({
//
// }) => (
//
// );

export default ZipInput;
