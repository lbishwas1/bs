import React, { Component } from 'react'

import Style from  './Search.module.css';

import {Link } from 'react-router-dom'
const Search =props =>  (
      <div className={Style.searchbar} >
         <h1>Easiest way to find books online</h1>
         <form>
 
 <div /*onClick={props.searchPageHandler}*/ className={Style.input}>
    <input  onClick={props.searchPageHandler}  className={Style.getdata} type="text" name="search" placeholder="Enter Book Name" autoComplete="off" />
 
    
  <input  /*onClick={props.searchPageHandler}*/  className={Style.setdata} type="submit" value="Search" />
  </div>

</form>
<div className={Style.quest}>
  
  <p>Do You Have Used Books?  <Link to="/login">List it here!  </Link></p>

</div>
      </div>
    
  );


export default Search;
