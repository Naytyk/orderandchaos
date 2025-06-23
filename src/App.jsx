import React, { useEffect, useState } from 'react';
import { generateCombinations } from './Functions/utility';
import { checkChaos, checkFinalWin, checkFours, checkOrder } from './Functions/logic';
import './App.css'; // Import the CSS

const crossSVG = (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="red">
    <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
  </svg>
);

const circleSVG = (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="blue">
    <circle cx="12" cy="12" r="8" stroke="blue" strokeWidth="2" fill="none" />
  </svg>
);

let fives = 0;

const App = () => {
  const [grid, setGrid] = useState(Array(36).fill('empty'));
  const [winner, setWinner] = useState([0, 0]);
  const [round, setRound] = useState(0);
  const [final, setFinal] = useState(0);
  const [playerFours, setPlayerFours] = useState([0, 0]);
  const [player1MovesCounts, setPlayer1MovesCounts] = useState(0);
  const [player2MovesCounts, setPlayer2MovesCounts] = useState(0);
  const [n, setN] = useState(0);
  const [fours, setFours] = useState([]);
  const [orderchaos, setOrderChaos] = useState(['Order', 'Chaos'])
  const [fiveMoves, setFiveMoves] = useState([0, 0]);

  useEffect(() => {
    fives = generateCombinations(6, 5);
    setFours(() => {
      let arr = [0, 0];
      arr[0] = generateCombinations(6, 4);
      arr[1] = generateCombinations(6, 4);
      return arr;
    });
  }, []);

  useEffect(() => {
    if (round == 2) {
      setFinal(checkFinalWin(winner, fiveMoves, fours));
    }
  }, [round, fiveMoves, fours]);



  const handleClick = (index) => {
    if (round < 2) {
      setGrid(prev => {
        const newGrid = [...prev];
        if (newGrid[index] == 'empty') {
          if (round % 2 == 0) {
            const player = ['cross', 'circle'];
            newGrid[index] = player[n % 2];
            setN(n + 1);

            // Increment Moves
            if (n % 2) {
              setPlayer2MovesCounts(player2MovesCounts + 1);
            } else {
              setPlayer1MovesCounts(player1MovesCounts + 1);
            }

            // Check Fours
            if (checkFours(fours[0], newGrid, 'cross')) {
              setPlayerFours(prev => {
                const updated = [...prev];
                updated[0] += 1;
                return updated;
              });
            }
            if (checkFours(fours[1], newGrid, 'circle')) {
              setPlayerFours(prev => {
                const updated = [...prev];
                updated[1] += 1;
                return updated;
              });
            }


            if (checkOrder(fives, newGrid, 'cross')) {
              setWinner(prev => {
                const newwin = [...prev];
                newwin[round] = 'cross'
                return newwin;
              });
              setFiveMoves(prev => {
                const newfives = [...prev];
                newfives[0] = player1MovesCounts + 1;
                newRound();
                return newfives;
              });
            }
            else if (checkChaos(n)) {
              newRound();
              setWinner(prev => {
                const newwin = [...prev];
                newwin[round] = 'circle'
                return newwin;
              });

            }
            return newGrid;
          }
          else {
            const player = ['circle', 'cross'];
            newGrid[index] = player[n % 2];
            setN(n + 1);

            // Increment Moves
            if (n % 2) {
              setPlayer1MovesCounts(player1MovesCounts + 1);
            } else {
              setPlayer2MovesCounts(player2MovesCounts + 1);
            }

            // Check Fours
            if (checkFours(fours[0], newGrid, 'cross')) {
              setPlayerFours(prev => {
                const updated = [...prev];
                updated[0] += 1;
                return updated;
              });
            }
            if (checkFours(fours[1], newGrid, 'circle')) {
              setPlayerFours(prev => {
                const updated = [...prev];
                updated[1] += 1;
                return updated;
              });
            }


            if (checkOrder(fives, newGrid, 'circle')) {
              setWinner(prev => {
                const newwin = [...prev];
                newwin[round] = 'circle'
                return newwin;
              });
              setFiveMoves(prev => {
                const newfives = [...prev];
                newfives[1] = player2MovesCounts + 1;
                newRound();
                return newfives;
              });
            }
            else if (checkChaos(n)) {
              newRound();
              setWinner(prev => {
                const newwin = [...prev];
                newwin[round] = 'cross'
                return newwin;
              });

            }
            return newGrid;
          }
        }
        return newGrid;
      });
    }
  };

  const NewGame = () => {
    setGrid(Array(36).fill('empty'));
    setN(0);
    setPlayerFours([0, 0]);
    setPlayer1MovesCounts(0)
    setPlayer2MovesCounts(0)
    setFinal(0);
    setWinner([0, 0]);
    setRound(0);
  }
  const newRound = () => {
    setGrid(Array(36).fill('empty'));
    setPlayer1MovesCounts(0);
    setPlayer2MovesCounts(0);
    setOrderChaos(['Chaos', 'Order']);
    setRound(prev => prev + 1);
    setN(0);
  }


  return (
    <div className="container">
      <div className="player-panel">
        <div className="player">
          <h3>X: {orderchaos[0]}</h3>
          <p>4s: {playerFours[0]}</p>
          <p>Moves: {player1MovesCounts}</p>
        </div>
        <button className="new-game-btn" onClick={NewGame}>New Game</button>
        <div className="player">
          <h3>O: {orderchaos[1]}</h3>
          <p>4s: {playerFours[1]}</p>
          <p>Moves: {player2MovesCounts}</p>
        </div>
      </div>
      <div className="main-panel">
        <div className="grid">
          {grid.map((cell, idx) => (
            <div key={idx} className="cell" onClick={() => handleClick(idx)}>
              {cell === 'cross' && crossSVG}
              {cell === 'circle' && circleSVG}
            </div>
          ))}
        </div>

        <div className="game-info">
          <span>Game 1: {winner[0]}</span>
          <span>Game 2: {winner[1]}</span>
          <span>Final: {final}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
