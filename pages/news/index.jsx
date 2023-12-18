import NewsCard from "@/components/UI/NewsCard/NewsCard";
import s from "./news.module.scss";
import { useEffect, useState } from "react";

const news = () => {
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

  // <ul>
  //       {contacts && contacts.map(({id, name, email}) => (
  //           <li key={id}>
  //               <strong>{name}</strong> ({email})
  //           </li>
  //       ))}
  //     </ul>
  const posts = [
    {
      name: "Нерабочий день!",
      date: "13.12.2023",
      title:
        "welsmgpefvmer,ppppppppqrmgoerkmowepifmwoie[gmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfpeogegofmepovmpwd",
      img: "/33.jpg",
    },
  ];

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

  return (
    <section className={s.newsContainer}>
      <div className={s.sidebar}>
        <h2>Меню</h2>
      </div>
      <div className={s.mainContent}>
        <div className={s.main_card}>
          <h2>Новости на сегодня</h2>
          {posts.map((post, index) => (
            <div key={index} className={`${s.main_big_card} ${s.news_card}`}>
              <div className={s.image_container}>
                <div className={s.image_overlay}></div>
                <img src={post.img} alt="News Image" className={s.news_image} />
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
            {posts.map((post, index) => (
              <div key={index} className={`${s.other_news_card}`}>
                <div className={s.image_container}>
                  <div className={s.image_overlay}></div>
                  <img
                    src={post.img}
                    alt="News Image"
                    className={s.news_image}
                  />
                  <div className={s.description}>
                    <div className={s.date}>{post.date}</div>
                    <div className={s.title}>{post.name}</div>
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
