import React, { useState } from "react";
import "./RepertoireForm.scss";

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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [price, setPrice] = useState("");

  const formValid = date && time && name && genre && ageLimit && price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) return;

    onAdd({ date, time, name, genre, ageLimit, price });

    setDate("");
    setTime("");
    setName("");
    setGenre("");
    setAgeLimit("");
    setPrice("");
  };

  return (
    <section id="repertoireForm">
      <div className="container">
        <form className="repertoireForm" onSubmit={handleSubmit}>
          <h2>Репертуар кошуу</h2>
          <div className="formGroup">
            <label>Дата</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label>Убакыт</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </div>
          <div className="formGroup">
            <label>Аталышы</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Спектаклдын аты" required />
          </div>
          <div className="formGroup">
            <label>Жанр</label>
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Драма / Комедия ..." required />
          </div>
          <div className="formGroup">
            <label>Жаш курак</label>
            <input type="text" value={ageLimit} onChange={(e) => setAgeLimit(e.target.value)} placeholder="7+" required />
          </div>
          <div className="formGroup">
            <label>Баасы</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="200 сом" required />
          </div>
          <button type="submit">Сактоо</button>
        </form>
      </div>
    </section>
  );
};

export default RepertoireForm;
