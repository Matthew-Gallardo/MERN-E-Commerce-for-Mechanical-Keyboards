import React from 'react'
import styled from "styled-components";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import "./aboutcss.css";

import { Link } from "react-router-dom";


const Container = styled.div`
`;
const Title = styled.h3`
 
  height: 100%;
text-align: center;
font-size: 40px;
`;
const Info = styled.div`
    padding: 100px;
    text-align: center;
    background: linear-gradient(
    rgba(236, 200, 200, 0.5),
    rgba(255, 255, 255, 0.5)
  ), url("https://res.cloudinary.com/do3op0083/image/upload/v1656649290/Keyboard%20E-commerce/Comm3_xtowz4.jpg");
    background-size: cover;
    align-items: center;
    justify-content: center;
    color: #050505;
    font-size: 15px;
    `
   


const MisVis = styled.div`
   padding: 80px;
    text-align: center;
    font-size: 20px;

`;

const ImageContainer= styled.div`
height: 100%;
text-align: center;
font-size: 20px;
`;

const Image= styled.img`
 text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90;
`;
const CardContainer =styled.div`
`;
const Wrapper = styled.div`
display: flex;

`





const About = () => {
  return (
    <Container>
      <Navbar/>
      <Info>
  <h1 class="Name">ABOUT CAST TYPE</h1>
  <br></br>
  <p>The company Cast Type is young company from Sta. Mesa ,Philippines  that primary sells pre-built mechanical keyboard, key caps, switches, and also provide services regarding keyboard making. It has captured the custom keyboard market thanks to hits such as the Tofu series and KBD series. They have also become the go-to shop for everything mechanical keyboard-related since they also offer keycaps, stabilizers, and other accessories.</p>
  <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
</Info>
<MisVis>
<h2>Mission</h2>
<p>Cast Type  aims to offer affordable computer peripherals and its own services while maintaining high quality for the satisfaction of the future customers. We introduce valuable varieties of highly customizable keyboard parts and accessories to the Filipino people - whether you are budget-wise or the spendy type. In addition, our team speaks for the equal treatment of customers - with respect, right service, and quality.</p>
    <br></br>
<h2>Vision</h2>
<p>Company strives to provide accessibility to and instill interest towards mechanical keyboards among the Filipinos— creating another way for them to establish connections. </p>
    </MisVis>
    <ImageContainer>
         <h2> Organizational Chart</h2>
      <Image src="https://res.cloudinary.com/do3op0083/image/upload/v1659274318/Keyboard%20E-commerce/286944818_1656314148086481_7115333471059596520_n_j3acaf.png"/>
    </ImageContainer>
    
    <Title>The Team</Title>
    <Wrapper>
    
    
      <div class="container1">
  
        <div class="box">
        <div class="image">
           <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659156668/DAA/193479488_5533155456756734_8129241632589931623_n_ra4djf.jpg" alt=""/>
          </div>
          <div class="name_job"> Gallardo, Matthew</div>
         
          <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
          <div class="btns">
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
            >Socials</button>
            <button oonClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}>Email</button>
           
          </div>
        </div>
        <div class="box">
        <div class="image">
           <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659274320/Keyboard%20E-commerce/290724103_436546778390694_2986682224230375963_n_sztbgu.jpg" alt=""/>
          </div>
          <div class="name_job">Bareo, Aljohn Lappay</div>
         
          <p>Hi! I'm one of the developers for this project.If you have any questions or concerns, feel free to contact us!</p> 
          <div class="btns">
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
            >Socials</button>
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
            >Email</button>
          </div>
        </div>
       <div class="box">
        <div class="image">
           <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659274320/Keyboard%20E-commerce/296149461_573931381037601_1230548241058319071_n_jhp5dg.jpg" alt=""/>
          </div>
          <div class="name_job">Clavenis, Christine Mae</div>
          
          <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
          <div class="btns">
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
            >Socials</button>
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
            >Email</button>
          </div>
        </div>
      
          <div class="box">
          <div class="image">
             <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659274324/Keyboard%20E-commerce/296546724_751753266146454_2613222704437513869_n_gok9ed.jpg" alt=""/>
            </div>
            <div class="name_job">Enriques, Earl Cedric</div>
           
            <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
            <div class="btns">
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Socials</button>
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Email</button>
            </div>
          </div>
          <div class="box">
          <div class="image">
             <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659274319/Keyboard%20E-commerce/292275315_1055795935329587_1924551502388686569_n_bksewj.jpg" alt=""/>
            </div>
            <div class="name_job">Mabalot , Jon Ray</div>
           
            <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
            <div class="btns">
              
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Socials</button>
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Email</button>
            </div>
          </div>
          <div class="box">
          <div class="image">
             <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659274321/Keyboard%20E-commerce/293283818_1071234023496021_391954645998063802_n_el1ced.png" alt=""/>
            </div>
            <div class="name_job">Dumaraog, Julian Voltaire</div>
           
            <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
            <div class="btns">
              
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Socials</button>
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Email</button>
            </div>
          </div>
          <div class="box">
          <div class="image">
             <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659274323/Keyboard%20E-commerce/294678811_809367520231226_5850703679283299425_n_ekghzk.jpg" alt=""/>
            </div>
            <div class="name_job">Munsayac, Queencess May</div>
           
            <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
            <div class="btns">
              
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Socials</button>
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Email</button>
            </div>
          </div>
          <div class="box">
          <div class="image">
             <img src="https://res.cloudinary.com/do3op0083/image/upload/v1659277875/181066694_1380517525659592_4460227345626718992_n_qb9k0b.jpg" alt=""/>
            </div>
            <div class="name_job">Celzo, Michael James</div>
           
            <p>Hi! I'm one of the developers for this project. If you have any questions or concerns, feel free to contact us!</p> 
            <div class="btns">
              
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Socials</button>
              <button onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }}
              >Email</button>
            </div>
          </div>
       
         
          </div>
      
          </Wrapper>
    

          <Newsletter/>
           <Footer/>
          </Container>

   )

}

export default About
