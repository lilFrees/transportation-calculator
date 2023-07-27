import style from "./OptionsApiList.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CarData from "../../resource/Car_Model_List.json";

export const OptionsApiList = function (props) {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const filterList = CarData.results;

  const inputData = props.value;

  const chooseMakeHandler = function (event) {
    const make = event.target.value;
    setSelectedMake(make);
    props.onPick(make);
  };

  const chooseModelHandler = function (event) {
    const model = event.target.value;
    setSelectedModel(model);
    props.onPick(model);
  };

  let uniqueList = [];
  let uniqueValues = [];

  const matchingCars =
    props.type === "model"
      ? filterList
          .filter((car) => {
            return props.make ? car.Make === props?.make : car;
          })
          .filter((car) => {
            return car.Model.toLowerCase().startsWith(inputData.toLowerCase());
          })
      : filterList.filter((car) => {
          return car.Make.toLowerCase().startsWith(inputData.toLowerCase());
        });

  matchingCars.forEach((obj) => {
    const val = props.type === "model" ? obj.Model : obj.Make;
    if (!uniqueValues.includes(val)) {
      uniqueValues.push(val);
      uniqueList.push(obj);
    }
  });

  return (
    <motion.div
      className={style.list}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {
        matchingCars.length > 0 &&
        uniqueList.map((obj, index) => {
          return (
            <button
              className={style.option}
              key={index}
              type="button"
              onClick={
                props.type === "model" ? chooseModelHandler : chooseMakeHandler
              }
              value={props.type === "model" ? obj.Model : obj.Make}
            >
              {props.type === "model" ? obj.Model : obj.Make}
            </button>
          );
        })}
    </motion.div>
  );
};
