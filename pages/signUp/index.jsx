import React from "react";
import SInpUt from "@/components/UI/input/input";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
import s from "./signUp.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import vodo_logo from '../../public/Vodo_Logo.png'
const signUp = () => {
  return (
    <div className={s.signup}>
      <motion.div
        initial={{ x: "-200%" }} // начальная позиция слева от экрана
        animate={{ x: "20%", x: 0 }} // конечная позиция в центре экрана
        transition={{ duration: 0.7, ease: "easeInOut" }} // продолжительность анимации и тип анимации
        className={s.container}
      >
        <div className={s.left_side}>
          <div className={s.backgr}></div>
          <div className={s.desc}>
            <h1>Бишкек Водоканал</h1>
            <Image className={s.vodo} src={vodo_logo}></Image>
          </div>
        </div>
        <div className={s.right_side}>
          <h1>Регистрация</h1>
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
          <Input
            size="large"
            placeholder="Повторите пароль"
            prefix={<LockOutlined />}
          />
          <button className={s.btn}>Зарегистрироваться</button>
          <div className={s.enter}>
            <p>Уже есть аккаунт?</p>
            <a href="/signIn">Войти</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default signUp;
