import React from 'react';
import ReactDOM from "react-dom/client";
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'
import "./index.css";

import { App } from "./templates/App";
import { Register } from "./templates/Register";
import { Login } from "./templates/Login";
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Container>
        <Nav/>
      <Routes>
        <Route exact path='/' component={<App/>} />
        <Route exact path='/login' component={<Login/>} />
        <Route exact path='/register' component={<Register/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  </React.StrictMode>
);


