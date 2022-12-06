import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Icon title="add to cart">
          <ShoppingCartOutlined />
        </Icon>
        <Icon title="know more about this product">
          <SearchOutlined />
        </Icon>
        <Icon title="add to favorities">
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
