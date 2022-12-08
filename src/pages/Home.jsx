import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
