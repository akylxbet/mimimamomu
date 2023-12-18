import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../app/swipert.css";
import { Pagination } from "swiper/modules";
import s from "./swiper.module.scss";
import buttonPulse from "../btn/ButtonPulse";
export default function Swipert() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="swipert">
        <SwiperSlide>
          <div className={s.block}>
            <img className={s.img} src="./cxema1.jpg" alt="img" />
            <div className={s.text}>
              <h1>Услуги</h1>
              <div className={s.desc}>
                <h1>Строительно-монтажные работы</h1>
                <p>Мы применяем только передовые технологии</p>
              </div>
              <div className={s.buttonPulse}>{buttonPulse()}</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.block}>
            <img className={s.img} src="./cxema1.jpg" alt="img" />
            <div className={s.text}>
              <h1>Услуги</h1>
              <div className={s.desc}>
                <h1>Строительно-монтажные работы</h1>
                <p>Мы применяем только передовые технологии</p>
              </div>
              <div className={s.buttonPulse}>{buttonPulse()}</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.block}>
            <img className={s.img} src="./cxema1.jpg" alt="img" />
            <div className={s.text}>
              <h1>Услуги</h1>
              <div className={s.desc}>
                <h1>Строительно-монтажные работы</h1>
                <p>Мы применяем только передовые технологии</p>
              </div>
              <div className={s.buttonPulse}>{buttonPulse()}</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
