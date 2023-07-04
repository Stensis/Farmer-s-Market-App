import React from "react";
import featureImg1 from "../../Images/feature-img-1.png";
import featureImg2 from "../../Images/feature-img-2.png";
import featureImg3 from "../../Images/feature-img-3.png";
import styles from "../Features/Features.module.css";

function Features() {
  return (
    <section className={styles.features} id="features">
      <h1 className={styles.heading}>
        {" "}
        our <span>features</span>{" "}
      </h1>

      <div className={styles["box-container"]}>
        <div className={styles.box}>
          <img src={featureImg1} alt="" />
          <h3>Fresh and organic</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            earum!
          </p>
          <a href="#" className={styles.btn}>
            read more
          </a>
        </div>

        <div className={styles.box}>
          <img src={featureImg2} alt="" />
          <h3>Free delivery</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            earum!
          </p>
          <a href="#" className={styles.btn}>
            read more
          </a>
        </div>

        <div className={styles.box}>
          <img src={featureImg3} alt="" />
          <h3>Easy payments via Mpesa</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            earum!
          </p>
          <a href="#" className={styles.btn}>
            read more
          </a>
        </div>
      </div>
    </section>
  );
}


export default Features;
