import React from 'react'
import styled from "styled-components";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
 
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;


const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color: #be1733;
cursor: pointer;
font-weight: 600;`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const resetFilters = (e) => {
    setFilters({})
  }
  return (
    <Container>
        <Navbar/>
        <Title> {cat}</Title>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size  </Option>
            <Option>20% Assembled Keyboard</Option>
            <Option>60% Assembled Keyboard</Option>
            <Option>65% Assembled Keyboard</Option>
            <Option>75% Assembled Keyboard</Option>
            <Option>80% Assembled Keyboard</Option>
            <Option>100% Assembled Keyboard</Option>  
        </Select>

        <Select name="brand" onChange={handleFilters}>
            <Option disabled selected>
              Brand
            </Option>
            <Option>Tofu</Option>
            <Option>Keychron</Option>
            <Option>DUCKY</Option>
            <Option>LEOPOLD</Option>
            <Option>Razer</Option>
            <Option>KBD</Option>
            <Option>Maxkey</Option>
            <Option>Gateron</Option>
            <Option>CherryMX</Option>
    </Select>
      <Button onClick={resetFilters}>Reset Filters</Button>
        </Filter>
           <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;