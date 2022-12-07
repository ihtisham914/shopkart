import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center
  font-weight: bold;
  text-transform: uppercase;
`;

const Image = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Payment = styled.div`
  display: flex;
`;

const PaymentImg = styled.img`
  width: 150px;
  height: 50px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Image src="/shopkart.png" />
          shopkart.
        </Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad at
          similique voluptates molestiae consequuntur eaque adipisci aspernatur
          eligendi voluptatibus.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> Peshawar, Pakistan
        </ContactItem>
        <ContactItem>
          <Phone /> +923118133026
        </ContactItem>
        <ContactItem>
          <MailOutline /> shaami.khn321@gmail.com
        </ContactItem>
        <Payment>
          <PaymentImg src="/images/visa.png" />
          <PaymentImg src="/images/unionpay.png" />
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
