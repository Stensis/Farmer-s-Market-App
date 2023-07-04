import React from "react";
import styles from "../Blogs/Blog.module.css";
import blog1 from "../../Images/blog-1.jpg";
import blog2 from "../../Images/blog-2.jpg";
import blog3 from "../../Images/blog-3.jpg";

function Blogs() {
  return (
    <div>
      <section className={styles.blogs} id="blogs">
        <h1 className={styles.heading}>
          Our <span>Blogs</span>
        </h1>

        <div className={styles["box-container"]}>
          <div className={styles.box}>
            <img src={blog1} alt="" />
            <div className={styles.content}>
              <div className={styles.icons}>
                <a href="#">
                  <i className="fas fa-user"></i> By  Irene
                </a>
                <a href="#">
                  <i className="fas fa-calendar"></i> 1st May, 2021
                </a>
              </div>
              <h3>Fresh and organic vegetables and fruits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
              <a href="#" className={styles.btn}>
                read more
              </a>
            </div>
          </div>

          <div className={styles.box}>
            <img src={blog2} alt="" />
            <div className={styles.content}>
              <div className={styles.icons}>
                <a href="#">
                  <i className="fas fa-user"></i> By  Irene
                </a>
                <a href="#">
                  <i className="fas fa-calendar"></i> 1st May, 2021
                </a>
              </div>
              <h3>Fresh and organic vegetables and fruits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
              <a href="#" className={styles.btn}>
                read more
              </a>
            </div>
          </div>

          <div className={styles.box}>
            <img src={blog3} alt="" />
            <div className={styles.content}>
              <div className={styles.icons}>
                <a href="#">
                  <i className="fas fa-user"></i> By  Irene
                </a>
                <a href="#">
                  <i className="fas fa-calendar"></i> 1st May, 2021
                </a>
              </div>
              <h3>Fresh and organic vegetables and fruits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
              <a href="#" className={styles.btn}>
                read more
              </a>
            </div>
          </div>
          {/* Add the rest of the boxes here */}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
