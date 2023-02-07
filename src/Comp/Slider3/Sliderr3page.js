import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Sliderr3page() {
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
    {fproduct.map((a)=>(
        <div>
        
        <div className="item Slideritem Slideritem1">
      <img src={a.thumbnail}/>
      
      <div className=' mini mini1'>
      
      <p className='under under1 opa opa1'>
      
      
      
      </p>
      
      <p className='under under1'>
      
      <h3>{a.title}</h3>
      <p className='des des1'>{a.description}</p>
      
      <h5>Price. {a.price}</h5>
      
      </p>
      
      </div>
      
      </div>
      
      
        
        </div>
      
      
      
      
      
      
      ))}
    </div>
  )
}
