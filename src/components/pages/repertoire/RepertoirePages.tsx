import React from "react";
import "./RepertoirePages.scss";
import { RxGithubLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { useNavigate } from "react-router-dom";
const RepertoirePages = () => {
  const navigate = useNavigate();
  return (
    <section id="repertoire">
      <div className="container">
        <div className="repertoire">
          <div className="repertoire--list1">
            <div className="repertoire--list1--blockLogo">
              <RxGithubLogo style={{ fontSize: "100px" }} />
              <h2>
                <span> 2025</span>
                <br /> жылдын <br />
                Август айынын <br />
                репертуары
              </h2>
            </div>
            <div className="repertoire--list1--adminPart">
              {" "}
              <p>
                <span> Театрдын директору</span>
                <span>Маданияттын мыкты кызматкери тош белгисинин ээси</span>
              </p>
              <h4>Алмазбек Бекботоев Байызбекович</h4>
              <p>
                <span> Театрдын корком жетекчиси</span>
                <span>Маданияттын мыкты кызматкери тош белгисинин ээси</span>
              </p>
              <h4>Тумар Олжобаев Байызбекович</h4>
              <p>Администратор</p>
              <h4>Нурлан Эржанов Аманович</h4>
              <p>Биздин дарек</p>
              <h4>Ч.Айтматов 351</h4>
              <p>Байланыш телефон</p>
              <h4>+996 (503) 096-909</h4>
            </div>
            <div className="repertoire--list1--logoAddress">
              <a href="#">
                <FaFacebookF />
                Талас Драм Театры
              </a>
              <a href="#">
                <GrInstagram />
                talas_teatr
              </a>
              <a href="#">
                <ImWhatsapp />
                +996 (503) 096-909
              </a>
            </div>
          </div>
          <div className="repertoire--list2">
            <h3>
              Капар Медетбеков атындагы Талас облустук музыкалык драма театры
            </h3>
            <div
              onClick={() => navigate("/")}
              className="repertoire--list2__block"
            >
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>
                    <span>
                      8
                    </span>{" "}
                    -{" "}
                    <span>
                      Август
                    </span>{" "}
                  </p>
                  <p>
                    <span>
                      18:00
                    </span>
                  </p>
                  <p>
                    БИЛЕТ БААСЫ:{" "}
                    <span>
                      200
                    </span>{" "}
                    сом{" "}
                  </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{fontWeight:"600"}}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                  className="age"
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
            <div className="repertoire--list2__block">
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>8 - Август </p>
                  <p>18:00</p>
                  <p>БИЛЕТ БААСЫ: 200 сом </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                    style={{
                      border: "2px solid red",
                      padding: "5px 10px",
                      borderRadius: "50px ",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
            <div className="repertoire--list2__block">
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
                style={{ width: "150px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>8 - Август </p>
                  <p>18:00</p>
                  <p>
                    БИЛЕТ БААСЫ:{" "}
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      200
                    </span>{" "}
                    сом{" "}
                  </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                    style={{
                      border: "2px solid red",
                      padding: "5px 10px",
                      borderRadius: "50px ",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
            <div className="repertoire--list2__block">
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
                style={{ width: "150px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>8 - Август </p>
                  <p>18:00</p>
                  <p>БИЛЕТ БААСЫ: 200 сом </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                    style={{
                      border: "2px solid red",
                      padding: "5px 10px",
                      borderRadius: "50px ",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
            <div className="repertoire--list2__block">
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
                style={{ width: "150px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>8 - Август </p>
                  <p>18:00</p>
                  <p>
                    БИЛЕТ БААСЫ:{" "}
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      200
                    </span>{" "}
                    сом{" "}
                  </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                    style={{
                      border: "2px solid red",
                      padding: "5px 10px",
                      borderRadius: "50px ",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
            <div className="repertoire--list2__block">
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
                style={{ width: "150px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>8 - Август </p>
                  <p>18:00</p>
                  <p>БИЛЕТ БААСЫ: 200 сом </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                    style={{
                      border: "2px solid red",
                      padding: "5px 10px",
                      borderRadius: "50px ",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
            <div className="repertoire--list2__block">
              <img
                src="https://sputnik.kg/img/103019/12/1030191258_0:0:2048:2048_1920x0_80_0_0_331e0bb75831f6a9f210f92ab85eb781.jpg"
                alt="img"
                style={{ width: "150px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="timeBlock">
                  <p>8 - Август </p>
                  <p>18:00</p>
                  <p>
                    БИЛЕТ БААСЫ:{" "}
                    <span style={{ fontSize: "18px", fontWeight: "600" }}>
                      200
                    </span>{" "}
                    сом{" "}
                  </p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    "Жамийла"
                  </p>
                  <p>Драма</p>
                </div>
                <div className="nameBlock">
                  {" "}
                  <p>Узактыгы: 1 саат 30 мүнөт – Антрактсыз</p>
                  <p
                    style={{
                      border: "2px solid red",
                      padding: "5px 10px",
                      borderRadius: "50px ",
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    <span>7</span>+
                  </p>
                </div>

                <p>
                  Дареги:{" "}
                  <span style={{ fontSize: "15px" }}>
                    Капар Медетбеков атындагы Талас облустук драма тетары
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepertoirePages;
