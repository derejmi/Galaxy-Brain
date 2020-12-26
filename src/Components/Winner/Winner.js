import React from "react";
import "./Winner.css";

const Winner = (props) => {
  const playerNumber = props.players;
  const playerArr = props.playerData;
  const finalArr = playerArr.slice(0, playerNumber);
  console.log("playerArr", playerArr);
  const winner = (playerArr) => {
    const winnerArr = [];
    let highScore = 0;

    for (let i = 0; i < playerArr.length; i++) {
      let currentElem = playerArr[i];
      if (currentElem.score > highScore) {
        highScore = currentElem.score;
      }
    }

    for (let i = 0; i < playerArr.length; i++) {
      let currentElem = playerArr[i];
      if (currentElem.score === highScore) {
        winnerArr.push(currentElem.player + " | Score : " + highScore);
      }
    }
    return winnerArr;
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const winningPlayer = winner(finalArr);

  const str = winningPlayer.join(", ");

  console.log("winners", winningPlayer);

  if (winningPlayer.length > 1) {
    return (
      <div className="winnerBackground">
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <h1>Game Over!</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1 id="multiple-header">Winners were {str}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="reloadButton" onClick={refreshPage}>
          Click to reload!
        </button>
      </div>
    );
  } else {
    return (
      <div className="winnerBackground">
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <h1>Game Over!</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1 id="single-header">Winner was {str}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="reloadButton" onClick={refreshPage}>
          Click to reload!
        </button>
      </div>
    );
  }
};

export default Winner;
