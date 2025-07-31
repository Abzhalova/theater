import React from "react";
import "./Home.scss";
import theatre from "../../../assets/images/theatre.webp";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Abonement from "../abonement/Abonement";

const Home = () => {
  return (
    <>
      {" "}
      <div id="home">
        <div className="container">
          <div className="home">
            <div className="home--bg">
              <img src={theatre} alt="img" />
              <div className="home--bg__description">
                <p>Драма</p>
                <h1>Жамийла</h1>
                <p>15 Августтан баштап</p>
                <div className="home--bg__description--buttons">
                  <button>Спектакль</button>
                  <button>Сатып алуу</button>
                </div>
              </div>
              <div className="home--bg__repertoire">
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

export default Home;
