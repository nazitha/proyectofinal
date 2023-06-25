import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../CSS/Footer.css";

const Footer = () =>{
    return <>
    <footer>
        <div className="container container-flex">
            <div className="icons">
                <a href="https://www.facebook.com/search/top?q=escuela%20estrellas%20del%20ajedrez">
                <FacebookIcon className="icon"/>
                </a>
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B50587361601%26data%3DARC4Hyz7VF00MAGndrfejJLR7B8q58mNWkUPxQN3CVC--Czt7VYps1MXdLNAuz3ooJefIC_zIq7LDq1AYhB0kLa-z4cUnD-E1tv42SnsFxJchbMvjtBrD1ial3W7aQ1DwDWh7dnshOyfAg4iEePjabWxsg%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR0Ajm25IlMvBp44ew755J6x3qDDVeo5CV18Yq-qyJbTB_CoqaYaCMUEj8E&h=AT3J0KWQQ-L7aCrJy5OTqwYtBfPdUz2YQ9xLATvC11_tH530CN-s7F6_x_LgMk_zwaQTiHv8E0W0iH-EGadNwdVL0-vrR5YJUvmtU5yariJQLGycbQw2RH3zP3Ii8uMFGBdG1A">
                <WhatsAppIcon className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/steven-s%C3%A1nchez-809493242/">
                <LinkedInIcon className="icon"/>
                </a>
            </div>
            <div className="line">
                <hr/>
                <hr/>
            </div>
            <div className="copyright">
                <p>Todos los derechos reservados &copy;</p>

            </div>
        </div>
    </footer>
    
    </>

}
export default Footer;
