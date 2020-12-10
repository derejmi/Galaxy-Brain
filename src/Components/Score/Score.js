import React from "react";
import "./Score.css";

const Score = (props) => {
  const playerIndex = props.current;
  const b = props.playerData[playerIndex];
  const a = { ...b };
  const playerScore = a.score;

  let data = props.playerData;
  let str = "";
  data.forEach((obj) => {
    Object.values(obj).forEach((val, key) => {
      str += val + " ";
      key != 1 ? (str += " : " + " ") : (str += "\n\n");
    });
  });

  console.log(str);

  return (
    <div>
      <h1 id="s">Player {props.current + 1}</h1>
      <h5 id="ss">{str}</h5>
    </div>
  );
};

export default Score;
