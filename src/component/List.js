import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import CallIcon from '@mui/icons-material/Call';
import "../CSS/ListStyle.css";

const List = () =>{
    return<>
    <header>
        <div className="container container-flex">
            <div>
                <h1 className="logo">EA</h1>
            </div>
            <nav>
                <div className="list">
                    <NavLink to="/" className="listItem" activeclassname="activeItem">Home</NavLink>
                    <NavLink to="/Contact" className="listItem" activeclassname="activeItem">Contacto</NavLink>
                </div>
            </nav>
            <div className="icons">
                <SearchIcon className="icon"/>
                <a href="/Login">
                <LoginIcon  className="icon"/>
                </a>

                
                <a href="tel:+50582861396">
                <CallIcon   className="icon"/>

                </a>

            </div>
        </div>
    </header>
    </>

}
export default List;