import React, { useState } from "react";
import { Link } from "react-router-dom";


const mystyle = {
    margin:"auto",
    width: "400px",
    margintop:"100px"
}

const LoginPac = () =>{

    const [todo, setTodo] = useState({
        todoname: '',
        todocontra:'',
        todoCheck: false,
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(todo)
    };

    const handleChange = e => {
        const {name, value, checked, type} = e.target

        

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        })
    };


    return <div className="container" style={mystyle}>
        <form className="form mt-5" onSubmit={handleSubmit}>
            <h1>Ingresar</h1>
            <div className="form-outline mb-4 mt-4">
                <input 
                    name="todoname" 
                    type="email" id="form2Example1" 
                    className="form-control" 
                    onChange={handleChange}
                    value={todo.todoname}
                />
                <label className="form-label">Correo Electronico</label>
            </div>

            <div className="form-outline mb-4">
                <input 
                    name="todocontra" 
                    type="password" 
                    id="form2Example2" 
                    className="form-control"
                    onChange={handleChange}
                    value={todo.todocontra} 
                />
                <label className="form-label">Contraseña</label>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input 
                            name="todoCheck"
                            className="form-check-input" 
                            type="checkbox" 
                            checked={todo.todoCheck} 
                            id="form2Example31"
                            onChange={handleChange}
                        />
                        <label className="form-check-label"> Recordar </label>
                    </div>
                </div>
      
                <div className="col-6">
            
                    <a href="#!">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
            <Link to="/MisCitas"><button className="btn btn-primary" type="submit">
                Iniciar Sesión
            </button></Link>
            <div className="text-center">
                <p>¿No estas registrado? <Link to="/registro_pac">Registrar</Link></p>
            </div>
        </form>
    </div>
    
}
export default LoginPac;