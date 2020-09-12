import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Calculator } from './components/Calculator';

const day = 'Saturday';

function App() {
  // JSX
  return (
    <div className="App">
        <p>Currency converter</p>
        <p>{day}</p>

        <Calculator />
    </div>
  );
}

export default App;
