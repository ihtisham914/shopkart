import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: 1s ease-out all;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 50px;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid teal;
  background-color: teal;
  transition: 0.3s all;

  &:hover {
    background-color: #00b8b8;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined fontSize="large" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => {
          return (
            <Slide bg={slide.bg} key={slide.id}>
              <ImgContainer>
                <Image src={slide.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Desc>{slide.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined fontSize="large" />
      </Arrow>
    </Container>
  );
};

export default Slider;
