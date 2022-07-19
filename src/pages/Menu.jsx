import React from 'react';
import { useState } from 'react';
import {Component} from 'react';
import black_star from '../recursos/black_star.png'
import money from '../recursos/money.png'
import card from '../recursos/card.png'
import icon_email from '../recursos/icon_email.png'
import location_icon from '../recursos/location_icon.jpg'
import doctor_neumologo from '../recursos/doctor_neumologo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import estilo from '../recursos/estilo.css'
import { useEffect } from 'react';
/*
  
*/


function Menu(){
  const [ListaDoctores, setListaDoctores]= useState([])
  useEffect(()=>{
    const dataFetch = async() => { 
    let url = "https://backend-clinica8484.herokuapp.com/doc"
    const resp = await fetch(url)
    const data = await resp.json()
    setListaDoctores(data)
  }
  dataFetch()
  
  },[])
  console.log(ListaDoctores)



    return <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav"  style={{margintop: '15px'}}>
            <li className="nav-item active">
              <a className="nav-link" href="/perfil.html"> PERFIL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CITAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">CALENDARIO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/historial.html">HISTORIAL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/consultas.html">CONSULTAS</a>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="/grafico_consultas.html">GRAFICO DE INGRESOS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">PACIENTE</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ATENCION
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/atencion_virtual.html">VIRTUAL</a>
                <a className="dropdown-item" href="/atencion_presencial.html">PRESENCIAL</a>
                 
              </div>
            </li>
            
            <li className="nav-item">
                <p className="nav-link" style={{ marginleft: '300px' }}> LOG OUT </p>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" id="inicio">
        <div className="row" id="inicio">
            <div className="col-lg-3"  id="inicio">
            <img src={doctor_neumologo} className="dr" alt=''/>
        
            </div>
            <div className="col-lg-6" id="inicio">
            <h1 ><h3>{ListaDoctores[0].nombre}</h3></h1>
              <div className="row">
                <div className="col-lg-2"><img src={icon_email} className="logo" alt=' '/></div>
                <div className="col-lg-7">
                  <p><b><h3>{ListaDoctores[0].correo}</h3></b></p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2"><img src={icon_email} className="logo" alt=' '/></div>
                <div className="col-lg-7">
                  <p><b>{ListaDoctores[0].especialidad}</b></p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2"><img src={location_icon} className="logo" alt=' '/></div>
                <div className="col-lg-7">
                  <p><b>{ListaDoctores[0].telefono}</b></p>
                </div>
              </div>
            </div>
        </div>
       <div className="row ">
        <div className="col-lg-3" >
          <h2 className="kind">Consultorio</h2>
          <div className="row" id="comp_consult"><img src={location_icon} className="logo" alt=' ' />
            {ListaDoctores[0].consultorio1}
            </div>
          
          <div className="row" id="comp_consult"><img src={location_icon} className="logo" alt=' '/>
          {ListaDoctores[0].consultorio2}
            </div>
          
          
          
          <div className="row" id="comp_consult"><img src={money} className="logo" alt=' '/>
            Consulta virtual: S/.50
            </div>
          <div className="row" id="comp_consult"><img src={money}  className="logo" alt=' '/>
            Consulta presencial: S/.100
            </div>
          
          <div className="row" id="comp_consult"><img src={money}  className="logo" alt=' '/>
            Nro. De cuenta Soles Bcp:
            </div>
             
            <p>{ListaDoctores[0].nro_cuenta_bcp}</p> 
          <div className="row" id="comp_consult"><img src={card} className="logo" alt=' '/>
            Nro. Banco de la Nacion: 
            </div>
            
            <p>{ListaDoctores[0].nro_cuenta_banco_nacion}</p> 
          <div className="row" id="comp_consult"><img src={card} className="logo" alt=' '/>
            Disponibilidad de atención:
            <p>LUNES-SABADO. 8:00AM-18:00PM</p>
            </div>


          </div>
        <div className="col-lg-5" id="color_column">
          <a href="/proximas_citas.html"><h2 className="kind">Próximas citas</h2></a>
          <div className="row">
            <p className="color_white">PEDRO VERTIZ | 20 de marzo | 3:40pm</p>
            
            
          </div>
          <div className="row">
            
            <p className="color_white">VICTOR RAMIREZ | 28 DE MARZO | 2:30pm</p>
          </div>
          <div className="row">
            <p className="color_white"> PABLO HEREDIA | 28 DE MARZO | 1:30pm
            </p>
          </div>
          <div className="row">
            <p className="color_white">ELEN PEREZ | 29 DE MARZO | 1:30pm
            </p>
          </div>
          <div className="row">
            <p cclassNamelass="color_white">JOHN SMITH | 29 DE MARZO | 1:30am
            </p>
          </div>
          <div className="row">
            <p className="color_white">RODRIGO VALIDIVA | 29 DE MARZO | 1:30pm
            </p>
          </div>

          

        </div>
        <div className="col-lg-4">
          <h2 className="kind">Experiencias</h2>
          <p>onsectetur dui egestas odio proin faucibus libero potenti metus sem lobortis blandit senectus.
          </p>
          <div className="centrar_estrella" >
            
              <img src={black_star} alt=' '/>
              <img src={black_star} alt=' '/>
              <img src={black_star} alt=' '/>
              <img src={black_star} alt=' '/>

          </div> 
          <h5>Juan Perez</h5>
          <p>onsectetur dui egestas odio proin faucibus libero potenti metus sem lobortis blandit senectus.
          </p>
          <div className="centrar_estrella" >
            
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          </div> 
          <h5>Juan Perez</h5>
          <p>onsectetur dui egestas odio proin faucibus libero potenti metus sem lobortis blandit senectus.
          </p>
          <div className="centrar_estrella" >
            <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          </div> 
          <h5>Juan Perez</h5>
          <p>onsectetur dui egestas odio proin faucibus libero potenti metus sem lobortis blandit senectus.
          </p>
          <div className="centrar_estrella" >
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          <img src={black_star} alt=' '/>
          </div> 
          <h5>Juan Perez</h5>


        </div>



       </div> 
        
      </div>

    
</div>
}
export default Menu;