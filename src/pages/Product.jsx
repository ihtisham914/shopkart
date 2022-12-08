import { Add, ArrowBackOutlined, Remove } from "@material-ui/icons";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  margin-top: 20px;
`;

const LoadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100vw;
`;
const Wrapper = styled.div`
  padding: 50px;
  margin-top: 10px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s all;

  &:hover {
    background-color: white;
    color: black;
  }

  &:active {
    transform: scale(0.9);
  }
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

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    document.title = "Shopkart - product";
  }, [id]);
  console.log(product);
  const [amount, setAmount] = useState(1);
  return (
    <Container>
      <Link to="/">
        <BackContainer>
          <ArrowBackOutlined />
          <BackText>Back</BackText>
        </BackContainer>
      </Link>

      {product ? (
        <Wrapper>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove
                  onClick={() =>
                    amount === 1 ? amount : setAmount(amount - 1)
                  }
                />
                <Amount>{amount}</Amount>
                <Add
                  onClick={() => (amount <= 4 ? setAmount(amount + 1) : amount)}
                />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      ) : (
        <LoadContainer>
          <HashLoader
            color="teal"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </LoadContainer>
      )}
      <Newsletter />
    </Container>
  );
};

export default Product;
