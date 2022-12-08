import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
`;
const Filter = styled.div``;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>NEWEST</Option>
            <Option>Price (high)</Option>
            <Option>Proce (low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
