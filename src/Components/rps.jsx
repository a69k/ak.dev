import React, { useState } from 'react';
import '../assets/stylesheets/RPS.scss';

export default function RPS() {
  const [playerChoice, setplayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');


  const compMove = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[(Math.floor(Math.random() * choices.length))];
  };
  const Game = (playerMove) => {
    const compSel = compMove();
    let result;

    if (playerMove === compSel) {
      result = 'Tie';
    } else if (
      (playerMove === 'Rock' && compSel === 'Scissors') ||
      (playerMove === 'Paper' && compSel === 'Rock') ||
      (playerMove === 'Scissors' && compSel === 'Paper')
    ) {
      result = 'You Win!';
    } else {
      result = 'You Lose!';
    }

    setplayerChoice(playerMove);
    setComputerChoice(compSel);
    setResult(result);
  };

  const resetGame = () => {
    setplayerChoice(null);
    setComputerChoice(null);
    setResult('');
    console.log("Done!!!!!!!!!!!! >.<")
  };


return (
  <div className='rpsGame'>
    <div className='rps'>
      <button onClick={() => Game('Scissors')}>✂️</button>
      <button onClick={() => Game('Paper')}>📝</button>
      <button onClick={() => Game('Rock')}>🪨</button>
      <button id='reset' onClick={resetGame}>🔄</button>
    </div>
    <div className='rpsRes'>
      <p>
       <span> {playerChoice && <span>You chose: {playerChoice}</span>}, </span> 
       <span> {computerChoice && <span>Computer chose: {computerChoice}</span>}, </span> 
       {result && <span>{result}</span>}
      </p>
    </div>
  </div>
);

}
