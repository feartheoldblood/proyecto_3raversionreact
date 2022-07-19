import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../recursos/ver_historial.css'
function ver_historia(){
    return <div id="card_historial" className="card">
              
    <div className="card-body">
        <h3 className="card-title text-center">INFORMACION DEL PACIENTE</h3>
        <div className="container text-center">
            <img id="foto_paciente" className="img-fluid rounded-start" src="/src/recursos/imagenes/paciente_foto.jpg"/>    
        </div>
        
            
        
    
      <p>
        <div className="d-grid gap-2 col-8 mx-auto">
          <a className="btn btn-dark" data-bs-toggle="collapse" href="#DATOSPERSONALES" role="button" aria-expanded="false" aria-controls="collapseExample">
            DATOS PERSONALES 
          </a>
        </div>
      </p>
      <div className="collapse" id="DATOSPERSONALES">
        <div className="card card-body">
            <p>Nombres y Apellidos:</p>
            <p>Edad:</p>
            <p>DNI:</p>

        </div>  
      </div>
      <p>
        <div className="d-grid gap-2 col-8 mx-auto">
          <a className="btn btn-dark" data-bs-toggle="collapse" href="#ANTECEDENTES" role="button" aria-expanded="false" aria-controls="collapseExample">
            HISTORIA CLINICA   
          </a>
        </div>
      </p>
      <div className="collapse" id="ANTECEDENTES">
        <div className="card card-body">
            <p>Antecedentes personales:</p>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            
            <p>Antecedentes familiares:</p>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            <ul id="antecedentes">Enfermedad XYZ</ul>
            <ul id="antecedentes">Enfermedad XYZ</ul>    

        </div>  
      </div>

      <div className="d-grid gap-2 col-8 mx-auto">
        <Link to="/Diagnostico" className="btn btn-dark" type="button">INGRESAR DIAGNOSTICO Y RECETA</Link>
        
      </div>
    </div>
</div>  

    

}
export default ver_historia;