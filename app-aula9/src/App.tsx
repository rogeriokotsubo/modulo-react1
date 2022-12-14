import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Router } from './router/router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
