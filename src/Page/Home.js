import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from '../Comp/Slider';
import Search from '../Comp/Search';
import Slider2 from '../Comp/Slider2';
import Slider3 from '../Comp/Slider3';
import Page5 from '../Comp/Page5';
import Reviews from '../Comp/Reviews';
import Form from '../Comp/Form';
import Patner from '../Comp/Patner';


function Home() {
  return (
    <>
    <section className='slider1 my-4 py-4'>


    <OwlCarousel className='owl-theme' loop margin={10}  items={1} nav>
    <div class='item'>
        
        <div className='container '>
            <div className='imgleft'><img src='./img/slider3.png'></img></div>
           
       
            
            </div>
        </div>
        
   
   
    
    <div class='item'>
    <div className='container '>
    <div className='imgleft'><img src='./img/slider3.png'></img></div>
    <div className='txtright'>
   
   
   
    </div>
   </div>
    </div>
    <div class='item'>
    <div className='container '>
    <div className='imgleft'><img src='./img/slider3.png'></img></div>
    
   </div>
    </div>
    </OwlCarousel>
     </section>
     <Search/>
     <Slider/>
     <Slider2/>
     <Slider3/>
     <Page5/>
     <Reviews/>
    
     <Form/>
     <Patner/>
 
     
   

     
    </>
  )
}

export default Home
