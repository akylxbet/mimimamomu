import React from "react";
import s from "./Card.module.scss";
const CardService = ({  name, desc}) => {
  return (
    <div className={s.card}>
      <img className={s.backgr} src="./uchenaya.jpg" alt="#" />
      <div className={s.desc}>
        <img src="./broker.png" alt="#" />
        <h4>{name}</h4>
        <p>{desc}</p>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default CardService;
