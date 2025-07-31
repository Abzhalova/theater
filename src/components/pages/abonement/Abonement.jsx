import React from "react";
import "./Abonement.scss";
import Abonement1 from "../../../assets/images/abonement1.jpg";
import Abonement2 from "../../../assets/images/abonement2.jpg";

const Abonement = () => {
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
            <hr style={{ marginTop: "20px" }} />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Abonement;
