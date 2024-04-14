import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import navprofile from '../../Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-content'>
         <img src={logo} alt='navlogo' className='nav-logo'/>
          <div className='content'>
          <h3>ECOMMERCE</h3>
          <p>Admin Panel</p>
          </div>
      </div>

        <img  src={navprofile} alt='navprofile' className='nav-profile'/>
    </div>
  )
}

export default Navbar;
