import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Shopcart";
  });
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
