import React from "react";
import ShoppingCart from "../../Screens/ShoppingCart/ShoppingCart";
import Search from "../../Screens/SearchButton/Search";
import Login from "../../Screens/Login screen/login";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <i className="fas fa-shopping-basket"></i> Mboga
      </a>

      <nav className={styles.navbar}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#review">Review</a>
        <a href="#blogs">Blogs</a>
      </nav>
{/* 
      <div className={styles.icons}>
        <div className={`fas fa-bars ${styles.menuBtn}`} id="menu-btn"></div>
        <div className={`fas fa-search ${styles.searchBtn}`} id="search-btn">
          <Search />
        </div>
        <div className={`fas fa-shopping-cart ${styles.cartBtn}`} id="cart-btn">
          <ShoppingCart />
        </div>
        <div className={`fas fa-user ${styles.loginBtn}`} id="login-btn">
          <Login />
        </div>
      </div> */}

   
    </header>
  );
}

export default Navbar;
