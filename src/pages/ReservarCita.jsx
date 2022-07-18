import React from "react";
import HeaderReserva from "../components/HeaderReserva";

export default function ReservarCita(){
    return <div>
        <div className="container">
            <HeaderReserva />
        </div>
        <hr className="bg-gray-300 mt-2 mt-sm-0 mb-0 mb-sm-5"/>
        <div className="container-md pt-0 pt-md-4">
            <div className="row d-flex flex-column-reverse flex-md-row">
                <div className="d-flex flex-column">
                    <h2>Reservar cita</h2>
                    <div className="mt-5 mb-5">
                        <div>
                            <h3>¿Qué tipo de cita realizará?</h3>
                            <div className="custom-picker m-0 card card-sm card-border">
                                <div>
                                    <div>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Seleccione</option>
                                            <option value="Visita Dermatológica">Dermatológica</option>
                                            <option value="Visita Pediátrica">Pediátrica</option>
                                            <option value="Visita Traumatológica">Traumatológica</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label>Tipo de visita*</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option defaultValue={"Selected"}>Seleccione</option>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Online">Online</option>
                                </select>
                                <div className="form-group active custom-dp-input">
                                    <label >Numero de celular*</label>
                                    <input type="tel" maxLength={15} className="form-control inspectletIgnore"/>
                            </div>
                            <p className="text-muted mt-1">
                                Un código se enviara a este número para confirmación de la cita.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-5">
                            <h3 className="mb-0">
                                ¿Tiene tos, fiebre, dificultad para respirar o le falta el aire, o estuvo en contacto con alguien que presente alguno de estos sintomas?*
                            </h3>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                  Sí
                                </label>
                              </div>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
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
                                <textarea className="form-control inspectletIgnore" maxLength={255} rows="3" placeholder="Añadir algun comentario de interes al doctor"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <button onclick="window.location.href='/pago.html'" className="btn btn-lg btn-block btn-primary" >Continuar</button>
                <p className="text-muted d-flex justify-content-center mt-2">* Obligatorio</p>
            </div>
        </div>
    </div>
    </div>

}

