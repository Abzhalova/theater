import React from "react";
import "./Footer.scss";
import { SiYoutube } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <center>
            <p style={{ fontSize: "20px", paddingTop: "50px" }}>
              {" "}
              Способы оплаты
            </p>
            <div className="pay">
              <Link to="#">
                <p>ABank</p>
              </Link>
              <Link to="#">
                <p>MBank</p>
              </Link>
              <Link to="#">
                <p>OBank!</p>
              </Link>
            </div>
          </center>
          <hr />
          <div className="footer--list">
            <div className="footer--list__left">
              <div className="left-block">
                <Link to="#">
                  <p>Театр</p>
                </Link>
                <Link to="#">
                  {" "}
                  <p>Афиша</p>
                </Link>
                <Link to="#">
                  {" "}
                  <p>Галерея</p>
                </Link>
                <Link to="#">
                  {" "}
                  <p>Касса</p>
                </Link>
                <Link to="#">
                  <p>Контакты</p>
                </Link>
              </div>
              <div className="left-block">
                <Link to="#">
                  {" "}
                  <p>Залдын схемасы</p>
                </Link>
                <Link to="#">
                  {" "}
                  <p>Команда</p>
                </Link>
                <Link to="#">
                  {" "}
                  <p>Вакансия</p>
                </Link>
              </div>
            </div>

            <div className="footer--list__right">
              <div className="icons">
                <p>Адрес:</p>
                <div className="icons--details">
                  <Link to="#">
                    <SiYoutube />
                  </Link>
                  <Link to="#">
                    <RiFacebookFill />
                  </Link>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                  <Link to="#">
                    <FaTelegramPlane />
                  </Link>
                  <Link to="#">
                    <FaWhatsapp />
                  </Link>
                </div>
              </div>

              <p className="elAddress">
                Контакты: <Link to="#">3422-5-31-80</Link>
              </p>
              <p className="elAddress">
                <BsFillEnvelopeFill />
                <Link to="#"> tomdtkg@gmail.com</Link>
              </p>
            </div>
          </div>
          <center  style={{ fontSize: "15px", padding: "10px 20px 30px" }}>
            <p>
              "Капар Медетбеков атындагы Талас облустук музыкалык драма театры"
            </p>
            <p> Администратор сайта: <Link to="/createList">tomdtkg@gmail.com</Link></p>
            <p>Разработка:  DEV-KG.PRO</p>
          </center>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
