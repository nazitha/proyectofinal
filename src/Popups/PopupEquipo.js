import React, { useState, useEffect } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Alert } from "@mui/material";
import axios from "axios";

const PopupEquipo = ({ onClose }) => {
  const [body, setBody] = useState({
    id_Entrenador: "",
    id_Torneo: "",
    nombre: "",
    estado: "",
    solo: "",
  });

  const [Entrenador, setEntrenador] = useState([]);
  const [TorneoSolo, setTorneoSolo] = useState([]);
  const [TorneoEquipo, setTorneEquipo] = useState([]);

  const ConsultarTorneoEnEquipo = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarTorneoPorModoEnEquipo"
    );
    console.log(data);
    setTorneEquipo(data);
  };
  const ConsultarTorneoEnSolitario = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarTorneoPorModoSolitario"
    );
    console.log(data);
    setTorneoSolo(data);
  };

  const ConsultarEntrenador = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarEntrenador"
    );
    console.log(data);
    setEntrenador(data);
  };

  useEffect(() => {
    ConsultarEntrenador();
  }, []);

  const [error, setError] = useState({ status: false, msg: "", type: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });

    if (body.solo == '1') {
      ConsultarTorneoEnSolitario();
    }
    if (body.solo == '0') {
      ConsultarTorneoEnEquipo();
    }
  };

  const onSubmit = async () => {
    if (
      body.id_Entrenador === "" ||
      body.id_Torneo === "" ||
      body.nombre === "" ||
      body.estado === "" ||
      body.solo === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarEquipo",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Equipo ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar el Equipo:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar equipo</h2>
          <IconButton className="close-icon" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form>

        <div className="form-field">
            <label htmlFor="Modo">Modo:</label>
            <select
              name="solo"
              id="modalidad"
              value={body.solo}
              onChange={inputChange}
            >
              <option value="">Seleccione una modo</option>
              <option value="1">Solitario</option>
              <option value="0">En equipo</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="nombre">Nombre:</label>
            <input
              name="nombre"
              type="text"
              id="nombre"
              value={body.nombre}
              onChange={inputChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="entrenador">Entrenador:</label>
            <select
              name="id_Entrenador"
              id="id_Entrenador"
              value={body.id_Entrenador}
              onChange={inputChange}
            >
              <option value="">Seleccione un entrenador</option>
              {Entrenador.map((user, index) => (
                <option value={user.Id_Entrenador}>{user.Nombre}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="torneo">Torneo:</label>
            <select
              name="id_Torneo"
              id="id_Torneo"
              value={body.id_Torneo}
              onChange={inputChange}
            >
              <option value="">Seleccione un torneo</option>
              {body.solo === "1" && (
                <>
                  {TorneoSolo.map((user, index) => (
                    <option value={user.Id_Torneo}>{user.Nombre_Torneo}</option>
                  ))}
                </>
              )}
              {body.solo === "0" && (
                <>
                  {TorneoEquipo.map((user, index) => (
                    <option value={user.Id_Torneo}>{user.Nombre_Torneo}</option>
                  ))}
                </>
              )}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="estado">Estado:</label>
            <select
              name="estado"
              id="modalidad"
              value={body.estado}
              onChange={inputChange}
            >
              <option value="">Seleccione una estado</option>
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
          <div className="popup-buttons">
            <button type="button" onClick={onSubmit}>
              Registrar
            </button>
          </div>
        </form>
        {error.status && <Alert severity={error.type}>{error.msg}</Alert>}
      </div>
    </div>
  );
};

export default PopupEquipo;
