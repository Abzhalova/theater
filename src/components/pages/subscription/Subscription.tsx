import React from "react";
import "./Subscription.scss";
import Abonement1 from "../../../assets/images/abonement1.jpg";
import Abonement2 from "../../../assets/images/abonement2.jpg";

const Subscription = () => {
  return (
    <div id="subscription">
      <div className="container">
        <div className="subscription">
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
