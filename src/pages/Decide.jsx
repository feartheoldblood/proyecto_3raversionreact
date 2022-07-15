import React from 'react';
import {Component} from 'react';
import este from '../recursos/este.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../recursos/fondo.css'
function Decide(){
    return <div className="lsd" >
    <h1>Bienvenido, eliga una opción</h1>
    <img src={este} />
    <div >
        <Link to="/menu">
        <a href="#" className="btn btn-primary">DOCTOR</a>
        </Link>
    
    </div>
    
</div>
    

}
export default Decide;