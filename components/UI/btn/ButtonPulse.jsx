import React from "react";
import s from "./ButtonPulse.module.scss";

const buttonPulse = () => {
  return (
    <div className={s.button_focus_fixed}>
      <button className={s.button_focus}>Узнать
      </button>
    </div>
  );
};

export default buttonPulse;
