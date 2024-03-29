import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:smilewithbalaa@gmail.com">smilewithbalaa@gmail.com</a>
        </li>
        {/* <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li> */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/balaji-2711" target="_blank">
            github.com/balaji-2711
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/rr.png")} alt="Github icon" />
          <a
            href="https://drive.google.com/file/d/1dZyvHYg6Cs0crbNsxmiLkMNe9kZ0AYkN/view?usp=sharing"
            target="_blank"
          >
            Balaji - Resume
          </a>
        </li>
      </ul>
    </footer>
  );
};
