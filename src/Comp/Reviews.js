import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Reviews() {
  return (
    <div className='main2'>
      <div className='cont2'>
      <img src='./img/travel.jpg'></img>
      <p></p>
      </div>
      <h3>Testimonial</h3>
      <h4>Top Reviews</h4>
      <p className='des2'>Platea rutrum. Enim quam montes Porttitor nam,Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

      
      <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <div className='rect'>
        <div className='left2'><img src='./img/customer1.png'/></div>
        <div className='Right2'>
        <h5>Paris Tour</h5>
        <p className='star'>⭐⭐⭐⭐⭐</p>
        <p className='comm2'>Platea rutrum. Enim quam montes Porttitor nam,Lorem Ipsum. Proin gravida nibh vel velit. </p>
        <p className='nam1'>Ghyanshyam Bahadur</p>
        </div>
        </div>
    </div>
    <div class='item'>
    <div className='rect'>
    <div className='left2'><img src='./img/customer1.png'/></div>
    <div className='Right2'>
    <h5>Paris Tour</h5>
    <p className='star'>⭐⭐⭐⭐⭐</p>
    <p className='comm2'>Platea rutrum. Enim quam montes Porttitor nam,Lorem Ipsum. Proin gravida nibh vel velit. </p>
    <p className='nam1'>Ghyanshyam Bahadur</p>
    </div>
    </div>
    </div>
    <div class='item'>
    <div className='rect'>
    <div className='left2'><img src='./img/customer1.png'/></div>
    <div className='Right2'>
    <h5>Paris Tour</h5>
    <p className='star'>⭐⭐⭐⭐⭐</p>
    <p className='comm2'>Platea rutrum. Enim quam montes Porttitor nam,Lorem Ipsum. Proin gravida nibh vel velit. </p>
    <p className='nam1'>Ghyanshyam Bahadur</p>
    </div>
    </div>
    </div>
    <div class='item'>
    <div className='rect'>
    <div className='left2'><img src='./img/customer1.png'/></div>
    <div className='Right2'>
    <h5>Paris Tour</h5>
    <p className='star'>⭐⭐⭐⭐⭐</p>
    <p className='comm2'>Platea rutrum. Enim quam montes Porttitor nam,Lorem Ipsum. Proin gravida nibh vel velit. </p>
    <p className='nam1'>Ghyanshyam Bahadur</p>
    </div>
    </div>
    </div>
    </OwlCarousel>
    </div>
  )
}
