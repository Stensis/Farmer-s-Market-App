import React from "react";
import styles from "../Reviews/Review.module.css";
import man1 from "../../Images/man1.jpg";
import man2 from "../../Images/man2.jpeg";
import man3 from "../../Images/woman1.jpeg";

function Review() {
  return (
    <div>
      <section className={styles.review} id="review">
        <h1 className={styles.heading}>
          Customers <span>reviews</span>{" "}
        </h1>

        <div className={`${styles.swiper} ${styles["review-slider"]}`}>
          <div className={styles["swiper-wrapper"]}>
            <div className={`${styles["swiper-slide"]} ${styles.box}`}>
              <img src={man1} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>Wafula</h3>
              <div className={styles.stars}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className={`${styles["swiper-slide"]} ${styles.box}`}>
              <img src={man2} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>Wafula</h3>
              <div className={styles.stars}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className={`${styles["swiper-slide"]} ${styles.box}`}>
              <img src={man3} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>Wafula</h3>
              <div className={styles.stars}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            {/* Add the rest of the slides here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
