import React from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
