import React from "react";
import s from "./Sidebar.module.scss";
import Link from "next/link";
import cl from "classnames";
import { motion } from "framer-motion";

const Sidebar = ({ show, setShowNav }) => {
  return (
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["100%", "100%", "50%", "50%", "0"],
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        borderRadius: 0,
        type: "spring",
        stiffness: 500,
      }}
      transition={{ delay: 0.2, duration: 1 }}
      className={show ? cl(s.sidenav, s.active) : s.sidenav}
    >
      <motion.div
        className={s.closeBurger}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
      >
        <motion.label htmlFor="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </motion.label>
      </motion.div>
      <ul>
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#home" onClick={() => setShowNav(false)}>
            Главная
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#service" onClick={() => setShowNav(false)}>

          </a>
        </motion.li>
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#architecture" onClick={() => setShowNav(false)}>
            Абонентам
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -20, opacity: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          whileHover={{ scale: 1.1, transition: "0" }}
        >
          <a href="#planning" onClick={() => setShowNav(false)}>
            Услуги
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#location" onClick={() => setShowNav(false)}>
            Новости
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#location" onClick={() => setShowNav(false)}>
            О нас 
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#location" onClick={() => setShowNav(false)}>
          Контакты
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#location" onClick={() => setShowNav(false)}>
            Площадка
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#location" onClick={() => setShowNav(false)}>
            Сайт Мэрии
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
