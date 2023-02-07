
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Sliderpage() {
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
    {fproduct.slice(0,1).map((a)=>(
    <h1 className='my-4 bg-info'>
   <img src={a.thumbnail}/>
    <h3>{a.title}</h3>
   <p className='des'>{a.description}</p>
    
    <h5>Price. {a.price}</h5>
    
    </h1>
    ))}
    </div>
    
  )
}
