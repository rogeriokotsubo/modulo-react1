import React from 'react';
import './App.css';
import { Form } from './components/form';
import { User } from './components/userdata';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <User>
            <Form/>
          </User>      
        </header>
    </div>
  );
}

export default App;
