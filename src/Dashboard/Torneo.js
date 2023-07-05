import React, { useState, useEffect } from "react";
import Popup from "../Dashboard/popup";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import List2 from "./List2";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles({
  searchInput: {
    width: "75%",
  },
  newButton: {
      position: 'absolute',
      right: '10px',
      width: '20%'
  }
})
const Torneo = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Troneos, setTorneos] = useState([]);
  const [Busqueda, setBusqueda] = useState({ busqueda: "" });
  const classes = useStyles();

  const getTorneos = async () => {
    const { data } = await axios.get("http://localhost:4000/api/MostrarTorneo");
    console.log(data);
    setTorneos(data);
  };

  const inputChange = async ({ target }) => {
    const { name, value } = target;
    setBusqueda({
      ...Busqueda,
      [name]: value,
    });
  };

  const Buscar = async () => {
    if (Busqueda.busqueda == "" || Busqueda.busqueda == " ") {
      getTorneos();
    } else {
      const { data } = await axios.post(
        "http://localhost:4000/api/BuscarTorneo",
        Busqueda
      );
      console.log(data);
      setTorneos(data);
    }
  };

  useEffect(() => {
    getTorneos();
  }, []);

  const handleAdd = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <List2 />

      <div>
        <h1 className="text-center">Tabla de Torneos</h1>

        <Toolbar>
          <input
            label="Buscar Atletlas"
            name="busqueda"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={inputChange}
          />
          <button
            text="Agregar"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={handleAdd}
          >
            Añadir
          </button>
        </Toolbar>

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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Torneo;
