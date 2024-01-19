"use client";
import React, { useEffect, useRef, useState } from "react";
import s from "./main.module.scss";
import Link from "next/link";
import Image from "next/image";
import Intro from "@/components/Intro/Intro";
import NewsCard from "@/components/UI/NewsCard/NewsCard";
import Swipert from "@/components/UI/swiper/swipert";
import CardService from "@/components/Card/Card";

const Home = () => {

 

  const newsArray = [
    {
      id: 1,
      name: "Новость 1",
      date: "18.10.2023",
      image: "./traktor.jpg",
      info: "Ремонтные работы с 25 октября, с 10:00 до 23:00",
    },
    {
      id: 2,
      name: "Новость 2",
      date: "19.10.2023",
      image: "./traktor.jpg",
      info: "Новый сервис для пользователей с 1 ноября",
    },
    {
      id: 3,
      name: "Новость 3",
      date: "20.10.2023",
      image: "./traktor.jpg",
      info: "Изменения в графике работы с 1 ноября",
    },
    {
      id: 4,
      name: "Новость 4",
      date: "21.10.2023",
      image: "./traktor.jpg",
      info: "Праздничное мероприятие 5 ноября в 18:00",
    },
    {
      id: 5,
      name: "Новость 5",
      date: "22.10.2023",
      image: "./traktor.jpg",
      info: "Новые книги в библиотеке, приходите за чтением",
    },
    {
      id: 6,
      name: "Новость 6",
      date: "23.10.2023",
      image: "./traktor.jpg",
      info: "Закрытие выставки искусств 10 ноября в 20:00",
    },
    {
      id: 7,
      name: "Новость 7",
      date: "24.10.2023",
      image: "./traktor.jpg",
      info: "Бесплатные мастер-классы для всех желающих 15 ноября",
    },
  ];

  const lastThreeNews = newsArray.slice(-3).reverse();

  return (
    <main className={s.home}>
      <div className={s.video}>
        <Intro />
      </div>
      <div className={s.cards}>
        <div className={s.card}>
          <CardService
            name="Предварительная запись"
            desc="Предварительная запись на встречу со специалистами"
          />
        </div>
        <div className={s.card}>
          <CardService
            name="Предварительная запись"
            desc="Предварительная запись на встречу со специалистами"
          />
        </div>
        <div className={s.card}>
          <CardService
            name="Предварительная запись"
            desc="Предварительная запись на встречу со специалистами"
          />
        </div>
        <div className={s.card}>
          <CardService
            name="Предварительная запись"
            desc="Предварительная запись на встречу со специалистами"
          />
        </div>
      </div>
      <section className={s.news}>
        <h1>Новости компании</h1>
        {lastThreeNews.map((newsItem) => (
          <div key={newsItem.id} className={s.newsCard}>
            <NewsCard info={newsItem.info} date={newsItem.date} />
          </div>
        ))}
        <Link href="/news">
          <button className={s.arrow_button}>
            Все новости<span className={s.arrow}></span>{" "}
          </button>
        </Link>
      </section>
      <div className={s.button_focus_fixed}>
        <button className={s.button_focus}>
          <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=jrjtXPWVTLrksTQsZrSmvPJQvWRrPmmrCXhkJKnZphCkRrqNxgPDbdSHrmcpnmwHsQSpXlKm">
            Связаться с нами
          </a>
        </button>
      </div>
      <div className={s.swiper_block}>
        <div className={s.left_side}>
          <Swipert />
        </div>
        <div className={s.right_side}>
          <h3>Сообщите о нарушениях</h3>
          <h1> по номеру 1533</h1>
          <h5></h5>
          <ul>
            <h4>На условиях анонимности проинформируйте:</h4>
            <li>о фактах коррупции и должностных злоупотреблениях</li>
            <li>о нарушении правил безопасности и охраны труда</li>
            <li>о других нарушениях и негативных событиях</li>
          </ul>
        </div>
      </div>
      <div className={s.cooperation}>
        <h1>Мы сотрудничаем</h1>
        <div className={s.links}>
          <div className={s.link_box}>
            <img src="./logo.png" alt="img" />
            <p>Мэрия Бишкека</p>
          </div>
          <div className={s.link_box}>
            <img src="./logo.png" alt="img" />
            <p>Мэрия Бишкека</p>
          </div>
          <div className={s.link_box}>
            <img src="./logo.png" alt="img" />
            <p>Мэрия Бишкека</p>
          </div>
          <div className={s.link_box}>
            <img src="./logo.png" alt="img" />
            <p>Мэрия Бишкека</p>
          </div>
          <div className={s.link_box}>
            <img src="./logo.png" alt="img" />
            <p>Мэрия Бишкека</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
