import React, { useState } from "react";
import "./RepertoirePages.scss";
import { RxGithubLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import RepertoireForm from "../forms/repertoireForm/RepertoireForm";

type Repertoire = {
  date: string;
  time: string;
  name: string;
  genre: string;
  ageLimit: string;
  price: string;
};

const RepertoirePages = () => {
  const navigate = useNavigate();

  // бардык репертуарлар ушул жерде сакталат
  const [repertoires, setRepertoires] = useState<Repertoire[]>([]);

  // формадан кошулган маалыматты кабыл алуу функциясы

  return (
    <section id="repertoire">
      <div className="container">
        <div className="repertoire">
          <div className="repertoire--list1">
            <div className="repertoire--list1--blockLogo">
              <div>
                <RxGithubLogo style={{ fontSize: "50px" }} />
              </div>
            </div>
          </div>

          <div className="repertoire--list2">
            <div className="season">
              <h2>
                Капар Медетбеков атындагы <br />
                Талас облустук музыкалык драма театры <br />
                <span>Октябрь 2025</span>
              </h2>
              <p>16 СЕЗОН</p>
            </div>

            {/* Репертуарлардын тизмеси */}
            <div>
              {repertoires.map((rep, i) => (
                <div key={i} className="repertoire--list2__block">
                  <div className="timeBlock">
                    <p>{new Date(rep.date).getDate()}</p>
                    <div className="timeBlock--minutes">
                      <p>
                        {new Date(rep.date).toLocaleDateString("ky-KG", {
                          weekday: "short",
                        })}
                      </p>
                      <p>{rep.time}</p>
                    </div>
                  </div>
                  <div className="nameBlock">
                    <p>{rep.name}</p>
                  </div>
                  <div className="genreBlock">
                    <p>{rep.genre}</p>
                    <div style={{ display: "flex" }}>
                      <p>{rep.ageLimit}</p>
                    </div>
                    <p>{rep.price} сом</p>
                  </div>
                </div>
              ))}
              <hr style={{ border: "1px solid black", margin: "13px 0" }} />
            </div>
          </div>

          <div className="listAddress">
            <div className="listAddress--adminPart">
              <div style={{ marginBottom: "10px" }}>
                <p>
                  Театрдын директору
                  <br />
                  Маданияттын мыкты кызматкери тош белгисинин ээси
                </p>
                <p style={{ textTransform: "uppercase" }}>
                  Алмазбек Бекботоев Байызбекович
                </p>
              </div>
              <div>
                <p>
                  Театрдын корком жетекчиси
                  <br />
                  Маданияттын мыкты кызматкери тош белгисинин ээси
                </p>
                <p style={{ textTransform: "uppercase" }}>
                  Тумар Олжобаев Байызбекович
                </p>
              </div>
            </div>
            <div className="listAddress--number">
              <p>Биздин дарек: Ч.Айтматов 351</p>
              <p>Администрация: +996 (503) 096-909</p>
            </div>
            <div className="listAddress--icons">
              <a href="#">
                <FaFacebookF /> Талас Драм Театры
              </a>
              <a href="#">
                <GrInstagram /> talas_teatr
              </a>
              <a href="#">
                <ImWhatsapp /> +996 (503) 096-909
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepertoirePages;
