import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <>
   
<div className='main1'>

<center> <form className="d-flex" role="search">
<input className="form-control src1" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-success butn1" type="submit">Search</button>
</form></center>
<div className='left'>

<ul>
 
<Link to="/Home"><li className='btn btn-secondary'>Home </li></Link>
<Link to="/Bolog"><li className='btn btn-secondary'>Blog</li></Link>

<Link to="/Contact"><li className='btn btn-secondary'>Contact</li></Link>

<Link to="/Page1"><li className='btn btn-secondary'>Page</li></Link>

<Link to="/Shop"><li className='btn btn-secondary'>Shop</li></Link>

<Link to="/Tours"><li className='btn btn-secondary'>Tours</li></Link>

<Link to="/Discount"><li className='btn btn-secondary'>Discount</li></Link>
<Link to="/Buynow"><li className='btn btn-secondary'>Buy Now</li></Link>

</ul></div>
</div>

      
    </>
  )
}
