

import React from 'react';

import Logo from './Logo.png'; // Adjust the path as necessary
// import Fade from './FadeSlider'; // Adjust the path as necessary
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";

import "./Navbar.css"; 
import { Link } from 'react-router-dom';

 

function Navbar() {
  return (
    <div>
      {/* <!--Main Navigation--> */}
      <header className='fixed-top' style={{ zIndex: 1000,marginBottom: '0px'}}> 
        {/* <!-- Jumbotron --> */}
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container-fluid ps-3">
            <div className="row align-items-center justify-content-between">
              {/* <!-- Left elements --> */}
            <div className="col-md-4 d-flex justify-content-start mb-3 mb-md-0">
               <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '90px', // Set navbar/logo container height  overflow: 'hidden' // Hide overflow if logo is taller
  }}>

  <a href="/" className="d-block" style={{ padding: 0 }}>
    <img src={Logo} height="120" width="300" alt="Logo" style={{ display: 'block' }} />
  </a>
</div>
              </div>
              {/* <!-- Center elements --> */}
              <div className="col-md-4">
                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                  <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search Your Product" />
             <button
  type="submit"
  className="btn  btn-lg  align-items-center search-btn"
  style={{ marginLeft: '8px' ,borderRadius: '10%' }}
 
  aria-label="Search"
>
  <i className="fas fa-search "></i>
</button>

                </form>
              </div>
              {/* <!-- Right elements --> */}
           
             <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center gap-4">
                {/* Cart */}
  <Link  className="text-reset" to="/cart">
    <i className="fas fa-shopping-cart"></i>
    <span className="badge rounded-pill badge-notification bg-danger"></span>
  </Link>
    

                  {/* User */}
  <div className="dropdown">
    <a data-mdb-dropdown-init className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href='/'
      id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
      <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
        alt="" loading="lazy" />
    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="/">My profile</a></li>
                      <li><a className="dropdown-item" href="/">Settings</a></li>
                      <li><a className="dropdown-item" href="/">Logout</a></li>
                    </ul>
  </div>
                    
   {/* Hamburger */}
  <button
    type="button"
    className="nav-link bg-transparent border-0"
    style={{ fontSize: '1.5rem' }}
    onClick={() => {
      const sidenav = document.getElementById('sidenav-1');
      if (sidenav) sidenav.style.display = 'block';
    }}
    aria-label="Open dashboard"
    >
    <i className="fas fa-bars"></i>
  </button> 
               
             </div>
                 
           
              
              {/* <!-- Right elements --> */}
            </div>
          </div>
        </div>
      
        {/* <!-- Jumbotron --> */}

        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark"  >
          {/* <!-- Container wrapper --> */}
          <div className="container justify-content-start justify-content-md-between">
            {/* <!-- Left links --> */}
           <ul className="navbar-nav flex-row  w-100 text-white justify-content-center" style={{ gap: '80px' }}>
  <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
    <a className="nav-link text-white fw-bold" href="/">Home</a>
  </li>
 <li className="nav-item dropdown me-2 me-lg-0">
  <a
    className="nav-link dropdown-toggle text-white fw-bold"
    href="/"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    CarModels
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/carmodels/suv">SUV</a></li>
    <li><a className="dropdown-item" href="/carmodels/Mpv">Mpv</a></li>
    <li><a className="dropdown-item" href="/carmodels/Hybrid">Hybrid</a></li>
    <li><a className="dropdown-item" href="/carmodels/EV">EV</a></li>
  </ul>
</li>
  <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
    <Link className="nav-link text-white fw-bold" to="/nav/aboutus">AboutUs</Link>
  </li>
  <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
    <Link className="nav-link text-white fw-bold" to="/login">Login</Link>
  </li>
</ul>
            {/* <!-- Left links --> */}

        
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}

        {/* <!-- Sidenav --> */}
        <div id="sidenav-1" data-mdb-sidenav-init="true" className="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
          <ul className="sidenav-menu">
            {/* ...sidenav items... */}
          </ul>
        </div>
        {/* <!-- Sidenav --> */}

        {/* <!-- Background image --> */}
           
     
      
 
        {/* <!-- Background image --> */}
      </header>
      {/* <!--Main Navigation--> */}
{/*       
   <Fade /> */}
    </div>
    
  );
}

export default Navbar;










































































