import React, { Component,useState } from 'react'

import Style from '../Landing/Landing.module.css';
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import header from '../../img/header.png';

class Landing extends Component {
 
   
  render() { 
 
    return (  
      <>
      <Navbar /> 
      <div className={Style.hero}>
      <Search />
    <img className={Style.headerimg} src={header} alt="book-shop"/> 
  
</div>

</>
);
  }
}
 
export default Landing;

    

