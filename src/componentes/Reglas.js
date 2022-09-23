
import React from 'react';
import '../App.css';
import { useEffect, useState, Fragment } from "react"  
import App from '../App';
import Home from './Home';
import Footer from './Footer';

const Reglas= () => {

    


  return (
    <>



<div className='containerReglas'> 
<h4>BASES Y CONDICIONES</h4>

<br></br>
<h4>REGLAS</h4>
<h5>Se ACEPTAN solo una apuesta por persona</h5>

<br></br>
<h4>USO DE LA WEB</h4>
<h5>Botones : son los celestes con letras rojas</h5>
<h6>Los botones hay que tocarlos 2 veces cada uno.  </h6>
<h6>Luego de hacer cada eleccion en cada fase, tocar 2 veces el boton para pasar a la siguiente fase</h6>

<h5>Modificacion y cambios</h5>
<h6>ante cada cambio y modificacion que se realize hay que tocar el boton ACTUALIZAR TODO!  </h6>


<br></br>
<h4>PUNTOS</h4>
<h6>*  En la web , veras un cuadradito negro con letras verdes que significa los puntos a ganar si coinciden </h6>
<h6> * en fixture : 5 pts por resultado de cada partido (no exacto)  </h6>
<h6>*  en grupos : 5 pts por coincidencia de ubicacion del grupo </h6>
<h6>*  en octavos/cuartos/semi/tercer puesto/final : 10 pts por coincidencia de ubicacion del equipo  </h6>
<h6>*  en campeon : 80 pts por coincidencia   </h6>
<h6> * en subcampeon/tercero/cuarto : 50 pts por coincidencia   </h6>
<h6>*  en mejor jugador / goleador  : 50 pts por coincidencia   </h6>


<br></br>
<h4>SEGUIMIENTO</h4>
<h6> * En esta pagina se hara el seguimiento automaticamente.   </h6>
<h6> * Podras ver quien va mejor , en un grupo o en total </h6>
<h6> * Para poder ver el  Seguimiento de Puntajes , Ve a la seccion  "PUNTAJES" en la barra de navegacion.</h6>


<br></br>
<h4>GRUPOS DE APUESTAS</h4>
<h6>   * El perdedor / Ganador , sera castigado o premiado segun el grupo , ya previamente avisado </h6>
<h6>   * Se armaran los grupos que cada uno quiera   </h6>
<h6>   * .... esto esta a completar ....   </h6>
<h6>   * .... esto esta a completar ....   </h6>
<h6>   * .... esto esta a completar ....   </h6>


<br></br><br></br><br></br>
</div>

<Footer />
</>
  );
}

export default Reglas;