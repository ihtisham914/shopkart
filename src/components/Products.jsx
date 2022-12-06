import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const MainContainer = styled.div`
  marign: 44px 0;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Heading = styled.h1`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`;

const Products = () => {
  const [womans, setwomans] = useState([]);
  const [men, setMen] = useState([]);

  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => res.json())
    .then((json) => setwomans(json));

  fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then((res) => res.json())
    .then((json) => setMen(json));
  return (
    <MainContainer>
      <Heading>Popular products</Heading>
      <Container>
        {womans.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
        {men.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </Container>
    </MainContainer>
  );
};

export default Products;
