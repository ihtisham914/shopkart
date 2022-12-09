import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
`;

const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
`;

const getLocalData = () => {
  const lists = localStorage.getItem("mycart");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Navbar = () => {
  const [item, setItem] = useState(getLocalData());
  let count = item.length;

  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Image src="/shopkart.png" />
          <Logo>shopkart.</Logo>
        </Center>
        <Right>
          <Link to="/">
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={`${count}`} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wraper>
    </Container>
  );
};

export default Navbar;
