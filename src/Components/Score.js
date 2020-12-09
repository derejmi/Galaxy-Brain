import React from "react";

const Score = (props) => {
  const playerIndex = props.current
  const b = props.playerData[playerIndex]
  console.log("playerData",props.playerData)
  const playerArr = props.playerData
  const a = {...b}
  console.log("a",a)
  const playerScore=a.score


  return (
    <div>
      <h1>Player {props.current+1}</h1>
      <h2>Score {playerScore}</h2>
    </div>
  );
};

export default Score;
