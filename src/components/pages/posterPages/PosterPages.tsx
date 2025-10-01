import React, { useState } from "react";
import "./PosterPages.scss";
import { MdLocationOn, MdOutlineCalendarMonth } from "react-icons/md";
import { TbCurrencyCent } from "react-icons/tb";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const PosterPages = () => {
  const posters = useSelector((state: RootState) => state.poster.posters);
  const [selectedCategory, setSelectedCategory] = useState<string>("Баары");
  const navigate = useNavigate();

  const handleBuyClick = (posterId: string) => {
    navigate(`/posterDetails/${posterId}`);
  };

  const categoryMap: Record<string, string> = {
    Спектакли: "Спектаклдер",
    Концерты: "Концерттер",
    "Для детей": "Балдар үчүн",
    Семинары: "Семинарлар",
  };

  const filteredPosters =
    selectedCategory === "Баары"
      ? posters
      : posters.filter(
          (poster) => categoryMap[poster.category] === selectedCategory
        );

  const categories = [
    "Баары",
    "Спектаклдер",
    "Концерттер",
    "Балдар үчүн",
    "Семинарлар",
  ];

  return (
    <section id="poster">
      <div className="container">
        <div className="poster">
          <div className="poster--category">
            <div className="poster--category__block">
              {categories.map((cat) => (
                <p
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </p>
              ))}
            </div>
          </div>


          <div className="poster--big">
            <div className="poster--list1">
              <div className="title-with-line">
                <h3>
                  {selectedCategory === "Баары" ? "Афиша" : selectedCategory}
                </h3>
                <hr />
              </div>
            </div>
            <div className="poster--list">
              {filteredPosters.map((poster) => (
                <div key={poster.id} className="poster--list__cart">
                  <img src={poster.image} alt={poster.title} />
                  <div className="poster--list__cart--block">
                    <h3>{poster.title}</h3>
                    <hr />
                    <div className="details">
                      <MdOutlineCalendarMonth className="icons" />
                      {poster.dates.map((d, i) => (
                        <h4 key={i} style={{ textTransform: "uppercase" }}>
                          {d.day}- {d.month} |
                        </h4>
                      ))}
                    </div>
                    <div className="details">
                      <TbCurrencyCent className="icons" />
                      <h4>{poster.price} сом</h4>
                    </div>
                    <div className="details">
                      <MdLocationOn className="icons" />
                      <p>{poster.locationName}</p>
                    </div>
                    <div className="ticket-icon">
                      <div
                        className="ticket-text"
                        onClick={() => handleBuyClick(poster.id)}
                      >
                        Купить билет
                      </div>
                      <BsTicketPerforatedFill className="icon" />
                    </div>
                  </div>
                </div>
              ))}

              {filteredPosters.length === 0 && (
                <p className="no-posters">Бул категорияда Афиша жок</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterPages;
