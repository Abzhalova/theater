import React from "react";
import "./AfishaPages.scss";

import Abonement from "../abonement/Abonement";

const AfishaPages = () => {
  return (
    <section id="poster">
      <div className="container">
        <div className="poster">
          <center>
            <h1>Афиша</h1>
            
          </center>
        </div>
        <Abonement />
      </div>
    </section>
  );
};

export default AfishaPages;
