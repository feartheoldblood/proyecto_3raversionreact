import React from 'react';
import {Component} from 'react';
import este from '../recursos/este.png'
import {Link} from 'react-router-dom';
function Decide(){
    return <div className="lsd" >
    <h1>Bienvenido, eliga una opción</h1>
    <img src={este} />
    <div >
        <Link to="/menu">
        <a href="#" className="btn btn-primary">DOCTOR</a>
        </Link>
        <Link to="/login_paciente">
        <a href="#" className="btn btn-primary">PACIENTE</a>
        </Link>
    
    </div>
    
</div>
    

}
export default Decide;