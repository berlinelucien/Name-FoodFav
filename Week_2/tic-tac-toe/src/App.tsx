import React from 'react';
import './App.css';
import { ConnectedTicTacToe } from './components/TicTacToe';
import { Provider } from 'react-redux';
import { gameStore } from './redux-components/GameStore';

function App() {
  return (
    <Provider store={gameStore}>
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <ConnectedTicTacToe />
      </div>
    </Provider>
  );
}

export default App;
