import React, { Component,useState } from 'react'

import Style from '../Navbar/Navbar.module.css';
import {Link } from 'react-router-dom';
function Navbar() {
  
  return (
    <>
      <div className={Style.nav}>
      <Link className={Style.topnavitem} exact to="/" >
    
          <div className={Style.logo}>BOOKSHARING</div>   
          </Link>       
                 
                   <ul className={Style.topnav}>
                      <Link className={Style.topnavitem} to="/login" >
                        <li>Login</li>
                      </Link>
                      <Link className={Style.topnavitem} to="/register" >
                        <li>Register</li>
                      </Link>
                    </ul>
                    </div>
                   
           
              
         
       </>
  );
}

export default Navbar;
