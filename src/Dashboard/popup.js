import React, { useState, useEffect } from 'react';
import "../CSS/Popup.css";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField } from '@mui/material';



const Popup = ({ onClose }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
      };
    
      const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
      };
  const [nombreTorneo, setNombreTorneo] = useState('');
  const [arbitro, setArbitro] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [local, setLocal] = useState('');
  const [cantidadRondas, setCantidadRondas] = useState('');
  const [tipoTorneo, setTipoTorneo] = useState('');
  const [formatoJuego, setFormatoJuego] = useState('');
  const [sistemaDesempate, setSistemaDesempate] = useState('');
  const [locales, setLocales] = useState([]);
  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    // Lógica para cargar las opciones de locales desde el API
    const fetchLocales = async () => {
      try {
        const response = await fetch('/api/locales');
        const data = await response.json();
        setLocales(data);
      } catch (error) {
        console.error('Error al cargar los locales:', error);
      }
    };

    fetchLocales();
  }, []);

  const handleSave = () => {
    // Validaciones
    if (
      !nombreTorneo ||
      !arbitro ||
      !modalidad ||
      !local ||
      !cantidadRondas ||
      !tipoTorneo ||
      !formatoJuego ||
      !sistemaDesempate
    ) {
      // Manejo de error: campos obligatorios no completados
      return;
    }

    // Lógica para guardar los campos en el API
    // ...
  };

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
              type="text"
              id="nombreTorneo"
              value={nombreTorneo}
              onChange={(e) => setNombreTorneo(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="arbitro">Árbitro:</label>
            <select
              id="arbitro"
              value={arbitro}
              onChange={(e) => setArbitro(e.target.value)}
            >
              {/* Opciones cargadas desde el CRUD */}
            </select>
          </div>
          <TextField
            label="Fecha de Inicio"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            // Lógica y validaciones relacionadas con la fecha de inicio
            // ...
          />
          <TextField
            label="Fecha Final"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            // Lógica y validaciones relacionadas con la fecha final
            // ...
          />
          <div className="form-field">
            <label htmlFor="modalidad">Modalidad:</label>
            <select
              id="modalidad"
              value={modalidad}
              onChange={(e) => setModalidad(e.target.value)}
            >
              {/* Opciones cargadas desde el CRUD */}
            </select>
          </div>
          
          <div className="form-field">
            <label htmlFor="local">Local:</label>
            <select
              id="local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            >
              <option value="">Seleccione un local</option>
              {locales.map((local) => (
                <option key={local.id} value={local.id}>
                  {local.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="cantidadRondas">Cantidad de Rondas:</label>
            <input
              type="number"
              id="cantidadRondas"
              value={cantidadRondas}
              onChange={(e) => setCantidadRondas(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="tipoTorneo">Tipo de Torneo:</label>
            <select
              id="tipoTorneo"
              value={tipoTorneo}
              onChange={(e) => setTipoTorneo(e.target.value)}
            >
              {/* Opciones cargadas desde el CRUD */}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="formatoJuego">Formato de Juego:</label>
            <select
              id="formatoJuego"
              value={formatoJuego}
              onChange={(e) => setFormatoJuego(e.target.value)}
            >
              {/* Opciones cargadas desde el CRUD */}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="sistemaDesempate">Sistema de Desempate:</label>
            <select
              id="sistemaDesempate"
              value={sistemaDesempate}
              onChange={(e) => setSistemaDesempate(e.target.value)}
            >
              {/* Opciones cargadas desde el CRUD */}
            </select>
          </div>
          <div className="popup-buttons">
            <button type="button" onClick={handleSave}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
