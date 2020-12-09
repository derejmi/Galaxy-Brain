import React from "react";

const Winner = (props) => {
    const playerNumber = props.players
    const playerArr = props.playerData
    const arr=[]

    const pickHighest = array => {
        const res = {
          player: '',
          score: -Infinity
        };
        array.forEach(element => {
          const { player, score } = element;
          if(score >= res.score){
            res.player = player;
            res.score = score;
            element = {}
            element.player = res.player
            element.score = res.score
            arr.push(element)
          }
        }); 
        return res;
      };
     pickHighest(playerArr)



      const finalArr = arr.slice(0,playerNumber)



const winner = (arr) =>{

    const winnerArr = []
    let highScore = 0

    for(let i = 0 ; i < arr.length; i++){
        let currentElem = arr[i]
        if(currentElem.score > highScore){
           highScore = currentElem.score
        }
    }

    for(let i = 0; i < arr.length; i++){
        let currentElem = arr[i]
        if(currentElem.score === highScore){
            winnerArr.push(currentElem.player+' | Score:'+highScore)
        }
    }

    return winnerArr

} 

const refreshPage = ()=>{
    window.location.reload();  }

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
