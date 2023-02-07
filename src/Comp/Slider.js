
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


export default function Slider() {
    let [fproduct, setFproduct]=useState([])
    useEffect(()=>{
axios.get('https://dummyjson.com/products')
  .then(res => {
    console.log(res.data.products);
    setFproduct(res.data.products);
  });

    },[])
    
  return (
    <div>
    <OwlCarousel className='owl-theme' loop margin={10} items={4} nav>
    {fproduct.map((a)=>(
    
  <div className="item Slideritem">
  <div className=' mini'>
  <Link to="/Sliderpage"><img src={a.thumbnail}/></Link>
  <Link to='/Sliderpage'><h3>{a.title}</h3></Link>
  <Link to='/Sliderpage'><p className='des'>{a.description}</p></Link>
  
  <Link to='Sliderpage'><h5>Price. {a.price}</h5></Link>
  <p className='under'></p>
  
  </div>
 
  </div>
  



))}
    </OwlCarousel>
    </div>
  )
}
