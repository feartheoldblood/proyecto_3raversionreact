import React from "react";

function Hora_dia4(){
    return <div >
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration" style={{borderradius: '15px'}}>
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-100 mb-md-200">JUEVES 19 DE MAYO </h3>
                      <form>
                        <ul className="list-group list-group-light">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <h5>16:00 p.m.</h5>
                                <div className="ms-3">
                                  <p className="fw-bold mb-0">HAROLD BELTRÁN</p>
                                  <p className="text-muted mb-0 ml-100" > 
                                        <img src="/imagenes/presencial.jpg" width = "17" height = "17" alt = "Computer Hope" className="icons"/> 
                                            Atención Presencial | 
                                        <img src="/imagenes/celular.jpg" width = "17" height = "17" alt = "Computer Hope" className="icons"/>
                                            998834045 | 
                                        <img src="/imagenes/correo.jpg" width = "17" height = "17" alt = "Computer Hope" className="icons"/>       
                                            hbeltran@gmail.com 
                                    </p>
                                </div>
                              </div>
                              
                            </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <h5>16:30 p.m.</h5>
                                  <div className="ms-3">
                                    <p className="fw-bold mb-0">SOFÍA GONZALES</p>
                                    <p className="text-muted mb-0 ml-100" > 
                                            <img src="/imagenes/presencial.jpg" width = "17" height = "17" alt = "Computer Hope" className="icons"/> 
                                                Atención Presencial | 
                                            <img src="/imagenes/celular.jpg" width = "17" height = "17" alt = "Computer Hope" className="icons"/>
                                                999938945 | 
                                            <img src="/imagenes/correo.jpg" width = "17" height = "17" alt = "Computer Hope" className="icons"/>       
                                                sofigonza@gmail.com 
                                   </p>                                    
                                  </div>
                                </div>
                                
                              </li>                  
                          </ul>
          
                        <div className="mt-4 pt-2">
                          <a className="btn btn-danger btn-lg" href="/calendario.html">REGRESAR</a>
                        </div>
          
                      </form>
                    </div>

                  </div>
                </div>
              </div>
        </div>
    </section>
    </div>

}
export default Hora_dia4;