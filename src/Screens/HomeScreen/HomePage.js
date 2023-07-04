import React from "react";
import styles from "../HomeScreen/Home.module.css";

function HomeScreen() {
  return (
    <div>
      <section className={styles.home} id="home">
        <div className={styles.content}>
          <h3>
            Fresh and <span>organic</span> products for your home
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          <a href="/" className={styles.btn}>
            shop now
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
