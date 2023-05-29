import style from "./Sidebar.module.css";
import Form from "../form/Form";
import { useState } from "react";

const Sidebar = function () {
  const [data, setData] = useState([]);

  const formSubmitHandler = function (e) {
    e.preventDefault();
    fetch("api.zippopotam.us/us/90210")
      .then((response) => {
        console.log(response);
        return response.json;
      })
      .then((result) => {
        console.log(result);
        // setData(result.response);
      });
  };

  return (
    <div className={style.side}>
      <h1>Sidebar</h1>
      <Form onSubmit={formSubmitHandler} />
    </div>
  );
};

export default Sidebar;
