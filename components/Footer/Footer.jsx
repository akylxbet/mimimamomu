import React from "react";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.box}>
        <h1> </h1>
      </div>
      <div className={s.box}>
        <h1>Абонентам</h1>
        <ul>
          <li>
            <a href="/">Общая информация</a>
          </li>
          <li>
            <a href="/">Частные лица</a>
          </li>
          <li>
            <a href="/">Юридические лица</a>
          </li>
          <li>
            <a href="/">Услуги</a>
          </li>
        </ul>
      </div>
      <div className={s.box}>
        <h1>Пресс-Центр</h1>
        <ul>
          <li>
            <a href="/">Новости компании</a>
          </li>
          <li>
            <a href="/">СМИ о нас</a>
          </li>
          <li>
            <a href="/">Контакты для СМИ</a>
          </li>
        </ul>
      </div>
      <div className={s.box}>
        <h1>Контакты</h1>
        <ul>
          <li>
            <a href="/">Новости компании</a>
          </li>
          <li>
            <a href="/">СМИ о нас</a>
          </li>
          <li>
            <a href="/">Контакты для СМИ</a>
          </li>
        </ul>
      </div>
      <div className={s.box}>
        <h1>Контакты</h1>
        <ul>
          <li>
            <a href="/">Г.Бишкек 10 м-н, дом 35.</a>
          </li>
          <li>
            <a href="/">1533</a>
          </li>
          <li>
            <a href="/">vodokanal@meria.kg</a>
          </li>
          <li>
            <a href="/">56-03-20</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
