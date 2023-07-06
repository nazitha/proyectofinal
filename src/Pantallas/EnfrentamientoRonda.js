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
  import Popup from "../Popups/PopupDeportista";
  
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
  
  export default function EnfrentamientoRonda() {
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
        "http://localhost:4000/api/BuscarEnfrentamiento",
        Busqueda
      );
      console.log(data);
      setUserList(data);
    };
  
    const [userList, setUserList] = useState([]);
  
    const getUser = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/MostrarEnfrentameinto"
      );
      console.log(data);
      setUserList(data);
    };
  
    const Eliminar = async (id, Numero) => {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/EliminarEnfrentamiento",
          { id_Ronda: id, id_Enfrentamiento:Numero }
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
        <h1 className="text-center">Tabla de enfrentamiento</h1>
  
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
            //onClick={handleAdd}
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
                  <TableCell>Id ronda</TableCell>
                  <TableCell>Numero de enfrentamiento</TableCell>
                  <TableCell>Jugador Blancas</TableCell>
                  <TableCell>Jugador Negras</TableCell>
                  <TableCell>Ganador</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.Id_Ronda}</TableCell>
                    <TableCell>{user.Numero}</TableCell>
                    <TableCell>{user.Jugador_Blancas}</TableCell>
                    <TableCell>{user.Jugador_Negras}</TableCell>
                    <TableCell>{user.Ganador}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        //onClick={handleAdd}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton
                        onClick={() => Eliminar(user.Id_Ronda,user.Numero)}
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
  