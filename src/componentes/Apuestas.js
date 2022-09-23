
import React from 'react';
import '../App.css';
import { useEffect, useState, Fragment } from "react"
import App from '../App';
import Home from './Home';
import Fifa from "../utils/Fifa"
import { Link } from 'react-router-dom';

const Apuestas = () => {
    // login es el parametro del usuario
    const real = {
        nombreuser: "real",
        emailuser: "comoparation@comparation.real",
        // fixture
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: "",
        21: "",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "",
        28: "",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "",
        42: "",
        43: "",
        44: "",
        45: "",
        46: "",
        47: "",
        48: "",
        // grupos
        // a
        primeroa: " ",
        segundoa: " ",
        terceroa: " ",
        cuartoa: " ",
        // b
        primerob: " ",
        segundob: " ",
        tercerob: " ",
        cuartob: " ",
        // c
        primeroc: " ",
        segundoc: " ",
        terceroc: " ",
        cuartoc: " ",
        // d
        primerod: " ",
        segundod: " ",
        tercerod: " ",
        cuardod: " ",
        // e
        primeroe: " ",
        segundoe: " ",
        terceroe: " ",
        cuartoe: " ",
        // f
        primerof: " ",
        segundof: " ",
        tercerof: " ",
        cuartof: " ",
        // g
        primerog: " ",
        segundog: " ",
        tercerog: " ",
        cuartog: " ",
        // h
        primeroh: " ",
        segundoh: " ",
        terceroh: " ",
        cuartoh: " ",
        // octavos
        octavo1: "",
        octavo2: "",
        octavo3: "",
        octavo4: "",
        octavo5: "",
        octavo6: "",
        octavo7: "",
        octavo8: "",
        octavo9: "",
        octavo10: "",
        octavo11: "",
        octavo12: "",
        octavo13: "",
        octavo14: "",
        octavo15: "",
        octavo16: "",
        // cuartos
        cuartos1: "",
        cuartos2: "",
        cuartos3: "",
        cuartos4: "",
        cuartos5: "",
        cuartos6: "",
        cuartos7: "",
        cuartos8: "",
        // semi 
        semi1: "",
        semi2: "",
        semi3: "",
        semi4: "",
        // final
        finalista1: "",
        finalista2: "",
        tercero: "",
        subcampeon: "",
        cuarto: "",
        campeon: "",
        // otros
        bestplayer: "",
        goleador: "",

    }
    
    const fede = {
        nombreuser: "real",
        emailuser: "comoparation@comparation.real",
        // fixture
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: "",
        21: "",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "",
        28: "",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "",
        42: "",
        43: "",
        44: "",
        45: "",
        46: "",
        47: "",
        48: "",
        // grupos
        // a
        primeroa: " ",
        segundoa: " ",
        terceroa: " ",
        cuartoa: " ",
        // b
        primerob: " ",
        segundob: " ",
        tercerob: " ",
        cuartob: " ",
        // c
        primeroc: " ",
        segundoc: " ",
        terceroc: " ",
        cuartoc: " ",
        // d
        primerod: " ",
        segundod: " ",
        tercerod: " ",
        cuardod: " ",
        // e
        primeroe: " ",
        segundoe: " ",
        terceroe: " ",
        cuartoe: " ",
        // f
        primerof: " ",
        segundof: " ",
        tercerof: " ",
        cuartof: " ",
        // g
        primerog: " ",
        segundog: " ",
        tercerog: " ",
        cuartog: " ",
        // h
        primeroh: " ",
        segundoh: " ",
        terceroh: " ",
        cuartoh: " ",
        // octavos
        octavo1: "",
        octavo2: "",
        octavo3: "",
        octavo4: "",
        octavo5: "",
        octavo6: "",
        octavo7: "",
        octavo8: "",
        octavo9: "",
        octavo10: "",
        octavo11: "",
        octavo12: "",
        octavo13: "",
        octavo14: "",
        octavo15: "",
        octavo16: "",
        // cuartos
        cuartos1: "",
        cuartos2: "",
        cuartos3: "",
        cuartos4: "",
        cuartos5: "",
        cuartos6: "",
        cuartos7: "",
        cuartos8: "",
        // semi 
        semi1: "",
        semi2: "",
        semi3: "",
        semi4: "",
        // final
        finalista1: "",
        finalista2: "",
        tercero: "",
        subcampeon: "",
        cuarto: "",
        campeon: "",
        // otros
        bestplayer: "",
        goleador: "",

    }

      
    const charly = {
        nombreuser: "real",
        emailuser: "comoparation@comparation.real",
        // fixture
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: "",
        21: "",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "",
        28: "",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "",
        42: "",
        43: "",
        44: "",
        45: "",
        46: "",
        47: "",
        48: "",
        // grupos
        // a
        primeroa: " ",
        segundoa: " ",
        terceroa: " ",
        cuartoa: " ",
        // b
        primerob: " ",
        segundob: " ",
        tercerob: " ",
        cuartob: " ",
        // c
        primeroc: " ",
        segundoc: " ",
        terceroc: " ",
        cuartoc: " ",
        // d
        primerod: " ",
        segundod: " ",
        tercerod: " ",
        cuardod: " ",
        // e
        primeroe: " ",
        segundoe: " ",
        terceroe: " ",
        cuartoe: " ",
        // f
        primerof: " ",
        segundof: " ",
        tercerof: " ",
        cuartof: " ",
        // g
        primerog: " ",
        segundog: " ",
        tercerog: " ",
        cuartog: " ",
        // h
        primeroh: " ",
        segundoh: " ",
        terceroh: " ",
        cuartoh: " ",
        // octavos
        octavo1: "",
        octavo2: "",
        octavo3: "",
        octavo4: "",
        octavo5: "",
        octavo6: "",
        octavo7: "",
        octavo8: "",
        octavo9: "",
        octavo10: "",
        octavo11: "",
        octavo12: "",
        octavo13: "",
        octavo14: "",
        octavo15: "",
        octavo16: "",
        // cuartos
        cuartos1: "",
        cuartos2: "",
        cuartos3: "",
        cuartos4: "",
        cuartos5: "",
        cuartos6: "",
        cuartos7: "",
        cuartos8: "",
        // semi 
        semi1: "",
        semi2: "",
        semi3: "",
        semi4: "",
        // final
        finalista1: "",
        finalista2: "",
        tercero: "",
        subcampeon: "",
        cuarto: "",
        campeon: "",
        // otros
        bestplayer: "",
        goleador: "",

    }

      
    const chris = {
        nombreuser: "real",
        emailuser: "comoparation@comparation.real",
        // fixture
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: "",
        21: "",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "",
        28: "",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "",
        42: "",
        43: "",
        44: "",
        45: "",
        46: "",
        47: "",
        48: "",
        // grupos
        // a
        primeroa: " ",
        segundoa: " ",
        terceroa: " ",
        cuartoa: " ",
        // b
        primerob: " ",
        segundob: " ",
        tercerob: " ",
        cuartob: " ",
        // c
        primeroc: " ",
        segundoc: " ",
        terceroc: " ",
        cuartoc: " ",
        // d
        primerod: " ",
        segundod: " ",
        tercerod: " ",
        cuardod: " ",
        // e
        primeroe: " ",
        segundoe: " ",
        terceroe: " ",
        cuartoe: " ",
        // f
        primerof: " ",
        segundof: " ",
        tercerof: " ",
        cuartof: " ",
        // g
        primerog: " ",
        segundog: " ",
        tercerog: " ",
        cuartog: " ",
        // h
        primeroh: " ",
        segundoh: " ",
        terceroh: " ",
        cuartoh: " ",
        // octavos
        octavo1: "",
        octavo2: "",
        octavo3: "",
        octavo4: "",
        octavo5: "",
        octavo6: "",
        octavo7: "",
        octavo8: "",
        octavo9: "",
        octavo10: "",
        octavo11: "",
        octavo12: "",
        octavo13: "",
        octavo14: "",
        octavo15: "",
        octavo16: "",
        // cuartos
        cuartos1: "",
        cuartos2: "",
        cuartos3: "",
        cuartos4: "",
        cuartos5: "",
        cuartos6: "",
        cuartos7: "",
        cuartos8: "",
        // semi 
        semi1: "",
        semi2: "",
        semi3: "",
        semi4: "",
        // final
        finalista1: "",
        finalista2: "",
        tercero: "",
        subcampeon: "",
        cuarto: "",
        campeon: "",
        // otros
        bestplayer: "",
        goleador: "",

    }

      
    const damian = {
        nombreuser: "real",
        emailuser: "comoparation@comparation.real",
        // fixture
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: "",
        18: "",
        19: "",
        20: "",
        21: "",
        22: "",
        23: "",
        24: "",
        25: "",
        26: "",
        27: "",
        28: "",
        29: "",
        30: "",
        31: "",
        32: "",
        33: "",
        34: "",
        35: "",
        36: "",
        37: "",
        38: "",
        39: "",
        40: "",
        41: "",
        42: "",
        43: "",
        44: "",
        45: "",
        46: "",
        47: "",
        48: "",
        // grupos
        // a
        primeroa: " ",
        segundoa: " ",
        terceroa: " ",
        cuartoa: " ",
        // b
        primerob: " ",
        segundob: " ",
        tercerob: " ",
        cuartob: " ",
        // c
        primeroc: " ",
        segundoc: " ",
        terceroc: " ",
        cuartoc: " ",
        // d
        primerod: " ",
        segundod: " ",
        tercerod: " ",
        cuardod: " ",
        // e
        primeroe: " ",
        segundoe: " ",
        terceroe: " ",
        cuartoe: " ",
        // f
        primerof: " ",
        segundof: " ",
        tercerof: " ",
        cuartof: " ",
        // g
        primerog: " ",
        segundog: " ",
        tercerog: " ",
        cuartog: " ",
        // h
        primeroh: " ",
        segundoh: " ",
        terceroh: " ",
        cuartoh: " ",
        // octavos
        octavo1: "",
        octavo2: "",
        octavo3: "",
        octavo4: "",
        octavo5: "",
        octavo6: "",
        octavo7: "",
        octavo8: "",
        octavo9: "",
        octavo10: "",
        octavo11: "",
        octavo12: "",
        octavo13: "",
        octavo14: "",
        octavo15: "",
        octavo16: "",
        // cuartos
        cuartos1: "",
        cuartos2: "",
        cuartos3: "",
        cuartos4: "",
        cuartos5: "",
        cuartos6: "",
        cuartos7: "",
        cuartos8: "",
        // semi 
        semi1: "",
        semi2: "",
        semi3: "",
        semi4: "",
        // final
        finalista1: "",
        finalista2: "",
        tercero: "",
        subcampeon: "",
        cuarto: "",
        campeon: "",
        // otros
        bestplayer: "",
        goleador: "",

    }




    const empate = "empate"
    let counter = 0
    const [primeroa, setPrimeroa] = useState()
    const [primerob, setPrimerob] = useState()
    const [primeroc, setPrimeroc] = useState()
    const [primerod, setPrimerod] = useState()
    const [primeroe, setPrimeroe] = useState()
    const [primerof, setPrimerof] = useState()
    const [primerog, setPrimerog] = useState()
    const [primeroh, setPrimeroh] = useState()
    const [segundoa, setSegundoa] = useState()
    const [segundob, setSegundob] = useState()
    const [segundoc, setSegundoc] = useState()
    const [segundod, setSegundod] = useState()
    const [segundoe, setSegundoe] = useState()
    const [segundof, setSegundof] = useState()
    const [segundog, setSegundog] = useState()
    const [segundoh, setSegundoh] = useState()
    const [octavo1, setOctavo1] = useState()
    const [octavo2, setOctavo2] = useState()
    const [octavo3, setOctavo3] = useState()
    const [octavo4, setOctavo4] = useState()
    const [octavo5, setOctavo5] = useState()
    const [octavo6, setOctavo6] = useState()
    const [octavo7, setOctavo7] = useState()
    const [octavo8, setOctavo8] = useState()
    const [cuartos1, setCuartos1] = useState()
    const [cuartos2, setCuartos2] = useState()
    const [cuartos3, setCuartos3] = useState()
    const [cuartos4, setCuartos4] = useState()
    const [semi1, setSemi1] = useState()
    const [semi2, setSemi2] = useState()
    const [final1, setFinal1] = useState()
    const [final2, setFinal2] = useState()
    const [honor1, setHonor1] = useState()
    const [honor2, setHonor2] = useState()
    const [campeon, setCampeon] = useState()
    const [subcampeon, setSubcampeon] = useState()
    const [tercero, setTercero] = useState()
    const [cuarto, setCuarto] = useState()
    const [ejemplo1, setEjemplo1] = useState()
    const [ejemplo2, setEjemplo2] = useState()
    const [goleador, setGoleador] = useState()
    const [bestplayer, setBestplayer] = useState()
    const [mundialFixture, setMundialFixture] = useState([]);
    const [estaCargado, setEstaCargado] = useState(false);
    const [verpuntajes, setVerpuntajes] = useState(false)
    const [listogrupos, setListogrupos] = useState(true);
    const [listooctavos, setListooctavos] = useState(true);
    const [fixturever, setFixturever] = useState(true);
    const [mostrarBoton, setMostrarBoton] = useState(false);
    const [habilitarBoton, setHabilitarBoton] = useState(false);
    const [verreglas2, setVerreglas2] = useState(false);
    const [finalFixture, setFinalFixture] = useState([]);
    const arrayfinal = []
    const arraygrupos = []
    const arraymundial = []
    const emailapostador = document.createElement("email").value
    const [login, setLogin] = useState()
    const [aceptadologin, setAceptadologin] = useState(false)





    const fifacopa = async () => {

        const fixturemundialistas = await Fifa.map((partido) => {
            arraymundial.push(partido)

            if (partido.HomeTeam == 'To be announced' || partido.HomeTeam == '1A' || partido.HomeTeam == '2A' || partido.HomeTeam == '1B' || partido.HomeTeam == '2B' || partido.HomeTeam == '1C' || partido.HomeTeam == '2C' || partido.HomeTeam == '1D' || partido.HomeTeam == '2D' || partido.HomeTeam == '1E' || partido.HomeTeam == '2E' || partido.HomeTeam == '1F' || partido.HomeTeam == '2F' || partido.HomeTeam == '1G' || partido.HomeTeam == '2G' || partido.HomeTeam == '1H' || partido.HomeTeam == '2H') {
                arrayfinal.push(partido)
            } else if (partido.AwayTeam == '1A' || partido.AwayTeam == '2A' || partido.AwayTeam == '1B' || partido.AwayTeam == '2B' || partido.AwayTeam == '1C' || partido.AwayTeam == '2C' || partido.AwayTeam == '1D' || partido.AwayTeam == '2D' || partido.AwayTeam == '1E' || partido.AwayTeam == '2E' || partido.AwayTeam == '1F' || partido.AwayTeam == '2F' || partido.AwayTeam == '1G' || partido.AwayTeam == '2G' || partido.AwayTeam == '1H' || partido.AwayTeam == '2H') {
                arrayfinal.push(partido)
            } else {
                arraygrupos.push(partido)
            }

        })

        setMundialFixture(arraygrupos)
        setFinalFixture(arrayfinal)
        setAceptadologin(true)
    }



    const verReglas = () => {
        setVerreglas2(true)
    }


    const verSeguimientoPuntajes = () => {

        if (verpuntajes == true) {
            setVerpuntajes(false)
        } else {
            setVerpuntajes(true)
        }
    }



    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    // COMO AGREGAR O SACAR CLASES !!
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class
    //
    //
    //
    //
    // TODO EN UN MISMO FORMULARIO!!! 
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////





    const mostrarfixture = () => {

        if (fixturever == false) {
            setFixturever(true)
        } else if (fixturever == true) {
            setFixturever(false)
        }

    }

    const tomarvaloresgrupos = () => {
        setPrimeroa(document.getElementById('1A').value)
        setPrimerob(document.getElementById('1B').value)
        setPrimeroc(document.getElementById('1C').value)
        setPrimerod(document.getElementById('1D').value)
        setPrimeroe(document.getElementById('1E').value)
        setPrimerof(document.getElementById('1F').value)
        setPrimerog(document.getElementById('1G').value)
        setPrimeroh(document.getElementById('1H').value)
        setSegundoa(document.getElementById('2A').value)
        setSegundob(document.getElementById('2B').value)
        setSegundoc(document.getElementById('2C').value)
        setSegundod(document.getElementById('2D').value)
        setSegundoe(document.getElementById('2E').value)
        setSegundof(document.getElementById('2F').value)
        setSegundog(document.getElementById('2G').value)
        setSegundoh(document.getElementById('2H').value)
        if (listogrupos == false) {
            setListogrupos(true)
        }
    }

    const tomarvaloresoctavos = () => {
        setOctavo1(document.getElementById('oct1').value)
        setOctavo2(document.getElementById('oct2').value)
        setOctavo3(document.getElementById('oct3').value)
        setOctavo4(document.getElementById('oct4').value)
        setOctavo5(document.getElementById('oct5').value)
        setOctavo6(document.getElementById('oct6').value)
        setOctavo7(document.getElementById('oct7').value)
        setOctavo8(document.getElementById('oct8').value)

    }







    const ponerEnSemi = () => {

        setCuartos1(document.getElementById('cuartos1').value)
        setCuartos2(document.getElementById('cuartos2').value)
        setCuartos3(document.getElementById('cuartos3').value)
        setCuartos4(document.getElementById('cuartos4').value)


    }
    // if (  getid ( sm1 == {cuartos1} es finalista , else es honor1 , y cuarto 2 es finalista, y si no es honor1))

    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////



const ponerDatosEnUsuario = () => {
    
    user.primeroa= {primeroa}
    user.emailuser = login

    console.log("usuario primeroa:" , user.primeroa )
    console.log("usuario nombre:" , user.nombreuser )
    console.log("usuario email :" , user.emailuser )
}

///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////


    const ponerenFinales = () => {
        // setCuartos1(document.getElementById('final1').value)
        // setCuartos2(document.getElementById('cuarto2').value)
        // setCuartos1(document.getElementById('cuarto1').value)
        // setCuartos2(document.getElementById('cuarto2').value)

        setSemi1(document.getElementById('sm1').value)
        setSemi2(document.getElementById('sm2').value)
        if (semi1 == cuartos1) {
            setFinal1(semi1)
            setHonor1(cuartos2)
        } if (semi1 == cuartos2) {
            setFinal1(semi1)
            setHonor1(cuartos1)
        }

        if (semi2 == cuartos3) {
            setFinal2(semi2)
            setHonor2(cuartos4)
        } if (semi2 == cuartos4) {
            setFinal2(semi2)
            setHonor2(cuartos3)
        }


    }

    const seRepite = () => {

        setEjemplo1(document.getElementById('final').value)
        if (ejemplo1 == final1) {
            setCampeon(final1)
            setSubcampeon(final2)
        } if (ejemplo1 == final2) {
            setCampeon(final2)
            setSubcampeon(final1)
        }

        setEjemplo2(document.getElementById('honor').value)
        if (ejemplo2 == honor1) {
            setTercero(honor1)
            setCuarto(honor2)
        } if (ejemplo2 == honor2) {
            setTercero(honor2)
            setCuarto(honor1)
        }
    }

    const ponerCampeon = () => {
        seRepite()
        setEjemplo1(document.getElementById('final').value)
        if (ejemplo1 == final1) {
            setCampeon(final1)
            setSubcampeon(final2)
        } if (ejemplo1 == final2) {
            setCampeon(final2)
            setSubcampeon(final1)
        }

        setEjemplo2(document.getElementById('honor').value)
        if (ejemplo2 == honor1) {
            setTercero(honor1)
            setCuarto(honor2)
        } if (ejemplo2 == honor2) {
            setTercero(honor2)
            setCuarto(honor1)
        }

    }


    const ponerGolyBest = () => {
        setGoleador(document.getElementById('goleador').value)
        setBestplayer(document.getElementById('bestplayer').value)
        ponerenFinales()
        seRepite()
        ponerCampeon()
        tomarvaloresgrupos()
        tomarvaloresoctavos()
        ponerEnSemi()
        ponerDatosEnUsuario()
    }


    const actualizar = () => {
        ponerGolyBest()
        ponerenFinales()
        seRepite()
        ponerCampeon()
        tomarvaloresgrupos()
        tomarvaloresoctavos()
        ponerEnSemi()
        ponerDatosEnUsuario()
    }


    const logincorrecto = () => {
        console.log("login", login)
        if (login != "fcurrao@gmail.com" ||
            login != "fcurrao@gmail.com" ||
            login != "fcurrao@gmail.com" ||
            login != "fcurrao@gmail.com" ||
            login != "fcurrao@gmail.com"


        ) {

            setEstaCargado(true)
        } else {
            alert("este usuario ya aposto")
        }
    }

    const checknotrepeat = () => {
        setLogin(document.getElementById('loginduda').value)
        setHabilitarBoton(true)
    }




    const volveraHome = () => {
        setVerpuntajes(false)

    }













    const confirmaremail = () => {
        actualizar()
        setMostrarBoton(true)
        ponerDatosEnUsuario()
    }




    const enviarFormulario = () => {
        const emailapostador = document.getElementById("email").value
    }






















































































    return (
        <div className='containerApuestas'>


{/* ///////////////////////////////////////////////////////////////////
para probar cosas
/////////////////////////////////////////////// */}

{/* {console.log(user.nombre)}
<button onClick={()=>ponerDatosEnUsuario()}> probando boton11 </button>
                                mostrame nombre del usuario
                                {user.nombre}
                                mostrame el primero del gruo A de {user.nombre} :: {user.primeroa} */}


{/* ///////////////////////////////////////////////////////////////////
para probar cosas
/////////////////////////////////////////////// */}




            {(estaCargado == false ? <>


                <div className='containerInicio1'>
                    <h5>Si ya apostaste, NO te dejara ingresar !</h5>
                    <h5> Recuerda que solo es 1 apuesta por persona</h5>



                    <div style={{ paddingTop: "5px" }}>
                        {(habilitarBoton == true ? <>  <button onClick={() => logincorrecto()}>Ingresar</button>
                            {/* <Link to="/Home"> <button>Volver</button></Link>  */}
                        </> : <>





                            <h3> INGRESA TU EMAIL. </h3>


                            <input type="mail" id="loginduda" placeholder='email de login..' />
                            <button onClick={() => checknotrepeat()}>Check</button></>)}
                    </div>




                </div>
            </> : <>


                {(aceptadologin == true ? <>
                    <section className='todo' >

                        <h2 style={{ background: "white", width: "100%", textAlign: "center" }} > Formulario de apuesta
                        </h2>


















































                        {/* fixture */}






                        {(fixturever == true ? <>

                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='section2'>
                                <h2  > FIXTURE
                                </h2>
                                <div className='pts'> 5pts cada uno</div>
                               
                                {mundialFixture.map((partido) => {
                                    return (
                                        <>

                                            <div style={{ display: "none" }}> {counter = counter + 1} </div>
                                            <div name='octavos_1' style={{ width: "max-content" }} > {partido.HomeTeam} || vs || {partido.AwayTeam}   || ► <select id={counter} type='text' name={counter}>
                                                <option> {partido.HomeTeam} </option>
                                                <option> {partido.AwayTeam}  </option>
                                                <option> {empate}   </option>
                                            </select>   <br></br><br></br></div>



                                            {/* <div name='as' style={{ width: "max-content", margin: "5px" }} >
                      <input type="radio" name="check" />  {partido.HomeTeam} || EMPATE  <input type="radio" name="check" /> ||   {partido.AwayTeam}   <input type="radio" name="check" /> <br></br>
                    </div> */}




                                        </>
                                    )

                                })


                                }



                            </section>


                            <h3 style={{ background: "white", width: "100%", textAlign: "center" }} > COMO SE UBICARAN EN LOS GRUPOS ??</h3>

                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='section1 www'>
                                <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}    >

                                    <h2 className='www' > GRUPOS MUNDIAL
                                    </h2>
                                    <div id="Grupos" className='www' > <br></br>
                                        <div className='pts'> 5pts cada coincidencia</div>

                                        {/* GRUPOA A */}
                                        <p className='titulo2'> {mundialFixture[0].Group}</p>
                                        1ero<select id="1A">
                                            <option > {mundialFixture[0].HomeTeam} </option>
                                            <option > {mundialFixture[0].AwayTeam} </option>
                                            <option> {mundialFixture[2].HomeTeam} </option>
                                            <option> {mundialFixture[2].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2A">
                                            <option> {mundialFixture[0].HomeTeam} </option>
                                            <option> {mundialFixture[0].AwayTeam} </option>
                                            <option> {mundialFixture[2].HomeTeam} </option>
                                            <option> {mundialFixture[2].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[0].HomeTeam} </option>
                                            <option> {mundialFixture[0].AwayTeam} </option>
                                            <option> {mundialFixture[2].HomeTeam} </option>
                                            <option> {mundialFixture[2].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[0].HomeTeam} </option>
                                            <option> {mundialFixture[0].AwayTeam} </option>
                                            <option> {mundialFixture[2].HomeTeam} </option>
                                            <option> {mundialFixture[2].AwayTeam} </option>
                                        </select> <br></br><br></br>

                                        {/* GRUPOA B */}
                                        <p className='titulo2'> {mundialFixture[1].Group}</p>
                                        1ero<select id="1B">
                                            <option> {mundialFixture[1].HomeTeam} </option>
                                            <option> {mundialFixture[1].AwayTeam} </option>
                                            <option> {mundialFixture[3].HomeTeam} </option>
                                            <option> {mundialFixture[3].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2B">
                                            <option> {mundialFixture[1].HomeTeam} </option>
                                            <option> {mundialFixture[1].AwayTeam} </option>
                                            <option> {mundialFixture[3].HomeTeam} </option>
                                            <option> {mundialFixture[3].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[1].HomeTeam} </option>
                                            <option> {mundialFixture[1].AwayTeam} </option>
                                            <option> {mundialFixture[3].HomeTeam} </option>
                                            <option> {mundialFixture[3].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[1].HomeTeam} </option>
                                            <option> {mundialFixture[1].AwayTeam} </option>
                                            <option> {mundialFixture[3].HomeTeam} </option>
                                            <option> {mundialFixture[3].AwayTeam} </option>
                                        </select> <br></br><br></br>


                                        {/* GRUPOA C */}
                                        <p className='titulo2'>{mundialFixture[4].Group} </p>
                                        1ero<select id="1C">
                                            <option> {mundialFixture[4].HomeTeam} </option>
                                            <option> {mundialFixture[4].AwayTeam} </option>
                                            <option> {mundialFixture[6].HomeTeam} </option>
                                            <option> {mundialFixture[6].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2C">
                                            <option> {mundialFixture[4].HomeTeam} </option>
                                            <option> {mundialFixture[4].AwayTeam} </option>
                                            <option> {mundialFixture[6].HomeTeam} </option>
                                            <option> {mundialFixture[6].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[4].HomeTeam} </option>
                                            <option> {mundialFixture[4].AwayTeam} </option>
                                            <option> {mundialFixture[6].HomeTeam} </option>
                                            <option> {mundialFixture[6].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[4].HomeTeam} </option>
                                            <option> {mundialFixture[4].AwayTeam} </option>
                                            <option> {mundialFixture[6].HomeTeam} </option>
                                            <option> {mundialFixture[6].AwayTeam} </option>
                                        </select> <br></br><br></br>

                                        {/* GRUPOA D */}
                                        <p className='titulo2'>{mundialFixture[5].Group} </p>
                                        1ero<select id="1D">
                                            <option> {mundialFixture[5].HomeTeam} </option>
                                            <option> {mundialFixture[5].AwayTeam} </option>
                                            <option> {mundialFixture[7].HomeTeam} </option>
                                            <option> {mundialFixture[7].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2D">
                                            <option> {mundialFixture[5].HomeTeam} </option>
                                            <option> {mundialFixture[5].AwayTeam} </option>
                                            <option> {mundialFixture[7].HomeTeam} </option>
                                            <option> {mundialFixture[7].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[5].HomeTeam} </option>
                                            <option> {mundialFixture[5].AwayTeam} </option>
                                            <option> {mundialFixture[7].HomeTeam} </option>
                                            <option> {mundialFixture[7].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[5].HomeTeam} </option>
                                            <option> {mundialFixture[5].AwayTeam} </option>
                                            <option> {mundialFixture[7].HomeTeam} </option>
                                            <option> {mundialFixture[7].AwayTeam} </option>
                                        </select> <br></br><br></br>

                                        {/* GRUPOA E */}
                                        <p className='titulo2'>{mundialFixture[9].Group} </p>
                                        1ero<select id="1E">
                                            <option> {mundialFixture[9].HomeTeam} </option>
                                            <option> {mundialFixture[9].AwayTeam} </option>
                                            <option> {mundialFixture[10].HomeTeam} </option>
                                            <option> {mundialFixture[10].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2E">
                                            <option> {mundialFixture[9].HomeTeam} </option>
                                            <option> {mundialFixture[9].AwayTeam} </option>
                                            <option> {mundialFixture[10].HomeTeam} </option>
                                            <option> {mundialFixture[10].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[9].HomeTeam} </option>
                                            <option> {mundialFixture[9].AwayTeam} </option>
                                            <option> {mundialFixture[10].HomeTeam} </option>
                                            <option> {mundialFixture[10].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[9].HomeTeam} </option>
                                            <option> {mundialFixture[9].AwayTeam} </option>
                                            <option> {mundialFixture[10].HomeTeam} </option>
                                            <option> {mundialFixture[10].AwayTeam} </option>
                                        </select> <br></br><br></br>

                                        {/* GRUPOA F */}
                                        <p className='titulo2'>{mundialFixture[8].Group} </p>
                                        1ero<select id="1F">
                                            <option> {mundialFixture[8].HomeTeam} </option>
                                            <option> {mundialFixture[8].AwayTeam} </option>
                                            <option> {mundialFixture[11].HomeTeam} </option>
                                            <option> {mundialFixture[11].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2F">
                                            <option> {mundialFixture[8].HomeTeam} </option>
                                            <option> {mundialFixture[8].AwayTeam} </option>
                                            <option> {mundialFixture[11].HomeTeam} </option>
                                            <option> {mundialFixture[11].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[8].HomeTeam} </option>
                                            <option> {mundialFixture[8].AwayTeam} </option>
                                            <option> {mundialFixture[11].HomeTeam} </option>
                                            <option> {mundialFixture[11].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[8].HomeTeam} </option>
                                            <option> {mundialFixture[8].AwayTeam} </option>
                                            <option> {mundialFixture[11].HomeTeam} </option>
                                            <option> {mundialFixture[11].AwayTeam} </option>
                                        </select> <br></br><br></br>

                                        {/* GRUPOA G */}
                                        <p className='titulo2'>{mundialFixture[12].Group} </p>
                                        1ero<select id="1G">
                                            <option> {mundialFixture[12].HomeTeam} </option>
                                            <option> {mundialFixture[12].AwayTeam} </option>
                                            <option> {mundialFixture[15].HomeTeam} </option>
                                            <option> {mundialFixture[15].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2G">
                                            <option> {mundialFixture[12].HomeTeam} </option>
                                            <option> {mundialFixture[12].AwayTeam} </option>
                                            <option> {mundialFixture[15].HomeTeam} </option>
                                            <option> {mundialFixture[15].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[12].HomeTeam} </option>
                                            <option> {mundialFixture[12].AwayTeam} </option>
                                            <option> {mundialFixture[15].HomeTeam} </option>
                                            <option> {mundialFixture[15].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[12].HomeTeam} </option>
                                            <option> {mundialFixture[12].AwayTeam} </option>
                                            <option> {mundialFixture[15].HomeTeam} </option>
                                            <option> {mundialFixture[15].AwayTeam} </option>
                                        </select> <br></br><br></br>

                                        {/* GRUPOA H */}
                                        <p className='titulo2'>{mundialFixture[14].Group} </p>
                                        1ero<select id="1H">
                                            <option> {mundialFixture[13].HomeTeam} </option>
                                            <option> {mundialFixture[13].AwayTeam} </option>
                                            <option> {mundialFixture[14].HomeTeam} </option>
                                            <option> {mundialFixture[14].AwayTeam} </option>
                                        </select> <br></br>
                                        2do<select id="2H">
                                            <option> {mundialFixture[13].HomeTeam} </option>
                                            <option> {mundialFixture[13].AwayTeam} </option>
                                            <option> {mundialFixture[14].HomeTeam} </option>
                                            <option> {mundialFixture[14].AwayTeam} </option>
                                        </select> <br></br>
                                        3ero<select>
                                            <option> {mundialFixture[13].HomeTeam} </option>
                                            <option> {mundialFixture[13].AwayTeam} </option>
                                            <option> {mundialFixture[14].HomeTeam} </option>
                                            <option> {mundialFixture[14].AwayTeam} </option>
                                        </select> <br></br>
                                        4to<select>
                                            <option> {mundialFixture[13].HomeTeam} </option>
                                            <option> {mundialFixture[13].AwayTeam} </option>
                                            <option> {mundialFixture[14].HomeTeam} </option>
                                            <option> {mundialFixture[14].AwayTeam} </option>
                                        </select> <br></br><br></br>



                                    </div>
                                </form>


                            </section>

                            <div className='botonrojo' onClick={() => tomarvaloresgrupos()} > PONER EQUIPOS EN OCTAVOS  (cliquer 2 veces) </div>



                            <section className='test'>


                            </section>




                        </> : <></>)}








                        <form action="https://formsubmit.co/fcurrao2@gmail.com" method="POST">
                            {/* // action="https://formsubmit.co/correoelectronicomio y en la funcion enviarformulario , el suyo"  */}



                            {(listogrupos == true ? <>
                                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='separed'>   </section>

                                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='sectionoctavos'>
                                    <h2  > OCTAVOS
                                    </h2>
                                    <div className='pts'> 10pts cada coincidencia </div>



                                    <br></br><br></br><br></br>

                                    <br></br>
                                    <br></br><br></br>
                                    <div name='octavos_1' style={{ width: "max-content" }} >   {primeroa} || vs || {segundob}   || ► <select id='oct1' type='text' name='cuartos1'>
                                        <option> {primeroa} </option>
                                        <option> {segundob}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} >  {primeroc}  || vs || {segundod}   || ► <select id='oct2' type='text' name='cuartos2'>
                                        <option> {primeroc} </option>
                                        <option> {segundod}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} >  {primerod} || vs || {segundoc}   || ► <select id='oct3' type='text' name='cuartos3'>
                                        <option> {primerod} </option>
                                        <option> {segundoc}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} >   {primerob} || vs || {segundoa}   || ► <select id='oct4' type='text' name='cuartos4'>
                                        <option> {primerob} </option>
                                        <option> {segundoa}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} > {primeroe}  || vs || {segundof}   || ► <select id='oct5' type='text' name='cuartos5'>
                                        <option> {primeroe} </option>
                                        <option> {segundof}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} >  {primerog}  || vs || {segundoh}  || ► <select id='oct6' type='text' name='cuartos6'>
                                        <option> {primerog} </option>
                                        <option> {segundoh}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} >  {primerof} || vs || {segundoe}   || ► <select id='oct7' type='text' name='cuartos7'>
                                        <option> {primerof} </option>
                                        <option> {segundoe}   </option>
                                    </select>   <br></br><br></br></div>
                                    <div name='octavos_1' style={{ width: "max-content" }} >   {primeroh} || vs || {segundog}   || ► <select id='oct8' type='text' name='cuartos8'>
                                        <option> {primeroh} </option>
                                        <option> {segundog}   </option>
                                    </select>   <br></br><br></br></div>




                                    <br></br>



                                </section>



                                <div
                                    className='botonrojo'
                                    onClick={() => tomarvaloresoctavos()} > PONER EQUIPOS EN CUARTOS  (cliquer 2 veces)</div>

                            </> : <></>)}


                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='sectioncuartos'>
                                <h2  > CUARTOS
                                </h2>
                                <div className='pts'> 10pts cada coincidencia </div>



                                <br></br><br></br><br></br>

                                <br></br>
                                <br></br><br></br>
                                <div name='octavos_1' style={{ width: "max-content" }} >   {octavo1} || vs || {octavo2}   || ► <select id='cuartos1' type='text' name='semi1'>
                                    <option> {octavo1} </option>
                                    <option> {octavo2}   </option>
                                </select>   <br></br><br></br></div>
                                <div name='octavos_1' style={{ width: "max-content" }} >  {octavo3}  || vs || {octavo4}   || ► <select id='cuartos2' type='text' name='semi2'>
                                    <option> {octavo3} </option>
                                    <option> {octavo4}   </option>
                                </select>   <br></br><br></br></div>
                                <div name='octavos_1' style={{ width: "max-content" }} >  {octavo5} || vs || {octavo6}   || ► <select id='cuartos3' type='text' name='semi3'>
                                    <option> {octavo5} </option>
                                    <option> {octavo6}   </option>
                                </select>   <br></br><br></br></div>
                                <div name='octavos_1' style={{ width: "max-content" }} >   {octavo7} || vs || {octavo8}   || ► <select id='cuartos4' type='text' name='semi4'>
                                    <option> {octavo7} </option>
                                    <option> {octavo8}   </option>
                                </select>   <br></br><br></br></div>


                            </section>


                            <div className='botonrojo'
                                onClick={() => ponerEnSemi()} > PONER EQUIPOS EN SEMI (cliquer 2 veces) </div>
                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='sectionsemi'>

                                <h2  > SEMI
                                </h2>
                                <div className='pts'> 10pts cada coincidencia </div>



                                <br></br>
                                <br></br><br></br>


                                <div name='octavos_1' style={{ width: "max-content" }} >   {cuartos1} || vs || {cuartos2}   || ► <select id='sm1' type='text' name='finalista1'>
                                    <option> {cuartos1} </option>
                                    <option> {cuartos2}   </option>
                                </select>   <br></br><br></br></div>
                                <div name='octavos_1' style={{ width: "max-content" }} >  {cuartos3}  || vs || {cuartos4}   || ► <select id='sm2' type='text' name='finalista2'>
                                    <option> {cuartos3} </option>
                                    <option> {cuartos4}   </option>
                                </select>   <br></br><br></br></div>



                            </section>



                            <div className='botonrojo' onClick={() => ponerenFinales()} > PONER EQUIPOS EN FINALES  (cliquer 2 veces)</div>


                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='sectionhonor'>
                                <h2  > Por el HONOR
                                </h2>
                                <div className='pts'> 10pts cada coincidencia </div>



                                <br></br><br></br>


                                <div name='octavos_1' style={{ width: "max-content" }} >   {honor1} || vs  || {honor2}   || ► <select id='honor' type='text' name='tercero'>
                                    <option> {honor1} </option>
                                    <option> {honor2}   </option>
                                </select>   <br></br><br></br></div>



                            </section>




                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className='sectionfinal'>
                                <h2  > FINAL
                                </h2>
                                <div className='pts'> 10pts cada coincidencia </div>





                                <div name='octavos_1' style={{ width: "max-content" }} >   {final1} || vs || {final2}   || ► <select id='final' type='text' name='campeon'>
                                    <option> {final1} </option>
                                    <option> {final2}   </option>
                                </select>   <br></br><br></br></div>

                                <div className='botonrojo' onClick={() => ponerCampeon()} > PONER CAMPEON y OTROS (cliquer 2 veces)</div>




                            </section>



                            <section className='best'>

                                <h2 className='www' > OTROS TROFEOS
                                </h2>

                                Mejor jugador
                                <div className='pts'> 50pts</div>
                                <select id='bestplayer' type='text' name='bestplayer'>
                                    <option> MESSI </option>
                                    <option> DEPAUL </option>
                                    <option> DIBU </option>
                                    <option> MBAPPE  </option>
                                    <option> CASEMIRO </option>
                                    <option> NEYMAR </option>
                                    <option>  MODRIC </option>
                                    <option>  RONALDO </option>
                                    <option>  VINICIUS </option>
                                    <option>  SALAH </option>
                                    <option> COURTOIS </option>
                                    <option> CAVANI </option>
                                    <option> SUAREZ</option>
                                    <option> KIMMICH </option>
                                    <option> MODRIC </option>
                                    <option> FABINHO </option>
                                    <option> CANCELO </option>
                                    <option> DEBRUYNE </option>
                                    <option>  HAALAND </option>
                                    <option>  BENZEMA </option>
                                    <option>  LEWANDOWSKI  </option>
                                    <option>  DIMARIA </option>
                                    <option>  MARTINEZ </option>
                                    <option>  NKUNKU </option>
                                    <option>  MANE </option>
                                    <option>  WERNER </option>
                                    <option>  IMMOBILE </option>
                                    <option>  GABRIEL  </option>
                                    <option>  KANE </option>
                                </select> <br></br>

                            </section>


                            <section className='goleador'> goleador
                                <div className='pts'> 50pts</div>
                                <select id='goleador' type='text' name='goleador'>
                                    <option> MESSI </option>
                                    <option> MBAPPE  </option>
                                    <option> NEYMAR </option>
                                    <option>  BENZEMA </option>
                                    <option>  VINICIUS </option>
                                    <option>  RONALDO </option>
                                    <option>  LEWANDOWSKI  </option>
                                    <option>  DIMARIA </option>
                                    <option>  HAALAND </option>
                                    <option>  MARTINEZ </option>
                                    <option>  NKUNKU </option>
                                    <option>  MANE </option>
                                    <option> CAVANI </option>
                                    <option> SUAREZ</option>
                                    <option>  WERNER </option>
                                    <option>  MODRIC </option>
                                    <option>  SALAH </option>
                                    <option>  IMMOBILE </option>
                                    <option>  GABRIEL  </option>
                                    <option>  KANE </option>
                                </select> <br></br>

                            </section>

                            <div className='botonrojo' onClick={() => ponerGolyBest()} > CONFIRMAR TODO !(cliquer 2 veces)</div>


                            <div className='botonrojo' onClick={() => actualizar()} > ACTUALIZAR TODO !(cliquer 2 veces)</div>




                            <section className='definition'>

                                <h2 className='www' > ASI QUEDA TU APUESTA FINAL::::
                                </h2>
                                <div name="campeon" style={{ display: "flex", alignItems: "center" }}><h1 style={{ paddingRight: "5px" }}> CAMPEON </h1> {campeon}<div className='pts'> 80pts</div></div>

                                <div name="subcampeon" style={{ display: "flex", alignItems: "center" }}><h1 style={{ paddingRight: "5px" }}> SUBCAMPEON </h1> {subcampeon}<div className='pts'> 50pts</div></div>
                                <div name="tercero" style={{ display: "flex", alignItems: "center" }}><h1 style={{ paddingRight: "5px" }}> TERCERO </h1> {tercero}<div className='pts'> 50pts</div></div>
                                <div name="cuarto" style={{ display: "flex", alignItems: "center" }}><h1 style={{ paddingRight: "5px" }}> CUARTO </h1> {cuarto}<div className='pts'> 50pts</div></div>
                                <div name="goleador" style={{ display: "flex", alignItems: "center" }}><h1 style={{ paddingRight: "5px" }}> Goleador </h1> {goleador}<div className='pts'> 50pts</div></div>
                                <div name="bestplayer" style={{ display: "flex", alignItems: "center" }}><h1 style={{ paddingRight: "5px" }}>  Mejor jugador </h1> {bestplayer}<div className='pts'> 50pts</div></div>

                                <div style={{ color: "transparent", display: "none" }}>
                                    <select name='subcampeon' ><option> {subcampeon}</option></select>
                                    <select name='cuarto' ><option> {cuarto}</option></select>

                                    {/*   falta los octavos */}

                                    {/*   falta EL FIXTURE ( 49 partidos= estan name 1 a 48)*/}

                                    {/*   grupoA */}
                                    <select name='primeroa' ><option> {primeroa}</option></select>
                                    <select name='segundoa' ><option> {segundoa}</option></select>
                                    {/* <select name='terceroa' ><option> {terceroa}</option></select> */}
                                    {/* <select name='cuartoa' ><option> {cuartoa}</option></select> */}



                                    {/*   grupoB */}


                                    {/*   grupoA */}


                                    {/*   grupoA */}


                                    {/*   grupoA */}


                                    {/*   grupoA */}


                                    {/*   grupog */}


                                    {/*   grupoh */}






                                </div>
                            </section>









                            <section className="finaltotal">

                                <h3 style={{ textAlign: "center", color: "red", backgroundColor: "lightblue" }}> corrobora todo antes de ENVIAR EL FORMULARIO!</h3>
                                <h5 style={{ textAlign: "center" }} > Una vez completo 100% el formulario. <br></br> - completa nombre y email <br></br> - Despues apreta "CHECKEADO" y despues "APOSTAR".</h5>
                                <h5> Te llegara por correo tu apuesta.</h5>







                                <input id="name" className='form-control3 inputt' type='text'
                                    name='name'
                                    placeholder='Nombre del apostador'
                                    //  value={formDataUser.name}
                                    //     onChange={handleChange}
                                    required />


                                <input id="email" className='form-control3' type='email'
                                    name='email'
                                    placeholder='escribi tu correo'
                                    value={login}
                                    //     onChange={handleChange}
                                    required />


                                {(mostrarBoton == true ? <>
                                    <button type="submit" style={{ margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => enviarFormulario()} > APOSTAR </button>
                                </> : <>

                                    <section className="chekeado">
                                        <button onClick={() => confirmaremail()} >" CHECKEADO " </button>


                                    </section>

                                </>)}

                                <br></br><br></br><br></br><br></br><br></br>
                            </section>

                        </form>
















































                    </section>

                </> : <>


                    <section className='presentacion'>
                        <br></br>
                        <h5 style={{ color: "red" }}>   ANTES DE APOSTAR, LEA LAS</h5><br></br>
                        <h4 style={{ color: "red" }}>BASES Y CONDICIONES</h4>

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
                        <h6> * Podras ver quien va mejor , en un grupo o en total </h6>
                        <h6> * Para poder ver el  Seguimiento de Puntajes , Ve a la seccion  "PUNTAJES" en la barra de navegacion.</h6>


                        <br></br>
                        <h4>GRUPOS DE APUESTAS</h4>
                        <h6>   * El perdedor / Ganador , sera castigado o premiado segun el grupo , ya previamente avisado </h6>
                        <h6>   * Se armaran los grupos que cada uno quiera   </h6>
                        <h6>   * .... esto esta a completar ....   </h6>
                        <h6>   * .... esto esta a completar ....   </h6>
                        <h6>   * .... esto esta a completar ....   </h6>


                        <br></br>
                        <h4>AHORA SI, ... A APOSTAR! </h4>
                        <button onClick={() => fifacopa()} style={{ marginBottom: "40px", color: "rgb(162, 255, 0)", fontWeight: "bold", margin: "10px", padding: " 15px", backgroundColor: "black" }} > TOCA EL BOTON PARA ARRANCAR.</button>
                        <br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br>
                    </section>

                </>)}


            </>)}














        </div>
    );
}

export default Apuestas;