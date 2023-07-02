import React, { useState, useEffect } from 'react';
import "../CSS/Popup.css";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField, Alert } from '@mui/material';
import axios from 'axios';



const Popup = ({ onClose }) => {
  const [body, setBody] = useState({ nombre: '', arbitro: '', modalidad: '', local: '', rondas: '', fechaInicio: '', fechaFinal: '', tipoTorneo: '', formatoJuego: '', sistemaDesempate: '', fide_avalado: '' })

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
      ...body,
      [name]: value
    })
  }

  const [arbitros, setArbitro] = useState([])
  const [locales, setLocales] = useState([])

  const ConsultarArbitro = async () => {
    const { data } = await axios.get('http://localhost:4000/api/MostrarArbitroTorneo')
    console.log(data)
    setArbitro(data)
  }

  const ConsultarLocal = async () => {
    const { data } = await axios.get('http://localhost:4000/api/MostrarLocalTorneo')
    console.log(data)
    setLocales(data)
  }

  useEffect(ConsultarArbitro, [])
  useEffect(ConsultarLocal, [])

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

    if (body.modalidad == "" || body.local == "" || body.arbitro == "" || body.nombre == "" || body.fechaInicio == "" || body.fechaFinal == "" || body.tipoTorneo == "" || body.fide_avalado == "" || body.sistemaDesempate == "" || body.rondas == "" || body.formatoJuego == "") {
      setError({ status: true, msg: "Hay campos en blanco, por favor ingresar un valor", type: 'error' })

    } else {
      axios.post("http://localhost:4000/api/IngresarTorneo", body)
        .then(({ data }) => {
          console.log(data)
          setError({ status: true, msg: "Torneo ingresado correctamente", type: 'success' })
        })
        .catch(({ response }) => {
          console.log("No se registrop correctamente.")
        })
    }
  }

  return (
    <div className="popup">
      <div className="popup-content popup-content-scroll">
        <div className="popup-header">
          <h2>Registro de Torneo</h2>
          <IconButton className="close-icon" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <form>
          <div className="form-field">
            <label htmlFor="nombreTorneo">Nombre del Torneo:</label>
            <input
              name="nombre"
              type="text"
              id="nombre"
              value={body.nombre}
              onChange={inputChange} />
          </div>
          <div className="form-field">
            <label htmlFor="arbitro">Árbitro:</label>
            <select
              name="arbitro"
              id="arbitro"
              value={body.arbitro}
              onChange={inputChange}>
              <option value="">Seleccione un arbitro</option>
              {arbitros.map((user, index) => (
                <option value={index + 1}>{user.Nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="fechaInicio">Fecha de inicio</label>
            <input name="fechaInicio"type="date" id="fechaInicio" value={body.fechaInicio} onChange={inputChange} />
          </div>
          <div className="form-field">
            <label htmlFor="fechaFinal">Fecha final</label>
            <input name="fechaFinal" type="date" id="fechaFinal" value={body.fechaFinal} onChange={inputChange} />
          </div>
          <div className="form-field">
            <label htmlFor="modalidad">Modalidad:</label>
            <select name="modalidad" id="modalidad" value={body.modalidad} onChange={inputChange}>
              <option value="">Seleccione una modalidad</option>
              <option value="2">Blitz</option>
              <option value="4">Rápido</option>
              <option value="1">Clásico</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="local">Local:</label>
            <select
              name="local"
              id="local"
              value={body.local}
              onChange={inputChange}>
              <option value="">Seleccione un local</option>
              {locales.map((user, index) => (
                <option value={index + 1}>{user.Nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-field">

            <label htmlFor="cantidadRondas">Cantidad de Rondas:</label>
            <input
              name="rondas"
              type="number"
              id="cantidadRondas"
              min="4" max="7"
              value={body.rondas}
              onChange={inputChange} />
          </div>

          <div className="form-field">
            <label htmlFor="tipoTorneo">Tipo de Torneo:</label>
            <select
              name="tipoTorneo" id="tipoTorneo" value={body.tipoTorneo} onChange={inputChange}>
              <option value="">Seleccione un tipo de torneo</option>
              <option value="0">Individual</option>
              <option value="1">Equipo</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="formatoJuego">Formato de Juego:</label>
            <select
              name="formatoJuego" id="formatoJuego" value={body.formatoJuego} onChange={inputChange}>
              <option value="">Seleccione un formato de juego</option>
              <option value="1">Sistema Suizo</option>
              <option value="2">Liga</option>
              <option value="3">Round Robin</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="sistemaDesempate">Sistema de Desempate:</label>
            <select
              name="sistemaDesempate" id="sistemaDesempate" value={body.sistemaDesempate} onChange={inputChange}>
              <option value="">Seleccione</option>
              {body.tipoTorneo === '0' && body.formatoJuego === '3' && (
                <>
                  <option value="7">Confrontacion Directa</option>
                  <option value="3">Sistema Koya</option>
                  <option value="4">Sonneborn-Berger</option>
                  <option value="6">Número de Partidas Ganadas</option>
                </>
              )}
              {body.tipoTorneo === '1' && body.formatoJuego === '3' && (
                <>
                  <option value="8">Puntos de Partidos</option>
                  {/* <option value="match-points">Match Points</option> */}
                  <option value="7">Encuentro Directo</option>
                  <option value="4">Sonneborn-Berger</option>
                </>
              )}
              {body.tipoTorneo === '0' && body.formatoJuego === '1' && (
                <>
                  <option value="7">Encuentro Directo</option>
                  <option value="2">Bucholtz</option>
                  <option value="4">Sonneborn-Berger</option>
                  <option value="6">Número de Partidas Ganadas</option>
                </>
              )}
              {body.tipoTorneo === '1' && body.formatoJuego === '1' && (
                <>
                  <option value="8">Puntos de Partidos</option>
                  {/* <option value="match-points">Match Points</option> */}
                  <option value="7">Encuentro Directo</option>
                  <option value="2">Bucholtz</option>
                  <option value="4">Sonneborn-Berger</option>
                </>
              )}
              {(body.tipoTorneo === '0' || body.tipoTorneo === '1') && body.formatoJuego === '2' && (
                <option value="2">Bucholtz</option>
              )}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="modalidad">Caracter</label>
            <select name="fide_avalado" id="fide_avalado" value={body.fide_avalado} onChange={inputChange}>
              <option value="">Seleccione</option>
              <option value="0">Amistoso</option>
              <option value="1">Avalado por la fide</option>
            </select>
          </div>

          <div className="popup-buttons">
            <button type="button" onClick={onSubmit}>
              Guardar
            </button>
          </div>
          <div >
            {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
