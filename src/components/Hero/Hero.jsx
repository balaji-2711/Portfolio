import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Balaji</h1>
        <p className={styles.description}>
          {/* I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more! */}
          Enthusiastic Full Stack Developer, passionate about crafting
          innovative solutions and contributing to impactful projects. Eager to
          bring dedication and a fresh perspective to a dynamic team.
        </p>
        <span>
          <a
            href="mailto:smilewithbalaa@email.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>{" "}
          <a
            href="https://drive.google.com/file/d/1wk4sR63YfXiWImZGs6aO_3H36e2cE_NZ/view?usp=sharing"
            className={styles.contactBtnn}
          >
            Resume
          </a>
        </span>
      </div>
      <img
        src={getImageUrl("hero/boy5.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
