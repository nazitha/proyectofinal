import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import List from "../component/List"
import Footer from "./Footer"
const Login = (props) => {
    const history = useNavigate();

    const abc = path => {
      history(path);
    };
  
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [name]: value,
        }));
      };


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <>
  <List/>
  <div className="login-form-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-field">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
       
      </form>
        <button onClick={() => abc('/Dashboard')}>Entrar</button>
   
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>           

        <div className="social-login">
            <span>Iniciar sesión con:</span>
            <div className="social-icons">
            <FaFacebook className="icon" />
            <FaGoogle className="icon" />
            </div>
      </div>
      
    </div>
    <Footer/>
  </>;
};

export default Login;
