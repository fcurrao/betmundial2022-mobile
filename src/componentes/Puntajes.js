
import React from 'react';
import '../App.css';
import { useEffect, useState, Fragment } from "react"  
import App from '../App';
import Footer from './Footer';
import Home from './Home';


const Puntajes= () => {

    


  return (
    <>



<div className='containerPuntajes'> 

<p  style={{ color:  "white", paddingTop:"5px", textShadow: "2px 2px black", fontWeight:"800", textAlign:"center" , fontSize:"14px"  }}  > 
LOS PUNTAJES SON
</p> 


<p  style={{ color: "white", paddingTop:"5px", textShadow: "2px 2px black", fontWeight:"700", textAlign:"left" , fontSize:"14px"  }}  > 
GRUPOS
</p> 

<p  style={{ color:  "white", paddingTop:"5px", textShadow: "2px 2px black", fontWeight:"bold",  textAlign:"left" , fontSize:"12px"  }}  > 
 
USUARIO - PTS
 
-

</p> 

 


</div>

<Footer />
</>
  );
}

export default Puntajes;