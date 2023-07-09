import style from "./Calculator.module.css";
import Sidebar from "../sidebar/Sidebar";
import Map from "../map/Map";
import Frame from "../UI/Frame/Frame";

const Calculator = function (props) {
  return (
    <div className={style.calc}>
      <Sidebar className={style.sidebar} />
      <Frame className={style.map} overflow={true}>
        <Map />
      </Frame>
    </div>
  );
};

export default Calculator;
