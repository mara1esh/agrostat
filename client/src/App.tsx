import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header'
import Shareholder from './components/Shareholder/Shareholder'

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline>
      <Container>
        <Header />
        <Route path='/shareholders' component={Shareholder} />
      </Container>
      </CssBaseline>
    </Router>
  );
}

export default App;
