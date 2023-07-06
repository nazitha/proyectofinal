import React, { useState } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Alert } from "@mui/material";
import axios from "axios";

const PopupUsuario = ({ onClose }) => {
  const [body, setBody] = useState({
    nombre: "",
    contra: "",
    cargo: "",
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
      body.contra === "" ||
      body.cargo === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarUsuario",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Usuario ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar el Usuario:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar usuario</h2>
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
            <label htmlFor="contra">Contraseña:</label>
            <input
              name="contra"
              type="text"
              id="contra"
              value={body.contra}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="cargo">Cargo:</label>
            <select
              name="cargo"
              id="cargo"
              value={body.cargo}
              onChange={inputChange}
            >
              <option value="">Seleccione cargo</option>
              <option value="1">Administrador</option>
              <option value="0">Usuario</option>
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

export default PopupUsuario;