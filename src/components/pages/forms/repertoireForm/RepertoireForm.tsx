import React, { useState } from "react";
import "./RepertoireForm.scss";
import axios from "axios";
import { useDispatch } from "react-redux";

type Repertoire = {
  date: string;
  time: string;
  name: string;
  genre: string;
  ageLimit: string;
  price: string;
};

type RepertoireFormProps = {
  onAdd: (data: Repertoire) => void;
};

const RepertoireForm = ({ onAdd }: RepertoireFormProps) => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [ageLimit, setAgeLimit] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [img, setImg] = useState<string>("");

  const dispatch = useDispatch();

  const postRepertoire = () => {
    const newRepertoire = {
      date,
      time,
      name,
      genre,
      ageLimit,
      price,
      img: img ? img.name : undefined,
    };
    let res = axios.post(
      `https://api-crud.elcho.dev/api/v1/030ec-bbc78-39831/theaterRepartuar`,
      newRepertoire
    );
    dispatch();
  };

  return (
    <section id="repertoireForm">
      <div className="container">
        <form className="repertoireForm">
          <h2>Репертуар кошуу</h2>
          <div className="formGroup">
            <label>Дата</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="Date"
            />
          </div>
          <div className="formGroup">
            <label>Убакыт</label>
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="time"
            />
          </div>
          <div className="formGroup">
            <label>Аталышы</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Спектаклдын аты"
            />
          </div>
          <div className="formGroup">
            <label>Жанр</label>
            <input
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              type="text"
              placeholder="Драма / Комедия ..."
            />
          </div>
          <div className="formGroup">
            <label>Жаш курак</label>
            <input
              value={ageLimit}
              onChange={(e) => setAgeLimit(e.target.value)}
              type="text"
              placeholder="7+"
            />
          </div>
          <div className="formGroup">
            <label>Баасы</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="200 сом"
            />
          </div>
          <div className="formGroup">
            <label>Суроту</label>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="file"
            />
          </div>
          <button type="submit">Сактоо</button>
        </form>
      </div>
    </section>
  );
};

export default RepertoireForm;
