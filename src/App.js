
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState, Fragment } from "react"
import Reglas from './componentes/Reglas';
import Puntajes from './componentes/Puntajes';
import Apuestas from './componentes/Apuestas';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Footer from  './componentes/Footer';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import CartProvider from './context/CartContext';  

function App() {
  return (
    <>
      <CartProvider >
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/Reglas" element={<Reglas />} />
          <Route path="/Puntajes" element={<Puntajes />} /> 
          <Route path="/Apuestas" element={<Apuestas />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} /> 
          <Route path="*" element={<h1>  error 404 - No se encontro la pagina <Link to="/home"> Volver a home</Link> </h1>  } />
        </Routes>

      
        
      </BrowserRouter>
      </CartProvider>

      </>
  );
}

export default App;
