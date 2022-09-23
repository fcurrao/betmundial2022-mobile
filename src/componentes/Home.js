
import React from 'react';
import '../App.css';
import { useEffect, useState, Fragment } from "react"  
import App from '../App';
import Footer from './Footer';


const Home= () => {

    


  return (
    <>



<div className='containerHome'>  
<p  style={{color:  "white", paddingTop:"5px", textShadow: "2px 2px black", fontWeight:"800", textAlign:"center" , fontSize:"14px"    }}  > BIENVENIDOS!.</p> 
<p  style={{ color:  "white", paddingTop:"5px", textShadow: "2px 2px black", fontWeight:"bold",  textAlign:"center" , fontSize:"12px"  }}  >PARA APOSTAR: PRIMERO LEE LAS REGLAS Y LUEGO VE  A "APOSTAR"</p> 

</div>



<Footer />
</>
  );
}

export default Home;