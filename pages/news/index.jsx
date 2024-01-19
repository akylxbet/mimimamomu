import s from "./news.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Standart from "@/components/Standart/Standart";
const news = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleBlockClick = (blockName) => {
    setSelectedBlock(blockName);
    // Дополнительные действия по обработке клика, если необходимо
  };

  //   const [contacts, setContacts] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responce = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await responce.json();
  //     setContacts(data);
  //   };
  //   fetchData();
  // }, []);

  const newsArray = [
    {
      id: 1,
      name: "Новость 1",
      date: "18.10.2023",
      image: "/33.jpg",
      info: "Ремонтные работы с 25 октября, с 10:00 до 23:00",
    },
    {
      id: 2,
      name: "Новость 2",
      date: "19.10.2023",
      image: "/33.jpg",
      info: "Новый сервис для пользователей с 1 ноября",
    },
    {
      id: 3,
      name: "Новость 3",
      date: "20.10.2023",
      image: "/33.jpg",
      info: "Изменения в графике работы с 1 ноября",
    },
    {
      id: 4,
      name: "Новость 4",
      date: "21.10.2023",
      image: "/33.jpg",
      info: "Праздничное мероприятие 5 ноября в 18:00",
    },
    {
      id: 5,
      name: "Новость 5",
      date: "22.10.2023",
      image: "/33.jpg",
      info: "Новые книги в библиотеке, приходите за чтением",
    },
    {
      id: 6,
      name: "Новость 6",
      date: "23.10.2023",
      image: "/33.jpg",
      info: "Закрытие выставки искусств 10 ноября в 20:00",
    },
    {
      id: 7,
      name: "Новость 7",
      date: "24.10.2023",
      image: "/33.jpg",
      info: "Бесплатные мастер-классы для всех желающих 15 ноября",
    },
    {
      id: 8,
      name: "Новость 8",
      date: "25.10.2023",
      image: "/33.jpg",
      info: "Бесплатные мастер-классы для всех желающих 15 ноября",
    },
  ];

  return (
    <section className={s.newsContainer}>
      <Standart/>
      <div className={s.sidebar}>
        <h2>Пресс-центр</h2>
        <button
          className={`${s.sidebarBlock} ${
            selectedBlock === "news" && s.active
          }`}
          onClick={() => handleBlockClick("news")}
        >
          <Link href="#">Новости</Link>
        </button>
        <button
          className={`${s.sidebarBlock} ${
            selectedBlock === "leadership" && s.active
          }`}
          onClick={() => handleBlockClick("leadership")}
        >
          <Link href="#">Руководство</Link>{" "}
        </button>
      </div>
      <div className={s.mainContent}>
        <div className={s.main_card}>
          {newsArray.slice(-1).map((post, index) => (
            <div key={index} className={`${s.main_big_card} ${s.news_card}`}>
              <div className={s.image_container}>
                <div className={s.image_overlay}></div>
                <img
                  src={post.image}
                  alt="News Image"
                  className={s.news_image}
                />
              </div>
              <div className={s.description}>
                <div className={s.date}>{post.date}</div>
                <div className={s.title}>{post.name}</div>
                <div className={s.arrow}>➔</div>
              </div>
            </div>
          ))}
        </div>
        <div className={s.other_cards}>
          <h2>Остальные новости</h2>
          <div className={s.other_news}>
            {newsArray
              .slice(0, -1)
              .reverse()
              .map((post, index) => (
                <div key={index} className={`${s.other_news_card}`}>
                  <div className={s.image_container}>
                    <div className={s.image_overlay}></div>
                    <img
                      src={post.image}
                      alt="News Image"
                      className={s.news_image}
                    />
                    <div className={s.description}>
                      <div className={s.date}>{post.date}</div>
                      <div className={s.title}>{post.info}</div>
                      <div className={s.arrow}>➔</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default news;
