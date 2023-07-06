import React, { useState } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Alert } from "@mui/material";
import axios from "axios";

const PopupModalidad = ({ onClose }) => {
  const [body, setBody] = useState({
    ritmo: "",
    rondas: "",
    titulo: "",
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
      body.ritmo === "" ||
      body.rondas === "" ||
      body.titulo === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarModalidad",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Modalidad ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar la modalidad:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar modalidad</h2>
          <IconButton className="close-icon" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="ritmo">Ritmo:</label>
            <input
              name="ritmo"
              type="text"
              id="nombre"
              value={body.ritmo}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="rondas">Rondas:</label>
            <input
              name="rondas"
              type="number"
              id="cantidadRondas"
              min="4"
              max="7"
              value={body.rondas}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="titulo">Titulo:</label>
            <input
              name="titulo"
              type="text"
              id="titulo"
              value={body.titulo}
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

export default PopupModalidad;