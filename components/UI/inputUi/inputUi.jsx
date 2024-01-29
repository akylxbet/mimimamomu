import React from "react";
import s from './inputUi.module.scss'
const inputUi = ({ type, text }) => {
  return (
    <form className={s.form}>
      <div className={s.input_wrapper}>
        <input
          className={s.input}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          type="text"
          placeholder=" "
          data-placeholder="E-mail"
          required
        />
        <span className={s.placeholder}>E-mail</span>
      </div>
    </form>
  );
};

export default inputUi;
