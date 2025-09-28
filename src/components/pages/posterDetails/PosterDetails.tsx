import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyCent } from "react-icons/tb";

const PosterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const poster = useSelector((state: RootState) =>
    state.poster.posters.find((p) => p.id === id)
  );

  if (!poster) return <p>Постер табылган жок</p>;

  return (
    <section id="poster">
      <div className="container">
        <div className="poster">
          <div className="poster--details">
            <img src={poster.image} alt={poster.title} />
            <div className="poster--details__list">
              <h3>{poster.title}</h3>
              <div className="month">
                {poster.dates.map((d, i) => (
                  <div key={i} className="month--blocks">
                    <h4>{d.day}</h4>
                    <p>{d.month}</p>
                    <hr />
                    <p>
                      {d.hour}:{d.minute}
                    </p>
                  </div>
                ))}
              </div>
              <div className="month--block">
                <TbCurrencyCent className="month--icons" />
                <p>
                  Стоимость: <span>{poster.price} сом</span>
                </p>
              </div>
              <div className="month--block">
                <MdLocationOn className="month--icons" />
                <p>{poster.locationName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterDetails;
