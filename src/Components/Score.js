import React from "react";

const Score = (props) => {
  return (
    <div>
      <h1>Player{props.current+1}</h1>
      <h2>Score</h2>
    </div>
  );
};

export default Score;
