import React from "react";
import s from "./NewsCard.module.scss";
import Image from "next/image";
const NewsCard = ({ image, info, date, width, height }) => {
  return (
    <div className={s.NewsCard}>
      <img className={s.image} src="./traktor.jpg" alt="Новость" />
      <p className={s.date}>{date}</p>
      <p className={s.info}>{info}</p>
    </div>
  );
};

export default NewsCard;
