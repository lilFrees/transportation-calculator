import style from "./ZipInput.module.css";
import OptionsList from "../UI/zipcode/OptionsList";

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
  error,
  onPick,
}) {
  console.log(isFocused);
  return (
    <label htmlFor={id} className={style.label}>
      {label}
      <input
        type="text"
        id={id}
        name={name}
        className={`${style.input} ${error && style.error}`}
        onFocus={onFocus}
        onBlur={() => {
          setTimeout(() => {
            onBlur();
          }, 200);
        }}
        onChange={onChange}
        value={value}
        autoComplete="off"
      />
      {error && <p>Invalid Zip Code</p>}
      {isFocused && (
        <OptionsList
          list={filteredZipCodes}
          onHide={onHide}
          listId={listId}
          onPick={onPick}
        />
      )}
    </label>
  );
};

export default ZipInput;
