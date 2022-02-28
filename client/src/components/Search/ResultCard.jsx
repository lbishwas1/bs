import React from 'react'
import Style from './SearchResult.module.css';
import Navbar from '../Navbar/Navbar';

const ResultCard = () =>{

   
           return (
            
       <>
                   <div className={Style.resultCard}>
                    <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="" className={Style.bookCover} />
                        <h4>BOOK NAME</h4>
                        <p>Fiction</p>
                        <p>Posted by Hero</p>
                        <p>Today 4mins ago</p>
                        <p>pickup @ KEC</p>
                   </div>

       </>

      
         )
}
 
export default ResultCard;