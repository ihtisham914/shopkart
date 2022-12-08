import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GridLoader } from "react-spinners";
import Product from "./Product";

const MainContainer = styled.div`
  marign: 44px 0;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const LoadContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  font-size: 34px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

const Products = () => {
  const [products, setProducs] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducs(json));
  }, []);

  return (
    <MainContainer>
      <Heading>Popular products</Heading>
      <Container>
        {products ? (
          products.map((item) => {
            return <Product item={item} key={item.id} />;
          })
        ) : (
          <LoadContainer>
            <GridLoader
              color="teal"
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadContainer>
        )}
      </Container>
    </MainContainer>
  );
};

export default Products;
