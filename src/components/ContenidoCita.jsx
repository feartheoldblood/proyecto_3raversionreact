import React from "react";

export default function ContenidoCita(props){
    return(
        <div className="card-body">
            <h5 className="card-title">{props.item.especialidad}</h5>
            <div> 
                <ul>ID: {props.item.id}</ul>
                <ul>Fecha: {props.item.fecha}</ul> 
                <ul>Hora Inicio: {props.item.horainicio}</ul>
                <ul>Hora Fin: {props.item.horafin}</ul>
            </div>
            <div> 
                <ul>Modalidad: {props.item.modalidad}</ul>
                <ul>Dirección: {props.item.direccion}</ul> 
                <ul>Medico: {props.item.medico}</ul> 
            </div>
        </div>
    )
}