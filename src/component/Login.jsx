// import React from "react";
// import { TextField, Button } from "@mui/material";
// import { AccountCircle } from "@mui/icons-material";
// import LockIcon from '@mui/icons-material/Lock';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import { useHistory } from "react-router-dom";
// import "../CSS/Login.css"
// import List from "./List"

// const Login = () => {
//   const history = useHistory();


//   const handleLogin = () => {
//     // Redirigir a la página Dashboard al hacer clic en el botón "Entrar"
//     history.push("/Dashboard");
//   };

//   return <>
//   <List/>
//     <div className="login-container">
//       <h2>Iniciar sesión</h2>
//       <form className="login-form">
//         <div className="form-field">
//           <AccountCircle />
//           <TextField label="Usuario" variant="outlined" />
//         </div>
//         <div className="form-field">
//           <LockIcon />
//           <TextField label="Contraseña" variant="outlined" type="password" />
//         </div>
//         <Button variant="contained" color="primary" onClick={handleLogin}>
//           Entrar
//         </Button>
//       </form>
//       <div className="login-options">
//         <p>Iniciar sesión usando:</p>
//         <div className="social-login">
//           <FacebookIcon />
//           <GoogleIcon />
//         </div>
//       </div>
//     </div>
//   </>;
// }

// export default Login;
