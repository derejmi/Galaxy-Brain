import React from "react";

const Winner = (props) => {
    const playerNumber = props.players
    const playerArr = props.playerData
    const finalArr = playerArr.slice(0,playerNumber)
    console.log("playerArr", playerArr)
    const winner = (playerArr) =>{

    const winnerArr = []
    let highScore = 0

    for(let i = 0 ; i < playerArr.length; i++){
      let currentElem = playerArr[i]
      if(currentElem.score > highScore){
        highScore = currentElem.score
      }
    }

    for(let i = 0; i < playerArr.length; i++){
      let currentElem = playerArr[i]
      if(currentElem.score === highScore){
        winnerArr.push(currentElem.player+' | Score:'+highScore)
      }
    }
    return winnerArr
  } 

const refreshPage = ()=>{
    window.location.reload();
  }

const winningPlayer = winner(finalArr)

const str = winningPlayer.join(", ")

console.log("winners",winningPlayer)

if(winningPlayer.length > 1){
  return (
  <div>
    <h1>Game Over! Winners were ...{str}</h1>
    <button onClick={refreshPage}>Click to reload!</button>
    </div>
    );
  }else{
    return (
    <div>
      <h1>Game Over! Winner was ...{str}</h1>
      <button onClick={refreshPage}>Click to reload!</button>
      </div>
      );
    }
  };

export default Winner;
