import { useState } from "react";
import "../CSS/Contact.css";
import Formularios from "./Formularios";
import List from "./List"
import Footer from "./Footer"

const Contact= () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Nombre",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Nombre",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Correo",
      errorMessage: "It should be a valid email address!",
      label: "Correo",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Fecha de Nacimiento",
      label: "Edad",
    },
  
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return <>
    <List/>
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Contactanos</h1>
        {inputs.map((input) => (
          <Formularios
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Enviar</button>
      </form>
    </div>
    <Footer/>
    </>
};

export default Contact;