import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <span style={{ paddingRight: "8px", color: "orange" }}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </span>
        Mboga
      </a>

      <div className={styles.menu} onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#review">Review</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div className={styles.icons}>
        <div className={`${styles.searchBtn}`} id="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} aria-label="search" />
        </div>
        <div className={`${styles.cartBtn}`} id="cart-btn">
          <FontAwesomeIcon icon={faShoppingCart} aria-label="cart" />{" "}
        </div>
        <div className={`${styles.loginBtn}`} id="login-btn">
          <FontAwesomeIcon icon={faUser} aria-label="user" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
