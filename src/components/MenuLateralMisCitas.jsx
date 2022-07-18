import React from "react";
import { Link } from "react-router-dom";

function MenuLateralMisCitas (){
    return (
        <div className="col-md-3 settings-sidebar mb-2">
            <ul className="nav nav-vertical d-none d-sm-block">
                <li className="nav nav-vertica nav-header">Secciones</li>
                <li className="nav-item">
                    <Link to="/MisCitas"><a className="nav-link active" href="/">Mis citas</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/reservaCita"><a className="nav-link active" href="/">Reservar cita</a></Link>
                </li>
                <li className="nav nav-vertica nav-header">Comunicacion con especialistas</li>
                <li className="nav-item">
                    <a href="/" className="nav-link active">Preguntas frecuentes</a>
                </li>
            </ul>
        </div>
    )
}
export default MenuLateralMisCitas