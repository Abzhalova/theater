import React from "react";
import "./Welcome.scss";
import theatreImg from "../../../assets/images/theatre.webp";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Abonement from "../subscription/Subscription";

const Welcome = () => {
  return (
    <>
      {" "}
      <div id="welcome">
        <div className="container">
          <div className="welcome">
            <div className="welcome--bg">
              <img src={theatreImg} alt="img" />
              <div className="welcome--bg__description">
                <p>Драма</p>
                <h1>Жамийла</h1>
                <p>15 Августтан баштап</p>
                <div className="welcome--bg__description--buttons">
                  <button>Спектакль</button>
                  <button>Сатып алуу</button>
                </div>
              </div>
              <div className="welcome--bg__repertoire">
                <p>15 Август</p>
                <p>
                  <span>Жамийла</span>
                </p>
                <p> 19:00 | Драма</p>
                <p>
                  <MdOutlineRemoveRedEye />
                  Аткаруучулар
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Abonement />
    </>
  );
};

export default Welcome;
