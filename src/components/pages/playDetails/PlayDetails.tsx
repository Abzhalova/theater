import React from "react";
import "./PlayDetails.scss";
import { useNavigate } from "react-router-dom";

const PlayDetails = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/posterDetails");
  };

  return (
    <section id="playDetails">
      <div className="container">
        <div className="playDetails">
          <div className="playDetails--block">
            <h2>
              Моноспектакль
              <br />
              «Соглядатай»
            </h2>
            <div>
              <p>Режиссёр: Александр Панин</p>
              <p>Автор: Владимир Набоков</p>
            </div>
            <h4>Жанр: Экзистенциальный детектив</h4>
            <h4>Премьера: 24 Мая 2024 года</h4>
            <h4>Продолжительность: 1 час 30 минут - Без антракта</h4>
            <h4>Место: Малая сцена</h4>
            <h4>Рекомендованный возраст для зрителей: 16+</h4>
            <p>
              Живущий в Берлине русский эмигрант решается на самоубийство.
              Однако и в «послесмертии» его не до конца умершее «я» продолжает
              существовать среди знакомых ему прежде людей, переживает
              неразделенную любовь и внимательно «соглядатайствует» за человеком
              по фамилии Смуров, загадка личности которого раскрывается лишь в
              самом конце спектакля.
            </p>
            <button onClick={handleBuyClick}>Купить билет</button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBsCprt-r-swVD6YdeT3ud3gDrtYcw4fcfw&s"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default PlayDetails;
