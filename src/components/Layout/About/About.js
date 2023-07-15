import style from "./About.module.css";
import AlignCenter from "../../UI/AlignCenter/AlignCenter";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillCar } from "react-icons/ai";
import { MdScreenShare } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const About = function () {
  const contentStyle = {
    background: "#444",
    color: "#fff",
    padding: "2rem",
  };
  return (
    <div className={style.about} id="how">
      <AlignCenter>
        <div className={style.heading}>
          <h2 className={style.title}>How it works</h2>
          <p className={style.tagline}>
            Connect with carriers for affordable and convenient shipping of any
            vehicle. We take care of loading, hauling, and delivery, making it
            easy for you
          </p>
        </div>
        <VerticalTimeline lineColor="#00adb5">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{ background: "#DC0073", color: "#fff" }}
            icon={<AiFillCar />}
          >
            <h3 className="vertical-timeline-element-title">Request Quotes</h3>
            <p className={style["el-tagline"]}>
              Set your pickup and destination locations and indicate what
              vehicle you need to ship.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{ background: "#00A1E4", color: "#fff" }}
            icon={<MdScreenShare />}
          >
            <h3 className="vertical-timeline-element-title">
              Get Instant Prices From Top Carriers
            </h3>
            <p className={style["el-tagline"]}>
              Our system will automatically show you nearest carriers and
              instantly show you price quotes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{ background: "#F5B700", color: "#fff" }}
            icon={<FaTruckMoving />}
          >
            <h3 className="vertical-timeline-element-title">Book Online</h3>
            <p className={style["el-tagline"]}>
              Book your shipment online. Driver will get in touch with you right
              away to schedule pickup and delivery timeframes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid  #444" }}
            iconStyle={{ background: "#04E762", color: "#fff" }}
            icon={<TiTick />}
          >
            <h3 className="vertical-timeline-element-title">
              Rate Your Carrier After Delivery
            </h3>
            <p className={style["el-tagline"]}>
              Tell us about your experience and help other customers make the
              right decision!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </AlignCenter>
    </div>
  );
};

export default About;
