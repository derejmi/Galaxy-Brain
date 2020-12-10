import React from "react";

const Score = (props) => {
  const playerIndex = props.current
  const b = props.playerData[playerIndex]
  const a = {...b}
  const playerScore=a.score


  return (
    <div>
      <h1 id="s">Player {props.current+1}</h1>
      <h2 id="ss">Score {playerScore}</h2>
    </div>
  );
};

export default Score;
