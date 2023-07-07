import style from "./ZipInput.module.css";
import CityOptionsList from "../UI/zipcode/CityOptionsList";

const ZipInput = ({
  label,
  id,
  name,
  value,
  onFocus,
  onChange,
  isFocused,
  filteredZipCodes,
  onHide,
  listId,
}) => (
  <label htmlFor={id} className={style.label}>
    {label}
    <input
      type="text"
      id={id}
      name={name}
      className={style.input}
      onFocus={onFocus}
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

export default ZipInput;
