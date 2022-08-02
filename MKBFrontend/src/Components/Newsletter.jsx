import React from 'react'
import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
 
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
 
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>SUBSCRIBE TO OUR NEWSLETTER!</Title>
      <Desc>If you are interested in receiving updates and advisories on promos, preorders and on upcoming Mechanical Keyboards, switches and keycaps, <p>Please enter your e-mail address and click on the SUBSCRIBE tab.</p></Desc>
      <InputContainer>
        <Input placeholder="Email Address: " />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;