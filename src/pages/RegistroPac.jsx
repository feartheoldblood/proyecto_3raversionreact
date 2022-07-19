import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../recursos/style2.css'

const mystyle = {
    margin:"auto",
    width: "400px",
    margintop:"100px"
}
function RegistroPac() {

    const [todo,setTodo] = useState({
        todoNombres: '',
        todoPaterno: '',
        todoMaterno: '',
        todoEmail: '',
        todoPass: '',
        todoConfir: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(todo)
    };

    const handleChange = e => {
        console.log(e.target.value)
        console.log(e.target.name)

        

        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    };

    return <form className="container" style={mystyle} onSubmit={handleSubmit}>
    <div className="form mt-5">
        <h1>Registro</h1>
        <div className="form-outline mb-4 mt-4">
            <input
                name="todoNombres" 
                type="text" 
                id="form2Example1" 
                className="form-control"
                onChange={handleChange} 
            />
            <label className="form-label" >Nombres</label>
            <input 
                name="todoPaterno"
                type="text" 
                id="form2Example2" 
                className="form-control" 
                onChange={handleChange} 
            />
            <label className="form-label" >Apellido Paterno</label>
            <input 
                name="todoMaterno"
                type="text" 
                id="form2Example3" 
                className="form-control" 
                onChange={handleChange} 
            />
            <label className="form-label" >Apellido Materno</label>

        </div>

        <div className="form-outline mb-4">
            <input 
                name="todoEmail"
                type="email" 
                className="form-control"
                onChange={handleChange}  
            />
            <label className="form-label" >Correo Electrónico</label>
        </div>

        <div className="form-outline mb-4">
            <input 
                name="todoPass"
                type="password" 
                className="form-control"
                onChange={handleChange} 
            />
            <label className="form-label" >Contraseña</label>
            <input
                name="todoConfir" 
                type="password" 
                className="form-control"
                onChange={handleChange} 
            />
            <label className="form-label" >Confirmar contraseña</label>
        </div>

        <div className="row mb-4">
            <div className="col d-flex justify-content-left">
        
                <div className="form-check">
                    <Link className="btn btn-primary" to="/login_paciente">
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    </div>
</form>
}
export default RegistroPac


