import React from "react";
import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles["box-container"]}>
        <div className={styles.box}>
          <h3>
            Mboga<i className="fas fa-shopping-basket"></i>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
            saepe.
          </p>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        {/* Add the rest of the boxes here */}
        <div className={styles.box}>
          <h3>Contact info</h3>
          <a href="#" className={styles.links}>
            <i className="fas fa-phone"></i> +254791798403
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-envelope"></i> irenenjuguna98@gmail.com
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-map-marker-alt"></i> Nairobi,Kenya
          </a>
        </div>

        <div className={styles.box}>
          <h3>Quick links</h3>
          <a href="#" className={styles.links}>
            <i className="fas fa-arrow-right"></i> Home
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-arrow-right"></i> Features
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-arrow-right"></i> Products
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-arrow-right"></i> Categories
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-arrow-right"></i> Review
          </a>
          <a href="#" className={styles.links}>
            <i className="fas fa-arrow-right"></i> Blogs
          </a>
        </div>

        <div className={styles.box}>
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <input
            type="email"
            placeholder="Your email"
            className={styles.email}
          />
          <input type="submit" value="subscribe" className={styles.btn} />
          <img
            src="image/payment.png"
            className={styles["payment-img"]}
            alt=""
          />
        </div>
      </div>

      <div className={styles.credit}>
        <span> Irene njuguna </span> | All rights reserved{" "}
      </div>
    </section>
  );
}

export default Footer;
