import styled from 'styled-components'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import React, { useState } from "react";
import { sliderItems } from "../data"

const Container= styled.div`
width:100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;

const Wrapper= styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.slideIndex * -100}vw);
transition: all 1s ease;
`;

const Slide= styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`;
const ImageContainer= styled.div`
height: 100%;
flex: 1;
`;
const Image= styled.img`
height: 85%;
`;
const InfoContainer= styled.div`
flex: 1;
padding: 40px;
`;

const Title = styled.h1`
  font-size: 55px;

`
const Description = styled.p`
  margin: 40px 0px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Arrow= styled.div`
width:50px;
height: 50px;
background-color: #ced9bf;
display: flex;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

  return (
    <Container>
       <Arrow direction="left"onClick={()=>handleClick("left")} >
                <ArrowBackIosOutlined style={{color:"#59302d"}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                        <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>{item.button} </Button>
                </InfoContainer>
              </Slide>
              ))}
            </Wrapper>
       <Arrow direction="right" onClick={()=>handleClick("right")} >
                <ArrowForwardIosOutlined style={{color:"#59302d"}}/>
            </Arrow>
      
    </Container>
  )
}

export default Slider