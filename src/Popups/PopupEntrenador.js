import React, { useState } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Alert } from "@mui/material";
import axios from "axios";

const PopupEntrenador = ({ onClose }) => {
  const [body, setBody] = useState({
    nombre: "",
    apellido: "",
    estado: "",
  });

  const [error, setError] = useState({ status: false, msg: "", type: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    if (
      body.nombre === "" ||
      body.apellido === "" ||
      body.estado === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarEntrenador",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Entrenador ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar el entrenador:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar entrenador</h2>
          <IconButton className="close-icon" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form>
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
            <label htmlFor="apellido">Apellido:</label>
            <input
              name="apellido"
              type="text"
              id="contra"
              value={body.apellido}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="estado">Estado:</label>
            <select
              name="estado"
              id="cargo"
              value={body.estado}
              onChange={inputChange}
            >
              <option value="">Seleccione estado</option>
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

export default PopupEntrenador;