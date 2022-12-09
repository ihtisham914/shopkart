import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px;
`;

const ProductList = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <Products />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
