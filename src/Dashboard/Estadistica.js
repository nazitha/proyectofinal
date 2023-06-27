import List2 from "./List2";
import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import "../CSS/Admin.css";

const Estadistica = () => {
  const [tablaPosicionesData, setTablaPosicionesData] = useState([
    { posicion: 1, jugador: "Jugador 1" },
    { posicion: 2, jugador: "Jugador 2" },
    { posicion: 3, jugador: "Jugador 3" },
    { posicion: 4, jugador: "Jugador 4" },
  ]);

  const [tablaPartidasData, setTablaPartidasData] = useState([
    { id: 1, jugador1: "Jugador 1", elo1: 1600, pts1: 2, resultado: "½ - ½", pts2: 2, jugador2: "Jugador 2", elo2: 1700 },
    { id: 2, jugador1: "Jugador 3", elo1: 1800, pts1: 1, resultado: "1 - 0", pts2: 0, jugador2: "Jugador 4", elo2: 1900 },
    // Agrega más datos de partidas aquí
  ]);

  const [rondaActual, setRondaActual] = useState(1);

  const avanzarRonda = () => {
    if (rondaActual < getMaxRonda()) {
      setRondaActual(rondaActual + 1);
    }
  };

  const retrocederRonda = () => {
    if (rondaActual > 1) {
      setRondaActual(rondaActual - 1);
    }
  };

  const cambiarRonda = (ronda) => {
    setRondaActual(ronda);
  };

  const getMaxRonda = () => {
    // Lógica para obtener la máxima ronda
  };

  const tablaPosiciones = (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Posición</TableCell>
            <TableCell>Jugador</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Renderizar filas de la tabla de posiciones */}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const tablaPartidas = (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Jugador 1</TableCell>
            <TableCell>ELO</TableCell>
            <TableCell>Pts.</TableCell>
            <TableCell>Resultado</TableCell>
            <TableCell>Pts.</TableCell>
            <TableCell>Jugador 2</TableCell>
            <TableCell>ELO</TableCell>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tablaPartidasData.map((partida, index) => (
            <TableRow key={index}>
              <TableCell>{partida.id}</TableCell>
              <TableCell>{partida.jugador1}</TableCell>
              <TableCell>{partida.elo1}</TableCell>
              <TableCell>{partida.pts1}</TableCell>
              <TableCell>{partida.resultado}</TableCell>
              <TableCell>{partida.pts2}</TableCell>
              <TableCell>{partida.jugador2}</TableCell>
              <TableCell>{partida.elo2}</TableCell>
              <TableCell>{partida.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="table-buttons">
        <div>
          <Button variant="contained" color="primary" onClick={retrocederRonda}>
            &lt; Anterior
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={avanzarRonda}>
            Siguiente &gt;
          </Button>
        </div>
      </div>
    </TableContainer>
  );

  return <>
  <List2/>
    <div className="container">
      <div className="header">
        <h2>Nombre del Torneo</h2>
        <p>Descripción del Torneo</p>
      </div>
      <div className="tables-container">
        <div className="table-wrapper">
          <h3>Tabla de Posiciones</h3>
          {tablaPosiciones}
        </div>
        <div className="table-wrapper">
          <h3>Tabla de Partidas</h3>
          {tablaPartidas}
        </div>
      </div>
    </div>
  </>;
};

export default Estadistica;
