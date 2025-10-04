import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Welcome.scss";

import theatre1 from "../../../assets/images/theatre.webp";
import theatre2 from "../../../assets/images/theater2.webp";
import theatre3 from "../../../assets/images/theater3.webp";

const slides = [
  {
    id: 1,
    image: theatre1,
    genre: "Драма",
    title: "Жамийла",
    date: "15 АВГУСТАН БАШТАП",
    img: "../../../assets/images/nft.svg",
  },
  {
    id: 2,
    image: theatre2,
    genre: "Комедия",
    title: "Көңүл ачуу",
    date: "20 АВГУСТАН БАШТАП",
  },
  {
    id: 3,
    image: theatre3,
    genre: "Трагедия",
    title: "Ак кеме",
    date: "25 АВГУСТАН БАШТАП",
  },
];

const Welcome: React.FC = () => {
  const [bgImage, setBgImage] = useState(slides[0].image);

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: (index: number) => setBgImage(slides[index].image),
  };

  return (
    <section
      id="welcome"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease",
      }}
    >
      <div className="container">
        <div className="welcome-slider">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="slide">
                <h3>{slide.genre}</h3>
                <h1>{slide.title}</h1>
                <h3>{slide.date}</h3>
                <button>Толук маалымат алуу</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
