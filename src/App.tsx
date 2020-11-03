import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Cards from './features/covid/Cards/Cards';
import Chart from './features/covid/Chart/Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <Chart />
      </header>
    </div>
  );
}

export default App;
