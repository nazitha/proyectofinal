import React from "react";
import "../CSS/list2.css";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';

const List2 = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div>
            <h1 className="logo">EA</h1>
          </div>
          <nav>
            <div className="list">
              <div className="dropdown">
                <button className="dropbtn">Registros</button>
                <div className="dropdown-content">
                  <NavLink to="/Deportista" className="listItem" activeClassName="activeItem">
                    Reg. deportistas
                  </NavLink>
                  <NavLink to="/Torneo" className="listItem" activeClassName="activeItem">
                    Reg. torneos
                  </NavLink>
                  <NavLink to="/Estadistica" className="listItem" activeClassName="activeItem">
                    Reg. rondas
                  </NavLink>
                  <NavLink to="/Usuario" className="listItem" activeClassName="activeItem">
                    Reg. usuarios
                  </NavLink>
                  <NavLink to="/Arbitro" className="listItem" activeClassName="activeItem">
                    Reg. arbitro
                  </NavLink>
                  <NavLink to="/Departamento" className="listItem" activeClassName="activeItem">
                    Reg. departamento
                  </NavLink>
                  <NavLink to="/Local" className="listItem" activeClassName="activeItem">
                    Reg. local
                  </NavLink>
                  <NavLink to="/Entrenador" className="listItem" activeClassName="activeItem">
                    Reg. entrenador
                  </NavLink>
                  <NavLink to="/Equipo" className="listItem" activeClassName="activeItem">
                    Reg. equipo
                  </NavLink>
                  <NavLink to="/MiembroEquipo" className="listItem" activeClassName="activeItem">
                    Reg. miembro de Equipo
                  </NavLink>
                  <NavLink to="/FormatoJuego" className="listItem" activeClassName="activeItem">
                    Reg. formato de juego
                  </NavLink>
                  <NavLink to="/Modalidad" className="listItem" activeClassName="activeItem">
                    Reg. modalidad
                  </NavLink>
                  <NavLink to="/SistemaDesempate" className="listItem" activeClassName="activeItem">
                    Reg. sistema de Desempate
                  </NavLink>
                  <NavLink to="/Enfrentamiento" className="listItem" activeClassName="activeItem">
                    Reg. enfrentamiento de ronda
                  </NavLink>
                </div>
              </div>
              <NavLink to="/info" className="listItem" activeClassName="activeItem">
                Manual
              </NavLink>
              <NavLink to="/" className="listItem" activeClassName="activeItem">
                Cerrar Sesión
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <SearchIcon className="icon" />
            <a href="tel:+50582861396">
              <CallIcon className="icon" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default List2;
