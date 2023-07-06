import React, { useState, useEffect } from "react";
import "../CSS/Popup.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField, Alert } from "@mui/material";
import axios from "axios";

const PopupMiembroEquipo = ({ onClose }) => {
  const [body, setBody] = useState({
    Id_Equipo: "",
    Id_Torneo: "",
    Id_deportista: "",
  });

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });

    if (body.Id_Equipo != "") {
      ConsultarIndividual(body.Id_Equipo);
    }
  };

  const [Equipo, setEquipo] = useState([]);
  const [Torneo, setTorneo] = useState([]);
  const [Deportista, setDeportista] = useState([]);

  const ConsultarEquipo = async () => {
    const { data } = await axios.get("http://localhost:4000/api/MostrarEquipo");
    console.log(data);
    setEquipo(data);
  };

  const ConsultarIndividual = async (id) => {
    console.log("El id es:" + id);
    const { data } = await axios.post(
      "http://localhost:4000/api/ObtenerEstadoEquipo",
      { id: id }
    );

    if (data[0].Solo == "Solo") {
      ConsultarTorneoSolitario();
    } else {
      if (data[0].Solo == "No solo") {
        ConsultarTorneoEquipo();
      }
    }
    console.log(data[0].Solo);
  };

  const ConsultarTorneoSolitario = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarTorneoPorModoSolitario"
    );
    console.log(data);
    setTorneo(data);
  };
  const ConsultarTorneoEquipo = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarTorneoPorModoEnEquipo"
    );
    console.log(data);
    setTorneo(data);
  };

  const ConsultarDeportista = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/MostrarDeportista"
    );
    console.log(data);
    setDeportista(data);
  };

  useEffect(() => {
    ConsultarDeportista();
  }, []);

  useEffect(() => {
    ConsultarEquipo();
  }, []);

  const handleClose = () => {
    onClose();
  };

  const onSubmit = async () => {
    // console.log("La modalidad es "+ body.modalidad)
    // console.log("El local es "+ body.local)
    // console.log("El arbitro es "+ body.arbitro)
    // console.log("El nombre del torneo es "+ body.nombre)
    // console.log("La fecha inicio es "+ body.fechaInicio)
    // console.log("La fecha final es "+ body.fechaFinal)
    // console.log("El torneo es en equipo "+ body.tipoTorneo)
    // console.log("Fide avalado "+ body.fide_avalado)
    // console.log("El sistema de desempate "+ body.sistemaDesempate)
    // console.log("La cantidad de rondas es "+ body.rondas)
    // console.log("El formato de juego es "+ body.formatoJuego)

    if (
      body.modalidad == "" ||
      body.local == "" ||
      body.arbitro == "" ||
      body.nombre == "" ||
      body.fechaInicio == "" ||
      body.fechaFinal == "" ||
      body.tipoTorneo == "" ||
      body.fide_avalado == "" ||
      body.sistemaDesempate == "" ||
      body.rondas == "" ||
      body.formatoJuego == ""
    ) {
      setError({
        status: true,
        msg: "Hay campos en blanco, por favor ingresar un valor",
        type: "error",
      });
    } else {
      axios
        .post("http://localhost:4000/api/IngresarTorneo", body)
        .then(({ data }) => {
          console.log(data);
          setError({
            status: true,
            msg: "Torneo ingresado correctamente",
            type: "success",
          });
        })
        .catch(({ response }) => {
          console.log("No se registrop correctamente.");
        });
    }
  };

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registro de miembro de equipo</h2>
          <IconButton className="close-icon" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="Id_Equipo">Equipo:</label>
            <select
              name="Id_Equipo"
              id="Id_Equipo"
              value={body.Id_Equipo}
              onChange={inputChange}
            >
              <option value="">Seleccione un equipo</option>
              {Equipo.map((user, index) => (
                <option value={user.Id_Equipo}>{user.Nombre_Equipo}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="Id_deportista">Deportista:</label>
            <select
              name="Id_deportista"
              id="Id_deportista"
              value={body.Id_deportista}
              onChange={inputChange}
            >
              <option value="">Seleccione un deportista</option>
              {Deportista.map((user, index) => (
                <option value={user.Id_Deportista}>{user.Nombre}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="Id_Torneo">Torneo:</label>
            <select
              name="Id_Torneo"
              id="Id_Torneo"
              value={body.Id_Torneo}
              onChange={inputChange}
            >
              <option value="">Seleccione un torneo</option>
              {Torneo.map((user, index) => (
                <option value={user.Id_Torneo}>{user.Nombre_Torneo}</option>
              ))}
            </select>
          </div>

          <div className="popup-buttons">
            <button type="button" onClick={onSubmit}>
              Guardar
            </button>
          </div>
          <div>
            {error.status ? (
              <Alert severity={error.type} sx={{ mt: 3 }}>
                {error.msg}
              </Alert>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupMiembroEquipo;
