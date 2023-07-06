/* eslint-disable eqeqeq */
import {
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    Toolbar,
    InputAdornment,
  } from "@mui/material";
  import { makeStyles } from "@material-ui/styles";
  import { EditOutlined } from "@material-ui/icons";
  import { DeleteForeverOutlined } from "@material-ui/icons";
  import List2 from "../Dashboard/List2";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import AddIcon from "@material-ui/icons/Add";
  import { Search } from "@material-ui/icons";
  import Popup from "../Popups/PopupMiembrosEquipo";
  
  const useStyles = makeStyles({
    searchInput: {
      width: "75%",
    },
    newButton: {
      position: "absolute",
      right: "10px",
      width: "20%",
    },
  });
  
  export default function MiembroEquipo() {
    const classes = useStyles();
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [Busqueda, setBusqueda] = useState({ busqueda: "" });
  
    const inputChange = async ({ target }) => {
      const { name, value } = target;
      setBusqueda({
        ...Busqueda,
        [name]: value,
      });
  
      const { data } = await axios.post(
        "http://localhost:4000/api/BuscarMiembroEquipo",
        Busqueda
      );
      console.log(data);
      setUserList(data);
    };
  
    const [userList, setUserList] = useState([]);
  
    const getUser = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/MostrarMiembroEquipo"
      );
      console.log(data);
      setUserList(data);
    };
  
    const Eliminar = async (Equipo, Torneo, Miembro) => {
      try {
        console.log(Equipo + Torneo + Miembro)
        const { data } = await axios.post(
          "http://localhost:4000/api/EliminarMiembroEquipo",
          { id_Equipo: Equipo, id_Torneo: Torneo, id_Deportista: Miembro }
        );
        getUser();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleAdd = () => {
      setPopupOpen(true);
    };
  
    useEffect(() => {
      getUser();
    }, []);
  
    return (
      <>
        <List2 />
        <h1 className="text-center">Tabla de miembros de equipo</h1>
  
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
  
        <div className="result-container" id="resultConstainer">
          <TableContainer id="result" elevation={2}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Equipo</TableCell>
                  <TableCell>Torneo</TableCell>
                  <TableCell>Deportista</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.Equipo}</TableCell>
                    <TableCell>{user.Torneo}</TableCell>
                    <TableCell>{user.Deportista}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={handleAdd}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton
                        onClick={() => Eliminar(user.Equipo, user.Torneo, user.Deportista)}
                        size="small"
                        color="secundary"
                      >
                        <DeleteForeverOutlined />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
  