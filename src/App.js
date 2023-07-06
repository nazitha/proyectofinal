import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Deportista from "./Pantallas/Deportistas";
import info from "./Dashboard/info";
import Estadistica from "./Dashboard/Estadistica";
import Torneo from "./Pantallas/Torneo";
import Usuarios from "./Pantallas/Usuarios";
import Arbitro from "./Pantallas/Arbitro";
import Departamento from "./Pantallas/Departamento";
import EnfrentamientoRonda from "./Pantallas/EnfrentamientoRonda";
import Entrenador from "./Pantallas/Entrenador";
import Equipo from "./Pantallas/Equipo";
import FormatoDeJuego from "./Pantallas/FormatoDeJuego";
import Local from "./Pantallas/Local";
import MiembroEquipo from "./Pantallas/MiembroDeEquipo";
import Modalidad from "./Pantallas/Modalidad";
import SistemaDesempate from "./Pantallas/SistemaDesempate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/Login" Component={Login} />
        <Route path="/Deportista" Component={Deportista} />
        <Route path="/info" Component={info} />
        <Route path="/Estadistica" Component={Estadistica} />
        <Route path="/Torneo" Component={Torneo} />
        <Route path="/Usuario" Component={Usuarios} />
        <Route path="/Arbitro" Component={Arbitro} />
        <Route path="/Departamento" Component={Departamento} />
        <Route path="/Enfrentamiento" Component={EnfrentamientoRonda} />
        <Route path="/Entrenador" Component={Entrenador} />
        <Route path="/Equipo" Component={Equipo} />
        <Route path="/FormatoJuego" Component={FormatoDeJuego} />
        <Route path="/Local" Component={Local} />
        <Route path="/MiembroEquipo" Component={MiembroEquipo} />
        <Route path="/Modalidad" Component={Modalidad} />
        <Route path="/SistemaDesempate" Component={SistemaDesempate} />
      </Routes>
    </>
  );
};
export default App;
