import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/loginimg.png") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;

  &:focus {
    outline: 2px solid teal;
    border: 1px solid teal;
  }
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid teal;
  padding: 15px 20px;
  color: white;
  background-color: teal;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: teal;
    background-color: white;
  }
`;

const LinkContainer = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: teal;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" type="email" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <LinkContainer>
            <Link>Forgot your password?</Link>
          </LinkContainer>
          <LinkContainer>
            <Link to="/register">CREATE A NEW ACCOUNT</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
