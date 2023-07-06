import React, { useState, useEffect } from "react";
import "../CSS/popup2.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Alert } from "@mui/material";
import axios from "axios";

const PopupLocal = ({ onClose }) => {
  const [body, setBody] = useState({
    Id_Departamento: "",
    Direccion: "",
    Nombre: "",
  });

  const [Departamento, setDepartamento] = useState([]);
  
  const ConsultarDepartamento = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarDepartamento"
    );
    console.log(data);
    setDepartamento(data);
  };

  useEffect(() => {
    ConsultarDepartamento();
  }, []);

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
      body.Id_Departamento === "" ||
      body.Direccion === "" ||
      body.Nombre === ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/IngresarLocal",
          body
        );
        console.log(response.data);
        setError({
          status: true,
          msg: "Local ingresado correctamente",
          type: "success",
        });
      } catch (error) {
        console.error("Error al ingresar el local:", error);
      }
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registrar local</h2>
          <IconButton className="close-icon" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="departamento">Departamento:</label>
            <select
              name="Id_Departamento"
              id="cargo"
              value={body.Id_Departamento}
              onChange={inputChange}
            >
              <option value="">Seleccione un departamento</option>
              {Departamento.map((user, index) => (
                <option value={index + 1}>{user.Nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="direccion">Direccion:</label>
            <input
              name="Direccion"
              type="text"
              id="contra"
              value={body.Direccion}
              onChange={inputChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="nombre">Nombre:</label>
            <input
              name="Nombre"
              type="text"
              id="contra"
              value={body.Nombre}
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

export default PopupLocal;
