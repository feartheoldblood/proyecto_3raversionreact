import React from "react";
import { Link } from "react-router-dom";

const mystyle = {
    margin:"auto",
    width: "400px",
    margintop:"100px"
}

function LoginPac(){
    return <div className="container" style={mystyle}>
        <div className="form mt-5">
            <h1>Ingresar</h1>
            <div className="form-outline mb-4 mt-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Correo Electronico</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Contraseña</label>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
            
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label className="form-check-label" for="form2Example31"> Recordar </label>
                    </div>
                </div>
      
                <div className="col-6">
            
                    <a href="#!">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
            <Link to="/MisCitas">"<a className="btn btn-primary btn-block mb-4" href="/">
                Iniciar Sesión
            </a></Link>
            <div className="text-center">
                <p>¿No estas registrado? <Link to="/registro_pac"><a href="/">Registrar</a></Link></p>
                
            </div>
        </div>
    </div>
    
}
export default LoginPac;