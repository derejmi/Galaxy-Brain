

const finalArr = arr.slice(0,playernumber)



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
            winnerArr.push(currentElem.player)
        }
    }

    return winnerArr

} 

winner(finalArr)