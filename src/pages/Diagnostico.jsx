import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function diagnostico(){
    return <div id="card_historial" className="card">
            
    <div className="card-body">
        <h3 className="card-title text-center">NOMBRE DE PACIENTE</h3>
        <div className="container text-center">
            <img id="foto_paciente" className="img-fluid rounded-start" src="/src/recursos/imagenes/paciente_foto.jpg"/>    
        </div>
        
            
        
    
      <p>
        <div className="d-grid gap-2 col-8 mx-auto">
          <a className="btn btn-success" data-bs-toggle="collapse" href="#DIAGNOSTICO" role="button" aria-expanded="false" aria-controls="collapseExample">
            DIAGNOSTICO
          </a>
        </div>
      </p>
      <div className="collapse" id="DIAGNOSTICO">
        <div className="card card-body">
            <div className="input-group">
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>

        </div>  
      </div>
      <p>
        <div className="d-grid gap-2 col-8 mx-auto">
          <a className="btn btn-success" data-bs-toggle="collapse" href="#RECETA" role="button" aria-expanded="false" aria-controls="collapseExample">
            RECETA   
          </a>
        </div>
      </p>
      <div className="collapse" id="RECETA">
        <div className="card card-body">
            <textarea className="form-control" aria-label="With textarea"></textarea>   
        </div>  
      </div>
      <p>
        <div className="d-grid gap-2 col-8 mx-auto">
          <a className="btn btn-success" data-bs-toggle="collapse" href="#OBSERVACIONES" role="button" aria-expanded="false" aria-controls="collapseExample">
            OBSERVACIONES   
          </a>
        </div>
      </p>
      <div className="collapse" id="OBSERVACIONES">
        <div className="card card-body">
            <textarea className="form-control" aria-label="With textarea"></textarea>   
        </div>  
      </div>

      <div className="d-grid gap-2 col-8 mx-auto">
        <Link className="btn btn-dark" type="button" to="/Guardar">GUARDAR</Link>
        
      </div>
    </div>
</div>
    

}
export default diagnostico;