import React from 'react';
import {Component} from 'react';
import calendario from '../recursos/imagenes/calendario.jpg'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../recursos/style.css'
function Calendario(){
    return <div className="col-lg-13">
    <div className="card">
        <h2 className="card-header" style={{ textAlign: 'center', backgroundColor: 'rgb(210, 14, 14)', color : 'aliceblue' }}>
                Mayo de 2022 &nbsp;
        <img src={calendario} className="icons_mine"/>
        </h2>
    </div>
    <div className="card-body table-responsive">
        <h5 className="dias">
            <b className="dias_sem">Hora | Día </b>
            <b className="dias_sem">Lunes 16 &nbsp;</b>
            <b className="dias_sem">Martes 17 &nbsp;</b>
            <b className="dias_sem">Miércoles 18 </b>
            <b className="dias_sem">Jueves 19 &nbsp;</b>
            <b className="dias_sem">Viernes 20 &nbsp;</b>
            <b className="dias_sem">Sábado 21 &nbsp;</b>   
        </h5>
        <b className="calendario">
            <div className="calendario_dias align-items-center">8:00 a.m.</div>
            <div className="calendario_dias"><Link to="/dia1"><button type="button" className="btn btn-light">+Cita</button></Link></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">9:00 a.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">10:00 a.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">11:00 a.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"><Link to="/dia2"><button type="button" className="btn btn-light">+Cita</button></Link></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">12:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">13:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">14:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"><Link to="/dia3"><button type="button" className="btn btn-light">+Cita</button></Link></div>
            <div className="calendario_dias">15:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">16:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"><Link to="/dia4"><button type="button" className="btn btn-light">+Cita</button></Link></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">17:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">18:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"><Link to="/dia5"><button type="button" className="btn btn-light">+Cita</button></Link></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">19:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias">20:00 p.m.</div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
            <div className="calendario_dias"></div>
        </b>
    </div>    
</div>
    

}
export default Calendario;