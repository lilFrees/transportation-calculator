import style from "./SelectDrop.module.css";
import DropDownOption from "../dropdownOption/DropDownOption";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SelectDrop = (props) => {
  const [chosenCar, setChosenCar] = useState("Default");
  const [optionsAreShown, setOptionsAreShown] = useState(false);

  const ref = useRef(null);

  function handleToggle(e) {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.id !== "toggle"
    ) {
      setOptionsAreShown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleToggle);

    return () => {
      document.removeEventListener("click", handleToggle);
    };
  }, []);

  const options = [
    {
      name: "Mini Car",
      icon: "",
      id: 0,
    },
    {
      name: "Car",
      icon: "",
      id: 1,
    },
    {
      name: "SUV",
      icon: "",
      id: 2,
    },
    {
      name: "Pickup",
      icon: "",
      id: 3,
    },
    {
      name: "Van",
      icon: "",
      id: 4,
    },
    {
      name: "Truck",
      icon: "",
      id: 5,
    },
    {
      name: "Trailer",
      icon: "",
      id: 6,
    },
    {
      name: "AVT",
      icon: "",
      id: 7,
    },
    {
      name: "Motorcycle",
      icon: "",
      id: 8,
    },
    {
      name: "Recreational Vehicle",
      icon: "",
      id: 9,
    },
    {
      name: "Golf Cart",
      icon: "",
      id: 10,
    },
  ];

  const showOptionsHandler = function () {
    if (optionsAreShown) {
      setOptionsAreShown(false);
    } else {
      setOptionsAreShown(true);
    }
  };

  const chooseHandler = function (car) {
    setChosenCar(car.name);
    setOptionsAreShown(false);
    props.onChange(car.name);
  };

  return (
    <div className={style.dropdown} ref={ref}>
      <div className={style.select} id="toggle">
        <button
          className={style.default}
          id="toggle"
          type="button"
          onClick={showOptionsHandler}
        >
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
};

export default SelectDrop;
