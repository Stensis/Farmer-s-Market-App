import React from "react";
import Navbar from "./Components/Navbar/navbar";
import HomeScreen from "./Screens/HomeScreen/HomePage";
import Features from "./Screens/Features/Features";
import ProductScreen from "./Screens/Products/Products";
import Categories from "./Screens/Categories/Categories";
import Review from "./Screens/Reviews/Reviews";
import Blogs from "./Screens/Blogs/Blog";
import Footer from "./Screens/Footer/Footer";

function App() {
  return (
    <>
    <p>i am here</p>
      <Navbar />
      <HomeScreen />
      <Features />
      <ProductScreen />
      <Categories />
      <Review />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
