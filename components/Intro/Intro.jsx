import { motion } from "framer-motion";
import AnimatedTextCharacter from "@/components/UI/animatedText/AnimatedText";
import AnimatedTextCharacterParagraph from "@/components/UI/animatedText/AnimatedParagraph";
import AnimatedLast from "@/components/UI/animatedText/AnimatedLast";
import { useEffect, useRef, useState } from "react";
import s from "./Intro.module.scss";
import Link from "next/link";
const Intro = () => {
  const videoRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      videoRef.current.autoplay = true;
    }, 3600);
  }, []);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={s.home}>
      <video
        className={s.video}
        ref={videoRef}
        controls={false}
        muted
        loop
        autoPlay={true}
        style={{ width: "100%" }}
        // onLoadedData={handleVideoLoaded}
      >
        <source src="/bishkek.mp4" />
      </video>

      <div className={s.home_bc}>
        <div>
          <div className={s.intro_title}>
            <AnimatedTextCharacter text={"Добро пожаловать"} />
          </div>
          <div className={s.intro_last_title}>
            <AnimatedLast text={"на сайт водоканала"} />
          </div>
          <div className={s.hr_home}>
            <hr />
          </div>

          <div className={s.text_home}>
            <AnimatedTextCharacterParagraph
              text={"Забота о вас и вашей воде!"}
            />
          </div>

          <Link href="/news">
            <button className={s.arrow_button}>
              О водоканале<span className={s.arrow}></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
