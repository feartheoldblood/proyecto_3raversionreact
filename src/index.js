import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Calendario from './pages/Calendario';
import Pag_principal from './pages/Pag_principal';
import Decide from './pages/Decide';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './pages/Menu';
import Hora_dia1 from './components/Hora_dia1'
import Hora_dia2 from './components/Hora_dia2'
import Hora_dia3 from './components/Hora_dia3'
import Hora_dia4 from './components/Hora_dia4'
import Hora_dia5 from './components/Hora_dia5'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
     <Route path='/home' element={<Decide/>}/>
     <Route path='/menu' element={<Menu/>}/>
      <Route path='/cale' element={<Calendario/>}/>
      <Route path='/weed' element={<Pag_principal/>}/>
      <Route path="/dia1" element={<Hora_dia1/>}/>
      <Route path="/dia2" element={<Hora_dia2/>}/>
      <Route path="/dia3" element={<Hora_dia3/>}/>
      <Route path="/dia4" element={<Hora_dia4/>}/>
      <Route path="/dia5" element={<Hora_dia5/>}/>
      
     </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();