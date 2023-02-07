import React from 'react'
import { Link } from 'react-router-dom'


export default function Slider2() {
  return (
    <div className='slidersecond'>
     <h3 >Grab it Fast
     </h3>
     <h4>Deals & Discounts
    </h4>

    <p> Platea rutrum. Enim quam montes Porttitor nam,</p>

    <div className='conte'>


    <div className='boc a'>
    <Link to="/Maldives"><img src='./img/pix.png'/></Link>
    <div className='miniboc one'>
    
    {/*---only for box---*/}
    </div>


    <div className='miniboc'>
    
   <Link to="/Maldives"><h3>Maldives</h3></Link> 
   <Link to="/Maldives"><p>Soneva Jani, Noonu Atol
    Platea rutrum. Enim quam montes Porttitor nam</p></Link>
    <h5>$2000</h5>
   </div>


    </div>
    <div className='boc b'>
    
    <Link to="/Quatar"><img src='./img/Discount2.png'/></Link>
    <div className='miniboc one'>
    
    {/*---only for box---*/}
    </div>


    <div className='miniboc'>
    
    <Link to="/Quatar"><h3>Quatar</h3></Link> 
   <Link to="/Quatar"><p>Soneva Jani, Noonu Atol
    Platea rutrum. Enim quam montes Porttitor nam</p></Link>
    <h5>$3000</h5>
   </div>

    </div>
    <div className='boc c'>c
    <Link to="/Nepal"><img src='./img/Discount3.png'/></Link>
    <div className='miniboc one'>
    
    {/*---only for box---*/}
    </div>


    <div className='miniboc'>
    <Link to="/Nepal"><h3>Nepal</h3></Link> 
   <Link to="/Nepal"><p>Soneva Jani, Noonu Atol
    Platea rutrum. Enim quam montes Porttitor nam</p></Link>
    <h5>$5000</h5>
   </div>

    </div>
    <div className='boc d'>d
    <Link to="/India"><img src='./img/Discount4.png'/></Link>
    <div className='miniboc one'>
    
    {/*---only for box---*/}
    </div>


    <div className='miniboc'>
    <Link to="/India"><h3>India</h3></Link> 
   <Link to="/India"><p>Soneva Jani, Noonu Atol
    Platea rutrum. Enim quam montes Porttitor nam</p></Link>
    <h5>$1000</h5>
   </div>

    </div>
    <div className='boc e'>e
    <Link to="/China"><img src='./img/Discount5.png'/></Link>
    <div className='miniboc one'>
    
    {/*---only for box---*/}
    </div>


    <div className='miniboc'>
    <Link to="/China"><h3>China</h3></Link> 
   <Link to="/China"><p>Soneva Jani, Noonu Atol
    Platea rutrum. Enim quam montes Porttitor nam</p></Link>
    <h5>$1000</h5>
   </div>

    </div>
    <div className='boc f'>f
    <Link to="/Thailand"><img src='./img/Discount6.png'/></Link>
    <div className='miniboc one'>
    
    {/*---only for box---*/}
    </div>


    <div className='miniboc'>
    <Link to="/Thailand"><h3>Thailand</h3></Link> 
   <Link to="/Thailand"><p>Soneva Jani, Noonu Atol
    Platea rutrum. Enim quam montes Porttitor nam</p></Link>
    <h5>$3000</h5>
   </div>

    </div>
   
   
     
    </div>
    </div>
  )
}
