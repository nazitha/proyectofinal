import React from "react";
import EA from "../images/EA.png";
import "../CSS/Home.css";

const Homepage= () =>{
    return (
        <>
            <div className="mainSection">
                 <div className="contentBox">
                   <h1>Academia Estrellas del Ajedrez</h1>
                   <p>
                        Somos una academia especializada en formar atletas 
                        y entrenadores de ajedrez, con más de 10 años 
                        de experiencia
                   </p>
                 </div>
                 <div className="btnBox">
                    {/* <div className="btn">
                       <NavLink to={About}className="readmore">
                        Leer mas
                       </NavLink>
                    </div>  */}
                    <div className="imgContainer">
                <img src={EA} alt="home"/>
             </div>
            
                 </div>              
             </div>
           
        </>
       
    )

}
export default Homepage;