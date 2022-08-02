import React from 'react'
import Categories from '../Components/Categories'

import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'


const Home = () => {
  return (
    <div className="Container"> 
    <Announcement/>
    <Navbar/> 
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>
    
  )
}

export default Home