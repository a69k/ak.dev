import React, { useState, useEffect } from 'react';

const RPS = () => {
  const [playerSel, setPlayerSel] = useState(null);
  const [compSel, setCompSel] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0
  });

  useEffect(() => {
    // Load score from local storage on component mount
    const savedScore = JSON.parse(localStorage.getItem('score'));
    if (savedScore) {
      setScore(savedScore);
    }
  }, []);

  const compMove = () => {
    const randNo = Math.random();
    if (randNo >= 0 && randNo <= 1 / 3) {
      return 'rock';
    } else if (randNo > 1 / 3 && randNo <= 2 / 3) {
      return 'paper';
    } else if (randNo > 2 / 3 && randNo <= 1) {
      return 'scissors';
    }
  };

  const Game = (playerMove) => {
    setPlayerSel(playerMove);
    const compMoveResult = compMove();
    setCompSel(compMoveResult);

    let gameResult;

    if (playerMove === compMoveResult) {
      gameResult = 'Tie';
      setScore((prevScore) => ({ ...prevScore, ties: prevScore.ties + 1 }));
    } else if (
      (playerMove === 'rock' && compMoveResult === 'scissors') ||
      (playerMove === 'paper' && compMoveResult === 'rock') ||
      (playerMove === 'scissors' && compMoveResult === 'paper')
    ) {
      gameResult = 'You Win!';
      setScore((prevScore) => ({ ...prevScore, wins: prevScore.wins + 1 }));
    } else {
      gameResult = 'You Lose!';
      setScore((prevScore) => ({ ...prevScore, losses: prevScore.losses + 1 }));
    }

    setResult(gameResult);
  };

  const resetGame = () => {
    setPlayerSel(null);
    setCompSel(null);
    setResult('');

    // Reset the score state and save to local storage
    const newScore = { wins: 0, losses: 0, ties: 0 };
    setScore(newScore);
    localStorage.setItem('score', JSON.stringify(newScore));
  };

  useEffect(() => {
    // Save score to local storage whenever it changes
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  return (
    <div>
      <h2>Rock, Paper, Scissors Game</h2>
      <div>
        <button onClick={() => Game('scissors')}>Scissors</button>
        <button onClick={() => Game('paper')}>Paper</button>
        <button onClick={() => Game('rock')}>Rock</button>
      </div>
      <div>
        {playerSel && <p>You chose: {playerSel}</p>}
        {compSel && <p>Computer chose: {compSel}</p>}
        {result && <p>{result}</p>}
      </div>
      <div>
        <p>Score: Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}</p>
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default RPS;
