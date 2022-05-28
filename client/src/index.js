import React from 'react';
import ReactDOM from "react-dom/client";
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import "./index.css";

import  Home  from "./templates/Home";
import  Register  from "./templates/Register";
import  Login  from "./templates/Login";
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Container>
        <Nav/>
      <Routes>
        <Route exact  path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  </React.StrictMode>
);


