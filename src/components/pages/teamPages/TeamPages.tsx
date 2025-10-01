import React from "react";
import "./TeamPages.scss";
import { useNavigate } from "react-router-dom";

const TeamPages = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/teamDetails");
  };

  return (
    <section id="team">
      <div className="container">
        <div className="team">
          <div className="team--category">
            <div className="team--category__block">
              <p>Көркөм башкаруу</p>
              <p>Актёр-актрисалар</p>
              <p>ОРКЕСТР БӨЛҮМҮ</p>
              <p>Кызматкерлер</p>
            </div>
          </div>
          <center>
            <h2>Көркөм башкаруу </h2>
          </center>
          <div className="team--list">
            {" "}
            <div className="team--list__block" onClick={handleClick}>
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3 onClick={handleClick}>Бекботоев Алмазбек</h3>
              <p>Директор</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Театрдын көркөм жетекчиси</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Театрдын башкы артисти</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>өндүрүш директору</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>өндүрүш директору</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Театрдын башкы артисти</p>
            </div>
          </div>
          <center>
            <h2>Актёр-актрисалар</h2>
          </center>
          <div className="team--list">
            {" "}
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Кыргыз Республикасынын эмгек сиңирген артисти</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Сахна чебери</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Актёр</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Актриса</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>өндүрүш директору</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Театрдын башкы артисти</p>
            </div>
          </div>
          <center>
            <h2>Оркестр бөлүмү</h2>
          </center>
          <div className="team--list">
            {" "}
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Кыргыз Республикасынын эмгек сиңирген артисти</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Сахна чебери</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Актёр</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Актриса</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>өндүрүш директору</p>
            </div>
            <div className="team--list__block">
              <img
                src="https://files.masterkrasok.ru/posts/mona_liza_iz_gollandii.jpg"
                alt="img"
              />
              <h3>Бекботоев Алмазбек</h3>
              <p>Театрдын башкы артисти</p>
            </div>
          </div>
          <center>
            <h2> Кызматкерлер</h2>
          </center>
          <div className="team--list__employees">
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заместитель директора</p>
              <p>
                <span>Смирнова Елена Викторовна</span>
              </p>
            </div>
            <div className="team--list__employees--name">
              <p>Заведующая фотолабораторией</p>
              <p>
                <span>Касьянова Анастасия Юрьевна</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPages;
