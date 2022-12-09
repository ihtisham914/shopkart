import { Add, Remove, ArrowBackOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid teal;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  transition: 0.3s all;

  &:hover {
    background-color: white;
    color: teal;
  }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;

  &:hover {
    color: teal;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  flex: 1;
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center
  gap: 20px;
  margin-left:20px;
  color: black;
`;

const BackText = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const Cart = () => {
  let totalAmount = 0;
  let price = 0;
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setCart([json, ...cart]));
    document.title = "Shopkart - product";
  }, [id]);

  return (
    <Container>
      <Link to="/">
        <BackContainer>
          <ArrowBackOutlined />
          <BackText>Back</BackText>
        </BackContainer>
      </Link>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/productlist">
            <TopButton bgcolor="white" color="black">
              CONTINUE SHOPPING
            </TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag (1)</TopText>
            <TopText>Your Whishlist (0)</TopText>
          </TopTexts>
          <TopButton bgcolor="teal" color="white">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((item) => {
              price = item.price;
              totalAmount = 5.9 + price;
              return (
                <Product>
                  <ProductDetail>
                    <Image src={item.image} />
                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        {item.title}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b>
                        {item.id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <Remove />
                      <ProductAmount>1</ProductAmount>
                      <Add />
                    </AmountContainer>
                    <ProductPrice>{item.price}</ProductPrice>
                  </PriceDetail>
                </Product>
              );
            })}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal </SummaryItemText>
              <SummaryItemPrice>$ {price}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping </SummaryItemText>
              <SummaryItemPrice>$ 5.8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total </SummaryItemText>
              <SummaryItemPrice>$ {totalAmount}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
