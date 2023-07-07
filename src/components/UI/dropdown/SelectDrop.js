import style from "./SelectDrop.module.css";
import DropDownOption from "../dropdownOption/DropDownOption";
import { useState, forwardRef } from "react";
import { motion } from "framer-motion";

const SelectDrop = forwardRef((props, ref) => {
  const [chosenCar, setChosenCar] = useState("Type of vehicle");
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  const options = [
    {
      name: "Car",
      icon: "",
      id: 0,
    },
    {
      name: "Pickup",
      icon: "",
      id: 1,
    },
    {
      name: "Van",
      icon: "",
      id: 2,
    },
    {
      name: "Truck",
      icon: "",
      id: 3,
    },
    {
      name: "Trailer",
      icon: "",
      id: 4,
    },
    {
      name: "AVT",
      icon: "",
      id: 5,
    },
    {
      name: "Motorcycle",
      icon: "",
      id: 6,
    },
    {
      name: "Recreational Vehicle",
      icon: "",
      id: 7,
    },
    {
      name: "Golf Cart",
      icon: "",
      id: 8,
    },
    {
      name: "MiniCar",
      icon: "",
      id: 9,
    },
  ];

  const showOptionsHandler = function (event) {
    if (event.target.id === "toggle") {
      setOptionsAreShown(!optionsAreShown);
    } else {
      setOptionsAreShown(false);
    }
  };

  const chooseHandler = function (car) {
    setChosenCar(car.name);
    setOptionsAreShown(false);
    props.onChange(car.name);
  };

  return (
    <div className={style.dropdown} onClick={showOptionsHandler} ref={ref}>
      <div className={style.select} id="toggle">
        <button className={style.default} id="toggle" type="button">
          {chosenCar}
        </button>
      </div>
      <div className={style.frame}>
        {optionsAreShown && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className={style.optionlist}
          >
            {options.map((car) => {
              return (
                <DropDownOption
                  car={car}
                  onChoose={chooseHandler}
                  shown={optionsAreShown}
                  key={car.id}
                />
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
});

export default SelectDrop;
