import {
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  
  const Container = styled.div`
    display: flex;
    background-color: #b6f1f1;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 10px 0px;
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
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>CAST TYPE</Logo>
          <Desc>
            Founded in 2022 by BSCS 2-5 , CAST TYPES is a manufacturer-dealer from Manila that got the market’s stamp of approval thanks to the excellent typing experience and customizability of their keyboards.They offer everything from budget customs to high-end keyboards.
          </Desc>
         
        </Left>
        <Center>
          <Title>Partners</Title>
          <List>
            <ListItem>AliExpress</ListItem>
            <ListItem>Shopee Philippines</ListItem>
            <ListItem>Keyboard Addicts PH</ListItem>
            <ListItem>Keychron</ListItem>
            <ListItem>DUCKY</ListItem>
            <ListItem>TOFU</ListItem>
            <ListItem>LEOPOLD</ListItem>
            <ListItem>Razer</ListItem>
            <ListItem>Logitech</ListItem>
            <ListItem>Rakk</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contacts</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Sta. Mesa , Manila Philippines
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@TEST.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
 
  