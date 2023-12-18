import React from "react";
import SInpUt from "@/components/UI/input/input";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
import s from "./signIn.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
const signUp = () => {
  return (
    <div className={s.signin}>
      <motion.div
        initial={{ x: "-200%" }} // начальная позиция слева от экрана
        animate={{ x:"20%", x: 0 }} // конечная позиция в центре экрана
        transition={{ duration: 0.7, ease: "easeInOut" }} // продолжительность анимации и тип анимации
        className={s.container}
      >
        <div className={s.left_side}>
          <div className={s.backgr}></div>
          <div className={s.desc}>
            <h1>Авторизация</h1>

          </div>
        </div>
        <div className={s.right_side}>
          <h1>Авторизация</h1>
          <Input size="large" placeholder="Логин" prefix={<UserOutlined />} />
          <Input
            size="large"
            placeholder="Укажите вашу почту"
            prefix={<MailOutlined />}
          />
          <Input
            size="large"
            placeholder="Введите пароль"
            prefix={<LockOutlined />}
          />
          <button className={s.btn}>Войти</button>
          <div className={s.enter}>
            <p>Еще нет аккаунта?</p>
            <a href="/signUp">Зарегистрироваться</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default signUp;
