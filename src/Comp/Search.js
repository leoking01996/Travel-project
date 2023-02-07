import React from 'react'

function Search() {
  return (
    <>
    <div className='cont'>
    <div className='box'>
   <form className="d-flex" role="search">
    <input className="form-control  sch" type="search" placeholder="Search Tour" aria-label="Search" />
  
  </form>
  
    </div>
  
    <div className='box'>
    <form className="d-flex" role="search">
    <input className="form-control sch" type="search" placeholder="Destinatoion" aria-label="Search" />
  
  </form>
    
    </div>
    
    <div className='box '>
    <input className='date' type="date" id="birthday" name="birthday"></input>
  
    </div>
    <div className='box nav-item dropdown'>
    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Tour Type
  </a>
  
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Package</a></li>
    <li><a className="dropdown-item" href="#">Deatination</a></li>
    <li><a className="dropdown-item" href="#">Deals</a></li>
    <li><a className="dropdown-item" href="#">Single Toure</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  
    </div>
    <div className='box lastbox'><center><p className='btn'>Find Tour</p></center></div>
    </div>
  
    </>
  )
}

export default Search
