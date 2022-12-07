import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RotateLoader } from "react-spinners";
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
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

const Products = () => {
  const [womans, setwomans] = useState([]);
  const [men, setMen] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setwomans(json));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setMen(json));
  }, []);

  return (
    <MainContainer>
      <Heading>Popular products</Heading>
      <Container>
        {womans ? (
          womans.map((item) => {
            return <Product item={item} key={item.id} />;
          })
        ) : (
          <RotateLoader
            color="teal"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {men ? (
          men.map((item) => {
            return <Product item={item} key={item.id} />;
          })
        ) : (
          <RotateLoader
            color="teal"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </Container>
    </MainContainer>
  );
};

export default Products;
