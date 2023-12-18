"use client";
import React, { useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/facebook.png";
import inst from "../../public/pngwing.com.png";
import user from "../../public/user.png";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import Sidebar from "../HeaderB/Sidebar/Sidebar";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
Link;
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const items = [
    {
      label: "Физические лица",
      key: "1",
      link: "/chastnie",
    },
    {
      label: "Юридические лица",
      key: "2",
      link: "/fiz",
    },
  ];

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <header className={s.Header}>
      <div className={s.header_upper}>
        <div className={s.logo}>
          <Image src={logo} alt="logo"></Image>
          <h1>БишкекСууКанал</h1>
        </div>
        <div className={s.language}>
          <button className={s.button_kg}>KG</button>
          <button className={s.button_rus}>RUS</button>
        </div>
        <div className={s.sign_up}>
          <Image className={s.user} src={user} alt="user" />
          <Link href="/signUp">личный кабинет</Link>
        </div>
        <div className={s.info}>
          <div className={s.number}>
            <p className={s.name_of_number}>ОТДЕЛ КАДРОВ</p>
            <p className={s.number_of_number}>54-42-45</p>
          </div>
          <div className={s.number}>
            <p className={s.name_of_number}>СЛУЖБА «ВОДОСНАБЖЕНИЯ»</p>
            <p className={s.number_of_number}>44-97-03</p>
          </div>
          <div className={s.number}>
            <p className={s.name_of_number}>СЛУЖБА «ВОДООТВЕДЕНИЯ»</p>
            <p className={s.number_of_number}>88-09-63</p>
          </div>
        </div>
        <motion.div
          className={s.burger}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, duration: 0.5 }}
        >
          <label htmlFor="check">
            <input
              type="checkbox"
              id="check"
              className={s.check}
              onClick={() => setShowNav(!showNav)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </motion.div>
      </div>
      <div className={s.header_links}>
        <div className={s.header_link_left}>
          <Link href="">Для абонентов</Link>
          <li className={s.header_service}>
            <Link href="/services">Услуги</Link>
            <ul className={s.submenu}> 
              <li className={s.submenu__item}>
                <Link href="/private"className={s.submenu__link}>Частные лица</Link>
              </li>
              <li className={s.submenu__item}>
                <Link href="/physical"className={s.submenu__link}>Юридические лица</Link>
              </li>
            </ul>
          </li>
          <Link href="/news">Новости</Link>
        </div>
        <div className={s.header_link_middle}>
          <Link href="/aboutus">О нас</Link>
          <Link href="">Вакансии</Link>
          <Link href="">Контакты</Link>
          <Link href="">Площадка</Link>
        </div>
        <div className={s.header_link_right}>
          <a
            className={s.facebook}
            target="_blank"
            href="https://www.facebook.com/vodokanal312/?lan=ru"
          >
            <Image className={s.facebook} src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/vodokanal312/?igshid=4u6zjs7i4u3y&lan=ru"
            target="_blank"
          >
            <Image className={s.inst} src={inst} alt="inst" />
          </a>
        </div>
        <a className={s.siteMerii} href="https://bishkek.gov.kg/ru">
          Сайт мэрии
        </a>
      </div>
      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </header>
  );
};

export default Header;
