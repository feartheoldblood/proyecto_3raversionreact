import React from "react";
import ContenidoCita from "./ContenidoCita";
import data from "../dataCita"

export default function PanelUsuarioCitas(props){
        const Citas = data.map(item => {return(
            <ContenidoCita
              key = {item.id}
              item = {item}
            />
        )})

    return(
        <div className="card mb-1">
            <div className="card-body">
                <h2>Panel del usuario</h2>
                <div className="card mt-3">
                    <h5 className="card-header">Cita</h5>
                    {Citas}
                </div>
            </div>
        </div>  
    )
}
