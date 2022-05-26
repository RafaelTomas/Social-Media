import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Container>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
     
      </Container>
    </Router>
  );
}

export default App;
