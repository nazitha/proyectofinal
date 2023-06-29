import React, { useState } from 'react';
import Popup from "../Dashboard/popup";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import "../CSS/Torneo.css";
import List2 from "./List2";

const Torneo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAdd = () => {
    setPopupOpen(true);
  };

  const handleSearch = () => {
    // Lógica de búsqueda
  };

  return <>
    <List2/>
    <div>
    <div className="search-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <button className="add-button" onClick={handleAdd}>Añadir</button>
    </div>


      {isPopupOpen && <Popup onClose={() => setPopupOpen(false)} />}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Torneo</TableCell>
              <TableCell>Árbitro</TableCell>
              <TableCell>Modalidad</TableCell>
              <TableCell>Local</TableCell>
              <TableCell>Cantidad de Rondas</TableCell>
              <TableCell>Fecha Inicio</TableCell>
              <TableCell>Fecha Final</TableCell>
              <TableCell>Tipo de Torneo</TableCell>
              <TableCell>Formato de Juego</TableCell>
              <TableCell>Sistema de Desempate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Lógica para renderizar los datos de la tabla */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>;
};

export default Torneo;
