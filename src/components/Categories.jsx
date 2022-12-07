import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const MainContainer = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1`
  font-size: 34px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

const Categories = () => {
  return (
    <MainContainer>
      <Heading>Categories</Heading>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id}></CategoryItem>
        ))}
      </Container>
    </MainContainer>
  );
};

export default Categories;
