import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
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
  width: 80%;
  z-index: 2;
`;
const Info = styled.div`
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;
  background-color: #f1f1f1;
  border-radius: 30px;
  backdrop-fiter: blur(20px);
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: black;
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
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Image
        src={item.image}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />

      {show ? (
        <Info onMouseEnter={() => setShow(true)}>
          <Icon title="add to cart">
            <ShoppingCartOutlined />
          </Icon>
          <Link to={`/product/${item.id}`}>
            <Icon title="know more about this product">
              <SearchOutlined />
            </Icon>
          </Link>
          <Icon title="add to favorities">
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Product;
