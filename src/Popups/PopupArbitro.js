import React, { useState } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Alert } from "@mui/material";
import axios from "axios";

const PopupArbitro = ({ onClose }) => {
  const [body, setBody] = useState({
    nombre: "",
    apellido: "",
    id: "",
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
      body.id === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarArbitro",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Arbitro ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar el arbitro:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar arbitro</h2>
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
              id="apellido"
              value={body.apellido}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="id">Id fide:</label>
            <input
              name="id"
              type="text"
              id="id"
              value={body.id}
              onChange={inputChange}
            />
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

export default PopupArbitro;