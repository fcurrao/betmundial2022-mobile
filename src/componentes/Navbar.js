
import React from 'react';
import '../App.css';
import { useEffect, useState, Fragment } from "react" 
import Reglas from './Reglas';
import Puntajes from './Puntajes';
import App from '../App';
import Home from './Home';
import { Link } from 'react-router-dom';


const Navbar= () => {

    


  return (
    <>


<h3 style={{ color: "white", paddingTop:"5px", textShadow: "2px 2px black", textAlign:"center" , backgroundColor: "lightblue" }} >APUESTAS BEBOTES MUNDIAL 2022</h3>
<div style={{ color: "black", textAling:"center" , backgroundColor: "lightblue" }} className='containerNavbar'> 
 <Link to="/Home" style={{ color: "black", textDecoration:"none !important" }}> <p   className="textNavbar">HOME </p></Link> 
 <Link to="/Puntajes" style={{ color: "black", textDecoration:"none !important" }}> <p className="textNavbar">PUNTAJES</p></Link> 
 <Link to="/Reglas" style={{ color: "black", textDecoration:"none !important" }}> <p className="textNavbar"> REGLAS</p></Link> 
 <Link to="/Apuestas" style={{ color: "black", textDecoration:"none !important" }}><p className="textNavbar"> APOSTAR</p></Link> 



</div> 
</>
  );
}

export default Navbar;
