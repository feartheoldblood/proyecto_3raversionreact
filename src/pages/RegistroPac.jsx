import React from "react";
import { Link } from "react-router-dom";
import '../recursos/style2.css'

const mystyle = {
    margin:"auto",
    width: "400px",
    margintop:"100px"
}
function mostrarContrasena(){
    var tipo = document.getElementById("mostrar");
    if(tipo.type === "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}
function RegistroPac() {

    return <div className="container" style={mystyle}>
    <div className="form mt-5">
        <h1>Registro</h1>
        <div class="form-outline mb-4 mt-4">
            <input type="text" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Nombres</label>
            <input type="text" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Apellido Paterno</label>
            <input type="text" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Apellido Materno</label>

        </div>

        <div class="form-outline mb-4">
            <input type="email" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Correo Electrónico</label>
        </div>

        <div class="form-outline mb-4">
            <input type="password" id="mostrar" class="form-control" />
            <label class="form-label" for="form2Example2">Contraseña</label>
            <input type="password" id="mostrar" class="form-control" />
            <label class="form-label" for="form2Example2">Confirmar contraseña</label>
        </div>

        <div class="row mb-4">
            <div class="col d-flex justify-content-left">
        
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" onClick={mostrarContrasena}/>
                    <label class="form-check-label" for="form2Example31"> Mostrar contraseña </label>
                    <Link to="/login_paciente">
                        <a href="/" className="btn btn-primary">Registrarse</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>


}

export default RegistroPac


