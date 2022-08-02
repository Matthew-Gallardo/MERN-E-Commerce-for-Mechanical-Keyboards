import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
height: 60px;
top: -16px;
  
`;
const AboutUs = styled.div`
font-size: 15px;
margin-left: 15px;
justify-content: flex-end;
cursor: pointer;
&:hover{
    transform: scale(1.1)
}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Language =styled.span`
  font-size: 14px;
  top: -16px;
  cursor: pointer;
`;
const SearchContainer=styled.div`
border: 1px solid lightgrey;
top: -16px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input=styled.input`
  border: none;
`;
const Logo = styled.img`
 position: relative;

   top: -16px;
  right: -20px;
 
  cursor: pointer;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container> 
      <Wrapper> 
        <Left>
          <Language>EN</Language>
          <SearchContainer>
             <Input/>
            <Search/>
          </SearchContainer>
        </Left>
        <Center>
        <Link to= "/">
                <Logo onClick="/" src= "https://res.cloudinary.com/do3op0083/image/upload/v1659278492/294726112_1061196494521228_1172078721265056757_n_dzo8cw.png"  width="160" />
         </Link>
        </Center>
        <Right>
        <AboutUs>
              <Link  to="/about"style={{ textDecoration: 'none', color:'#000000' }} >
                   ABOUT US
                </Link>
                </AboutUs>
                <Link to="/Register"style={{ textDecoration: 'none', color:'#000000' }}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/Login"style={{ textDecoration: 'none', color:'#000000' }}>
          <MenuItem>SIGN-IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar