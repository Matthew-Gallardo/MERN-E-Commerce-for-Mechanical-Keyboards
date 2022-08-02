import { Add, Remove, DeleteOutlineOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import StripeCheckout from 'react-stripe-checkout';
import React, { Fragment, useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "../redux/cartRedux";

import { Link } from "react-router-dom";



const KEY="pk_test_51LHeHlHXaTo1ltDBj6YWzSnfHPsiuZG6FzbeFbw0sfIGqseueOxVPWnWY6JnzNvcFSmoeNAkVG8r4XU8Zx6R65Qs00XuMvIIRM";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;



const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
 
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const StyledDelete = styled(DeleteOutlineOutlined)`
position: relative;
cursor: pointer;

`;

const QuantityButton = styled.button`
`



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory();
  const dispatch = useDispatch()

  const onToken =(token)=>{
  setStripeToken(token);
  };

  const {
    cart: { products, total },
    user: { currentUser }
  } = useSelector((state) => state)
  console.log(products)


  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  const handleDelete = (data) => {
    dispatch(deleteProduct(data))
  }
  return (
   
    <Container>
      <Navbar/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <Link  to="/"style={{ textDecoration: 'none', color:'#000000' }} >
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
        <Info>
        {products?.map((product) => {
                  const {
                    img,
                    title,
                    _id: id,
                    color,
                    quantity,
                    price
                  } = product
                  return (
                    <Fragment key={id +  color}>
                      <Product>
                        <ProductDetail>
                          <Image src={img} alt={title} />
                          <Details>
                          <Fragment key={id + color}></Fragment>
                            <ProductName>
                              <b>{("Title")}: </b>
                              {title}
                            </ProductName>
                            <ProductId>
                              <b>{("ID")}: </b>
                              {id}
                            </ProductId>
                            <ProductColor color={product.color} />
                            <StyledDelete
                        style={{color:"red"}}
                          onClick={() =>
                            handleDelete({
                              id,
                              totalPrice: price * quantity,
                              color
                            })
                          }
                        />

                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <QuantityButton
                              component={ <Add/>}
                              onClick={() => {
                                dispatch(
                                  updateProduct({
                                    id,
                                    quantity: 1,
                                    price,
                                    color
                                  })
                                )
                              }}
                            />
                            <ProductAmount>{quantity}</ProductAmount>
                            <QuantityButton
                              component={ <Remove/>}
                              onClick={() => {
                                if (quantity > 1)
                                  dispatch(
                                    updateProduct({
                                      id,
                                      quantity: -1,
                                      price,
                                      color
                                    })
                                  )
                              }}
                            />
                          </ProductAmountContainer>
                          <ProductPrice>
                            {price * quantity}
                          </ProductPrice>
                        </PriceDetail>
                      </Product>
                    </Fragment>
                  )
                })}
                 <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
           
         <StripeCheckout 
              name= "TEST" 
              description={`Your total is $${cart.total}`}
              image="https://res.cloudinary.com/do3op0083/image/upload/v1656727386/Keyboard%20E-commerce/Product/FULLY_ASSEMBLED_KBDPAD_MARK_II_SOLDERED_MECHANICAL_KEYBOARD_PAD_WITH_NP_PROFILE_PINK_WHITE_KEYCAPS_merkuu.webp"
              billingAddress
              shippingAddress
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
             >
            <Button>
           CHECK OUT NOW
            </Button>
            </StripeCheckout>
           
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
    );
};
export default Cart;