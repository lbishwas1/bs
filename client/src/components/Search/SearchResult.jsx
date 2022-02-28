import React from 'react'
import Style from './SearchResult.module.css';
import Navbar from '../Navbar/Navbar';
import ResultCard from './ResultCard';

const SearchResult = () =>{

   
           return (
            
       <>

       <Navbar />
       <div className={Style.searchresult}>

     
                <div /*onClick={props.searchPageHandler}*/ className={Style.input}>
                <input   className={Style.getdata} type="text" name="search" placeholder="Enter Book Name" autoComplete="off" />
            
                
            <input  /*onClick={props.searchPageHandler}*/  className={Style.setdata} type="submit" value="Search" />
            </div>
            <div className={Style.btns}>
                <div className={Style.catBtn}>Cat 1</div>
                <div className={Style.catBtn}>Cat 2</div>
                <div className={Style.catBtn}>Cat 3</div>
                <div className={Style.catBtn}>Cat 4</div>
                <div className={Style.catBtn}>Cat 5</div>
            </div>
            <h3>We found this for your searched results</h3>
            <div className={Style.results}>
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
                                             
            </div>
  </div>
       </>

      
         )
}
 
export default SearchResult;