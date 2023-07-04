// ProductScreen.js
import React from "react";
import styles from "../Products/Products.module.css";
// import featureImg2 from "../../Images/feature-img-2.png";
import product1 from "../../Images/product-1.png";
import product2 from "../../Images/product-2.png";
import product3 from "../../Images/product-3.png";
import product4 from "../../Images/product-4.png";
import product5 from "../../Images/product-5.png";
import product6 from "../../Images/product-6.png";
import product7 from "../../Images/product-7.png";
import product8 from "../../Images/product-8.png";

function ProductScreen() {
  return (
    <section className={styles.products} id="products">
      <h1 className={styles.heading}>
        Our <span>products</span>
      </h1>

      <div className={`${styles.swiper} ${styles["product-slider"]}`}>
        <div className={styles["swiper-wrapper"]}>
          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product1} alt="" />
            <h3>Fresh oranges</h3>
            <div className={styles.price}>Ksh 20/- - 40/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>

          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product2} alt="" />
            <h3>Fresh onions</h3>
            <div className={styles.price}>Ksh 20/- - 35/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>

          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product3} alt="" />
            <h3>Fresh meat</h3>
            <div className={styles.price}>Ksh 200/- - 1000/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>

          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product4} alt="" />
            <h3>Fresh cabbage</h3>
            <div className={styles.price}>Ksh 25/- - 50/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.swiper} ${styles["product-slider"]}`}>
        <div className={styles["swiper-wrapper"]}>
          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product5} alt="" />
            <h3>Fresh potato</h3>
            <div className={styles.price}>Ksh 300/- - 700/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>

          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product6} alt="" />
            <h3>Fresh avocado</h3>
            <div className={styles.price}>Ksh 30/- - 50/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>

          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product7} alt="" />
            <h3>Fresh carrot</h3>
            <div className={styles.price}>Ksh 40/- - 60/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>

          <div className={`${styles["swiper-slide"]} ${styles.box}`}>
            <img src={product8} alt="" />
            <h3>Lemon</h3>
            <div className={styles.price}>Ksh 25/- - 40/- </div>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className={styles.btn}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductScreen;
