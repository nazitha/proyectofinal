import React, { useState, useEffect } from 'react';
import Popup from "../Dashboard/popup";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import "../CSS/Torneo.css";
import List2 from "./List2";
import axios from 'axios';

const Torneo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Troneos, setTorneos] = useState([])
  const [Busqueda, setBusqueda] = useState({ busqueda: '' })

  const getTorneos = async () => {
    const { data } = await axios.get('http://localhost:4000/api/MostrarTorneo')
    console.log(data)
    setTorneos(data)
  }

  const inputChange = async ({ target }) => {
    const { name, value } = target
    setBusqueda({
      ...Busqueda,
      [name]: value
    })
  }

  const Buscar = async() =>{
    if (Busqueda.busqueda == "" || Busqueda.busqueda == " ") {
      getTorneos()
    } else {
      const { data } = await axios.post('http://localhost:4000/api/BuscarTorneo', Busqueda)
      console.log(data)
      setTorneos(data)
    }
  }

  useEffect(getTorneos, [])


  const handleAdd = () => {
    setPopupOpen(true);
  };


  return <>
    <List2 />
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." name="busqueda" onChange={inputChange}/>
          <button onClick={Buscar}>Buscar</button>
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
              <TableCell>Modo de juego</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Troneos.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.Nombre_Torneo}</TableCell>
                <TableCell>{user.Arbitro}</TableCell>
                <TableCell>{user.Modalidad}</TableCell>
                <TableCell>{user.Local}</TableCell>
                <TableCell>{user.Cantidad_Rondas}</TableCell>
                <TableCell>{user.Fecha_Inicio}</TableCell>
                <TableCell>{user.Fecha_Final}</TableCell>
                <TableCell>{user.Modo}</TableCell>
                <TableCell>{user.Tipo}</TableCell>
                <TableCell>{user.Sistema_de_Desempate}</TableCell>
                <TableCell>{user.Fide_Avalado}</TableCell>
                <TableCell>
                  {/* <IconButton 
                  size='small' 
                  color='primary'
                  //onClick={() => { openInPopup(item) }}
                  >
                  <EditOutlined/>
              </IconButton>
              <IconButton 
                  onClick={()=>Eliminar(user.Id_Deportista)}
                  size='small' 
                  color='secundary'
              >
                  <DeleteForeverOutlined/> 
              </IconButton> */}

                </TableCell>
              </TableRow>

            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </>;
};

export default Torneo;
