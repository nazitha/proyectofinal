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
                  <NavLink to="/Dashboard" className="listItem" activeClassName="activeItem">
                    Reg. atletas
                  </NavLink>
                  <NavLink to="/Torneo" className="listItem" activeClassName="activeItem">
                    Reg. torneos
                  </NavLink>
                  <NavLink to="/Estadistica" className="listItem" activeClassName="activeItem">
                    Reg. rondas
                  </NavLink>
                  <NavLink to="/User" className="listItem" activeClassName="activeItem">
                    Reg. usuarios
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
