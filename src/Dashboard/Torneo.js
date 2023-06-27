import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { TableContainer, Table,  TableRow, TableCell, TableBody, Container } from '@mui/material';
import "../CSS/Torneo.css";
import List2 from "./List2"

const Torneo = () => {
    const [nombre, setNombre] = useState('');
    const [arbitro, setArbitro] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [local, setLocal] = useState('');
    const [rondas, setRondas] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [tipoTorneo, setTipoTorneo] = useState('');
    const [formatoJuego, setFormatoJuego] = useState('');
    const [sistemaDesempate, setSistemaDesempate] = useState('');
  
    const handleGuardar = () => {
      // Aquí puedes realizar la lógica para guardar los datos
      // Por ejemplo, enviar una solicitud al servidor o almacenar en el estado global de la aplicación
    };
  
    const handleCancelar = () => {
      // Aquí puedes resetear los campos del formulario
      setNombre('');
      setArbitro('');
      setModalidad('');
      setLocal('');
      setRondas('');
      setFechaInicio('');
      setFechaFinal('');
      setTipoTorneo('');
      setFormatoJuego('');
      setSistemaDesempate('');
    };
  
    return <>
    <List2/>
  
      <div className="formulario">
        <div className="grupo">
          <div className="campo">
            <label htmlFor="nombre">Nombre del torneo</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="campo">
            <label htmlFor="arbitro">Árbitro</label>
            <input type="text" id="arbitro" value={arbitro} onChange={(e) => setArbitro(e.target.value)} />
          </div>
          <div className="campo">
            <label htmlFor="modalidad">Modalidad</label>
            <select id="modalidad" value={modalidad} onChange={(e) => setModalidad(e.target.value)}>
              <option value="">Seleccione</option>
              <option value="blitz">Blitz</option>
              <option value="rapido">Rápido</option>
              <option value="clasico">Clásico</option>
            </select>
          </div>
          <div className="campo">
            <label htmlFor="local">Local</label>
            <input type="text" id="local" value={local} onChange={(e) => setLocal(e.target.value)} />
          </div>
          <div className="campo">
          <label htmlFor="cantidadRondas">Cantidad de Rondas</label>
          <input type="number" id="cantidadRondas" min="4" max="7" />
                    </div>
          <div className="campo">
            <label htmlFor="fechaInicio">Fecha de inicio</label>
            <input type="date" id="fechaInicio" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
          </div>
          <div className="campo">
            <label htmlFor="fechaFinal">Fecha final</label>
            <input type="date" id="fechaFinal" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
          </div>
          <div className="campo">
            <label htmlFor="tipoTorneo">Torneo</label>
            <select id="tipoTorneo" value={tipoTorneo} onChange={(e) => setTipoTorneo(e.target.value)}>
              <option value="">Seleccione</option>
              <option value="individual">Individual</option>
              <option value="equipo">Equipo</option>
            </select>
          </div>
          <div className="campo">
            <label htmlFor="formatoJuego">Formato de juego</label>
            <select id="formatoJuego" value={formatoJuego} onChange={(e) => setFormatoJuego(e.target.value)}>
              <option value="">Seleccione</option>
              <option value="suizo">Sistema Suizo</option>
              <option value="liga">Liga</option>
              <option value="round-robin">Round Robin</option>
            </select>
          </div>
          <div className="campo">
            <label htmlFor="sistemaDesempate">Sistema de desempate</label>
            <select id="sistemaDesempate" value={sistemaDesempate} onChange={(e) => setSistemaDesempate(e.target.value)}>
              <option value="">Seleccione</option>
              {tipoTorneo === 'individual' && formatoJuego === 'round-robin' && (
                <>
                  <option value="encuentro-directo">Encuentro Directo</option>
                  <option value="koya">Koya</option>
                  <option value="sonneborn-berger">Sonneborn-Berger</option>
                  <option value="partidas-ganadas">Número de Partidas Ganadas</option>
                </>
              )}
              {tipoTorneo === 'equipo' && formatoJuego === 'round-robin' && (
                <>
                  <option value="puntos-partidos">Puntos de Partidos</option>
                  <option value="match-points">Match Points</option>
                  <option value="encuentro-directo">Encuentro Directo</option>
                  <option value="sonneborn-berger">Sonneborn-Berger</option>
                </>
              )}
              {tipoTorneo === 'individual' && formatoJuego === 'suizo' && (
                <>
                  <option value="encuentro-directo">Encuentro Directo</option>
                  <option value="bucholtz">Bucholtz</option>
                  <option value="sonneborn-berger">Sonneborn-Berger</option>
                  <option value="partidas-ganadas">Número de Partidas Ganadas</option>
                </>
              )}
              {tipoTorneo === 'equipo' && formatoJuego === 'suizo' && (
                <>
                  <option value="puntos-partidos">Puntos de Partidos</option>
                  <option value="match-points">Match Points</option>
                  <option value="encuentro-directo">Encuentro Directo</option>
                  <option value="bucholtz">Bucholtz</option>
                  <option value="sonneborn-berger">Sonneborn-Berger</option>
                </>
              )}
              {(tipoTorneo === 'individual' || tipoTorneo === 'equipo') && formatoJuego === 'liga' && (
                <option value="bucholtz">Bucholtz</option>
              )}
            </select>
          </div>
        </div>
        <div className="botones">
          <button onClick={handleGuardar}>Guardar</button>
          <button onClick={handleCancelar}>Cancelar</button>
        </div>
      </div>
  
      {/* Tabla con los nombres de los campos */}
      <TableContainer>
        <Table>
           <TableBody>
            <TableRow>
              <TableCell>Nombre del Torneo</TableCell>
           
              <TableCell>Árbitro</TableCell>
           
              <TableCell>Modalidad</TableCell>
           
              <TableCell>Local</TableCell>
          
              <TableCell>Cantidad de Rondas</TableCell>
         
              <TableCell>Fecha de Inicio</TableCell>
          
              <TableCell>Fecha Final</TableCell>
     
              <TableCell>Torneo (Equipo/Individual)</TableCell>
          
              <TableCell>Tipo de Torneo</TableCell>
           
              <TableCell>Formato de Juego</TableCell>
          
              <TableCell>Sistema de Desempate</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
   
  </>;
};

export default Torneo;
