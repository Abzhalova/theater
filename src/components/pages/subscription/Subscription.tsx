import "./Subscription.scss";
import Abonement1 from "../../../assets/images/abonement1.jpg";
import Abonement2 from "../../../assets/images/abonement2.jpg";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Subscription = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div id="subscription">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="subscription"
        >
          <center>
            <h1>Абонемент </h1>
          </center>
          <div className="subscription--img">
            <img src={Abonement1} alt="img" />
            <img src={Abonement2} alt="img" />
          </div>
          <center>
            <h3>
              Абонемент барагы Талас театрынын 2025-жылда коюла турган баардык
              спекталдерине жарайт
            </h3>
            <button>Сатып алуу</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
