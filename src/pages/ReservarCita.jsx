import React, { useState } from "react";
import HeaderReserva from "../components/HeaderReserva";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import interactionPlugin from "@fullcalendar/interaction"
import esLocale from "@fullcalendar/core/locales/es"

export default function ReservarCita(){

    const [todo, setTodo] =useState({
        todoEspecialidad: 'Dermatológica',
        todoTipo: 'Presencial',
        todoCelular: '',
        todoHorario: '9:00-9:15',
        todoDescri: ''

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



    return <>
        <div className="container">
            <HeaderReserva />
        </div>
        <hr className="bg-gray-300 mt-2 mt-sm-0 mb-0 mb-sm-5"/>
        <form className="container-md pt-0 pt-md-4" onSubmit={handleSubmit}>
            <div className="row d-flex flex-column-reverse flex-md-row">
                <div className="d-flex flex-column">
                    <h2>Reservar cita</h2>
                    <div className="mt-5 mb-5">
                        <div>
                            <h3>¿Qué tipo de cita realizará?</h3>
                            <div className="custom-picker m-0 card card-sm card-border">
                                <div>
                                    <div>
                                        <select 
                                            className="form-select" 
                                            aria-label="Default select example"
                                            name="todoEspecialidad"
                                            onChange={handleChange}
                                            value={todo.todoEspecialidad}
                                        >
                                            <option value="Dermatológica">Dermatológica</option>
                                            <option value="Pediátrica">Pediátrica</option>
                                            <option value="Traumatológica">Traumatológica</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div>
                                    <label>Tipo de visita*</label>
                                    <select 
                                        className="form-select" 
                                        aria-label="Default select example"
                                        name="todoTipo"
                                        onChange={handleChange}
                                        value={todo.todoTipo}
                                    >
                                        <option value="Presencial">Presencial</option>
                                        <option value="Online">Online</option>
                                    </select>
                                    <div className="form-group active custom-dp-input">
                                        <label >Numero de celular*</label>
                                        <input 
                                            type="tel" 
                                            maxLength={15} 
                                            className="form-control inspectletIgnore"
                                            name="todoCelular"
                                            onChange={handleChange}
                                            value={todo.todoCelular}
                                        />
                                    </div>
                                    <p className="text-muted mt-1">
                                        Un código se enviara a este número para confirmación de la cita.
                                    </p>
                                    <label>Horas disponibles</label>
                                    <select 
                                        className="form-select" 
                                        aria-label="Default select example"
                                        name="todoHorario"
                                        onChange={handleChange}
                                        value={todo.todoHorario}
                                    >
                                        <option value="9:00-9:15">9:00-9:15</option>
                                        <option value="9:15-9:30">9:15-9:30</option>
                                        <option value="9:30-9:45">9:30-9:45</option>
                                        <option value="9:45-10:00">9:45-10:00</option>
                                        <option value="10:00-10:15">10:00-10:15</option>
                                        <option value="10:15-10:30">10:15-10:30</option>
                                        <option value="10:30-10:45">10:30-10:45</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5 mt-4">
                                <FullCalendar
                                    locale={esLocale}
                                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin]}
                                    initialView="dayGridMonth"
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center:"title",
                                    }}
                                    businessHours = {{
                                        startTime : "7:00",
                                        endTime : "20:00",
                                        daysOfWeek : [1,2,3,4,5,6]
                                    }}
                                    timeZone="local"
                 
                                    events={[
                                        
                                    ]}
                                />
                            </div>
                        </div>
                    <div>
                        <div className="mt-4">
                            <h3 className="mb-0">
                                ¿Tiene tos, fiebre, dificultad para respirar o le falta el aire, o estuvo en contacto con alguien que presente alguno de estos sintomas?*
                            </h3>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="todoSi" 
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Sí 
                                </label>
                              </div>
                              <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="todoNo" 
                                    id="flexRadioDefault2"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                  No
                                </label>
                              </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-5">
                            <h3>Comentario para el doctor (opcional)</h3>
                            <div className="form-group m-0">
                                <textarea 
                                    className="form-control inspectletIgnore" 
                                    maxLength={255} 
                                    rows="3" 
                                    placeholder="Añadir algun comentario de interes al doctor"
                                    name="todoDescri"
                                    onChange={handleChange}
                                    value={todo.todoDescri}
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/Pago"><button className="btn btn-lg btn-block btn-primary center" type="submit">Continuar</button></Link>
                <p className="text-muted d-flex justify-content-center mt-2">* Obligatorio</p>
            </div>
        </div>
    </form>
    </>

}

