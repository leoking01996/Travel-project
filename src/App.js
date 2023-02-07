
import './App.css';
import Top from './Comp/Top';
import './Sryle.scss'
import Header from './Comp/Header';
import Home from './Page/Home';
import Footer from './Comp/Footer';
import {Route, Routes } from 'react-router-dom';
import Bolog from './Comp/Header/Bolog';
import Contact from './Comp/Header/Contact';
import Page1 from './Comp/Header/Page1';
import Shop from './Comp/Header/Shop';
import Tours from './Comp/Header/Tours';
import Discount from './Comp/Discount';
import Buynow from './Comp/Header/Buynow';
import Sliderpage from './Slider/Sliderpage';
import Maldives from './Comp/Slider2/Maldives';
import Quatar from './Comp/Slider2/Quatar';
import Nepal from './Comp/Slider2/Nepal';
import India from './Comp/Slider2/India';
import Thailand from './Comp/Slider2/Thailand';
import China from './Comp/Slider2/China';
import Sliderr3page from './Comp/Slider3/Sliderr3page';


function App() {
  return (
    <div className="App">
      <Top/>
      <Header/>
     
      

      <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Bolog" element={<Bolog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Page1" element={<Page1/>} />
      <Route path="/Shop" element={<Shop/>} />
      <Route path="/Tours" element={<Tours/>} />
      <Route path="/Discount" element={<Discount/>} />
      <Route path="/Buynow" element={<Buynow/>} />
      <Route path="/Sliderpage" element={<Sliderpage/>} />

      <Route path="/Maldives" element={<Maldives/>} />

      <Route path="/Quatar" element={<Quatar/>} />

      <Route path="/Nepal" element={<Nepal/>} />

      <Route path="/India" element={<India/>} />

      <Route path="/Thailand" element={<Thailand/>} />

      <Route path="/China" element={<China/>} />

      <Route path="/Sliderr3page" element={<Sliderr3page/>} />


      
      
     
     
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
