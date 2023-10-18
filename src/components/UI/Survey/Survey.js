import "./Survey.css";
import Calculator from "../../Calculator/Calculator";
import AlignCenter from "../AlignCenter/AlignCenter";
import Map from "../../map/Map";

function Survey() {
  return (
    <AlignCenter>
      <div className="container">
        <div className="calculator">
          <Calculator />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </AlignCenter>
  );
}

export default Survey;
