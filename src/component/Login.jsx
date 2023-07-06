import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import  {Alert} from '@mui/material';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import List from "../component/List"
import Footer from "./Footer"
import axios from 'axios';

const Login = (props) => {
  const history = useNavigate();

  const abc = path => {
    console.log(body)
    if (body.username != "" && body.password != "") {
      axios.post('http://localhost:4000/api/LoginIngresar', body)
        .then(({ data }) => {
          console.log(data)
          history(path);
          setError({ status: true, msg: "Inicio de Sesion exitoso", type: 'success' })
        })
        .catch(({ response }) => {
          console.log(response.data)
          setError({ status: true, msg: "Usuario o Contraseña incorrectos", type: 'error' })
        })
    }
    else {
      setError({ status: true, msg: "Usuario o Contraseña incorrectos", type: 'error' })
    }

  };

  const [body, setBody] = useState({ username: '', password: '' })

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
      ...body,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <>
    <List />
    <div className="login-form-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name='username'
            value={body.username}
            onChange={inputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name='password'
            value={body.password}
            onChange={inputChange}
            required
          />
        </div>

      </form>
      <button onClick={() => abc('/Deportista')}>Entrar</button>

      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}

      <a href="/forgot-password">¿Olvidaste tu contraseña?</a>


      <div className="social-login">
        <span>Iniciar sesión con:</span>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaGoogle className="icon" />
        </div>
      </div>

    </div>
    <Footer />
  </>;
};

export default Login;
