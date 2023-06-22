import style from "./SelectDrop.module.css";
import DropDownOption from "../dropdownOption/DropDownOption";
import { useState, forwardRef } from "react";
import { motion } from "framer-motion";

const SelectDrop = forwardRef((props, ref) => {
  const [chosenCar, setChosenCar] = useState("Type of vehicle");
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  const options = [
    {
      name: "Small Car",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAB9JREFUOE9jZKAQMFKon2HUAIbRMGAYDQNQPhr4vAAAJpgAEX/anFwAAAAASUVORK5CYII=",
      id: 0,
    },
    {
      name: "Midsize Car",
      icon: "",
      id: 1,
    },
    {
      name: "Large Car",
      icon: "",
      id: 2,
    },
    {
      name: "Sports Car",
      icon: "",
      id: 3,
    },
    {
      name: "Small SUV",
      icon: "",
      id: 4,
    },
    {
      name: "Midsize SUV",
      icon: "",
      id: 5,
    },
    {
      name: "Large SUV",
      icon: "",
      id: 6,
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
  };

  return (
    <div className={style.dropdown} onClick={showOptionsHandler} ref={ref}>
      <div className={style.select} id="toggle">
        <button className={style.default} id="toggle">
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
