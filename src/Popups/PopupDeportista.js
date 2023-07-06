import React, { useState, useEffect } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField, Alert } from "@mui/material";
import axios from "axios";

const Popup2 = ({ onClose }) => {
  const [body, setBody] = useState({
    nombre: "",
    apellido: "",
    elo: 0,
    codigoFide: 0,
    perteneceAcademia: "",
  });

  const [error, setError] = useState({ status: false, msg: "", type: "" });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const handleClose = () => {
    onClose();
  };

  const onSubmit = async () => {
    if (
      body.nombre === "" ||
      body.apellido === "" ||
      body.perteneceAcademia === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarDeportista",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Atleta ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar el atleta:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar Atleta</h2>
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
            <label htmlFor="elo">Elo:</label>
            <input
              name="elo"
              type="number"
              id="elo"
              value={body.elo}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="codigoFide">Código FIDE:</label>
            <input
              name="codigoFide"
              type="text"
              id="codigoFide"
              value={body.codigoFide}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="perteneceAcademia">Pertenece a academia:</label>
            <select
              name="perteneceAcademia"
              id="perteneceAcademia"
              value={body.perteneceAcademia}
              onChange={inputChange}
            >
              <option value="">Seleccione estado</option>
              <option value="1">Si</option>
              <option value="0">No</option>
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

export default Popup2;
