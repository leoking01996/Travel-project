
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

export default function Slider3() {
    let [fproduct, setFproduct]=useState([])
    useEffect(()=>{
axios.get('https://dummyjson.com/products')
  .then(res => {
    console.log(res.data.products);
    setFproduct(res.data.products);
  });

    },[])
    
  return (
    <>
    
    <div className='slider3'>
    <center><h3 className='head'>Loved By Everyone
    </h3>
    <h4 className='2head'>Favourite Destination</h4>
    <p className='head3'>Platea rutrum. Enim quam montes Porttitor nam,</p>
    </center>
  

  <OwlCarousel className='owl-theme' loop margin={10} items={3}  nav>
  {fproduct.map((a)=>(
  <div>
  
  <div className="item Slideritem Slideritem1">
<Link to="/Sliderr3page"><img src={a.thumbnail}/></Link>

<div className=' mini mini1'>

<p className='under under1 opa opa1'>



</p>

<p className='under under1'>

<Link to="/Sliderr3page"><h3>{a.title}</h3></Link>
<p className='des des1'>{a.description}</p>

<h5>Price. {a.price}</h5>

</p>

</div>

</div>


  
  </div>






))}
  </OwlCarousel>
  
  </div>
      
    </>
  )
}
