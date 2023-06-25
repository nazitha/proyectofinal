import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Footer from "./component/Footer";
import Dashboard from "./Dashboard/Dashboard";
import info from "./Dashboard/info"
import Estadistica from "./Dashboard/Estadistica"
import Torneo from "./Dashboard/Torneo"

const App = () => {
  return <>
  
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/Contact" Component={Contact}/>
    <Route path="/Login" Component={Login}/>
    <Route path="/Dashboard" Component={Dashboard}/>
    <Route path="/info" Component={info}/>
    <Route path="/Estadistica" Component={Estadistica}/>
    <Route path="/Torneo" Component={Torneo}/>

  </Routes>
  <Footer/>
  </>;

}
export default App;