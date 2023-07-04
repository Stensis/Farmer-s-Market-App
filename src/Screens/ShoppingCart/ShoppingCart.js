import React from "react";
import "../ShoppingCart/ShoppingCart.module.css";

function shoppingCart() {
  return (
    <div class="shopping-cart">
      <div class="box">
        <i class="fas fa-trash"></i>
        <img src="images/cart-img-1.png" alt="" />
        <div class="content">
          <h3>watermelon</h3>
          <span class="price">$4.99/-</span>
          <span class="quantity">qty : 1</span>
        </div>
      </div>
      <div class="total"> total : $19.69/- </div>
      <a href="#" class="btn">
        checkout
      </a>
    </div>
  );
}

export default shoppingCart;
