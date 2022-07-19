import React, { useState } from "react";
import { Link } from "react-router-dom";




export default function PagoCita(){

    const [todo,setTodo]=useState({
        todoTipo: 'Visa',
        todoNumero: '',
        todoVenci: '',
        todoNombre: ''

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


    return <>
        <div className="container">
            <div className="mt-2 mt-sm-4 mb-0 mb-sm-2">
                <div className="row">
                    <div className="col-8">
                        <div>
                            <div>
                                <h1>            </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-right">
                        <Link className="btn btn-lg btn-light mt-2 d-none d-sm-inline-flex" to="/MisCitas">
                            Volver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <hr className="bg-gray-300 mt-2 mt-sm-0 mb-0 mb-sm-5"/>
        <form className="container-md pt-0 pt-md-4" onSubmit={handleSubmit}>
            <div className="row d-flex flex-column-reverse flex-md-row">
                <div className="d-flex flex-column">
                    <h2>Realizar pago</h2>
                    <h3>Monto: S/60.00</h3>
                    <div className="mt-5 mb-5">
                        <div>
                            <h3>Tipo de tarjeta</h3>
                            <div className="custom-picker m-0 card card-sm card-border">
                                <div className="card-body p-1 d-flex justify-content-between flex-column flex-md-row align-items-md-center">
                                    <select
                                        name="todoTipo" 
                                        className="form-select" 
                                        aria-label="Default select example"
                                        onChange={handleChange}
                                    >
                                        <option value="Visa">Visa</option>
                                        <option value="MasterCard">MasterCard</option>
                                        <option value="AmericanExpress">AmericanExpress</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div>
                                <h3>Informacion de la tarjeta*</h3>
                                <div className="form-group active custom-dp-input">
                                    <label>Numero</label>
                                    <input 
                                        name="todoNumero"
                                        type="tel" 
                                        className="form-control inspectletIgnore"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group active custom-dp-input">
                                    <label>Fecha de vencimiento</label>
                                    <input 
                                        name="todoVenci"
                                        type="moth" 
                                        className="form-control inspectletIgnore"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group active custom-dp-input">
                                    <label>Nombre de la tarjeta</label>
                                    <input
                                        name="todoNombre" 
                                        type="text" 
                                        className="form-control inspectletIgnore"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/MisCitas"><button className="btn btn-lg btn-block btn-primary" type="submit">Pagar monto</button></Link> 
                </div>
            </div>
        </form>
    </>
}