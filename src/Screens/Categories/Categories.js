import React from "react";
import styles from "../Categories/Categories.module.css";
import cart1image from "../../Images/cart-img-1.png";
import cart2image from "../../Images/cart-img-2.png";
import cart3image from "../../Images/cart-img-3.png";
import dairy from "../../Images/dairy.jpeg";


function Categories() {
  return (
    <div>
      <section className={styles.categories} id="categories">
        <h1 className={styles.heading}>
          product <span>categories</span>{" "}
        </h1>

        <div className={styles["box-container"]}>
          <div className={styles.box}>
            <img src={cart1image} alt="" />
            <h3>Vegetables</h3>
            <p>Upto 45% off</p>
            <a href="#" className={styles.btn}>
              Shop now
            </a>
          </div>

          <div className={styles.box}>
            <img src={cart2image} alt="" />
            <h3>Fresh fruits</h3>
            <p>Upto 45% off</p>
            <a href="#" className={styles.btn}>
              Shop now
            </a>
          </div>

          <div className={styles.box}>
            <img src={dairy} alt="" />
            <h3>Dairy products</h3>
            <p>Upto 45% off</p>
            <a href="#" className={styles.btn}>
              Shop now
            </a>
          </div>

          <div className={styles.box}>
            <img src={cart3image} alt="" />
            <h3>Fresh meat</h3>
            <p>Upto 45% off</p>
            <a href="#" className={styles.btn}>
              Shop now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
