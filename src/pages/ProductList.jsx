import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useEffect } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px;
`;

const ProductList = () => {
  useEffect(() => {
    document.title = "Shopcart - Products";
  });
  return (
    <Container>
      <Title>Dresses</Title>
      <Products />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
