import React from "react";
import "./Header.scss";
import { NavLink , useLocation } from "react-router-dom";
import Logo from "../../../assets/images/02logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header id="header" className={isHome ? "header--light" : "header--dark"}>
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img src={Logo} alt="img" />
            <h1>
              <NavLink to={"/theater"}>
                {" "}
                Капар Медетбеков атындагы <br />
                Талас облустук
                <br />
                музыкалык драма театры{" "}
              </NavLink>
            </h1>
          </div>
          <div className="header--nav">
            <div className="header--nav__logo">
              <h3>
                Касса: <a href="#">+996 500 800 907</a>
              </h3>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <GrInstagram />
              </a>
              <a href="#">
                <ImWhatsapp />
              </a>
            </div>
            <div className="header--nav__link">
              <NavLink to={"/"}>БАШКЫ БЕТ</NavLink>
              <NavLink to={"/poster"}>АФИША</NavLink>
              <NavLink to={"/play"}>СПЕКТАКЛЬ</NavLink>
              <NavLink to={"/theater"}>ТАЛАС ТЕАТР </NavLink>
              <NavLink to={"/team"}>КОМАНДА</NavLink>
              <NavLink to={"/gallery"}>ГАЛЕРЕЯ</NavLink>
              <NavLink to={"/repertoire"}>РЕПЕРТУАР</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
