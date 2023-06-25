import React from "react";
import "../CSS/ListStyle.css";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';


const List2 = () =>{
    return<>
   <header>
        <div className="container container-flex">
            <div>
                <h1 className="logo">EA</h1>
            </div>
            <nav>
                <div className="list">
                    <NavLink to="/Dashboard" className="listItem" activeclassname="activeItem">Atletas</NavLink>
                    <NavLink to="/Torneo" className="listItem" activeclassname="activeItem">Torneos</NavLink>
                    <NavLink to="/Estadistica" className="listItem" activeclassname="activeItem">Estadisticas</NavLink>
                    <NavLink to="/info" className="listItem" activeclassname="activeItem">Ajustes</NavLink>
                    <NavLink to="/" className="listItem" activeclassname="activeItem">Cerrar Sesion</NavLink>


                </div>
            </nav>
            <div className="icons">
                <SearchIcon className="icon"/>
                              
                <a href="tel:+50582861396">
                <CallIcon   className="icon"/>

                </a>

            </div>
        </div>
    </header>
    </>

}

export default List2;