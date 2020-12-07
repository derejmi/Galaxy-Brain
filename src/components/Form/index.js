import React, { Component } from 'react';
import './form.css'

class Form extends Component {
    state = {
        difficulty: "",
        players: "",
        rounds: "",
        selection: []
    }


    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleClick = (event) => {
        event.preventDefault();
        
        this.fetchAPI()
    }



    fetchAPI = () => {
        console.log("Lets fetch some json")
        const r = this.state.rounds
        const p = this.state.players
        const multi = p*r
        let url  = `https://opentdb.com/api.php?amount=${multi}&category=10&difficulty=${this.state.difficulty}&type=multiple`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({selection: data })
                console.log("check here")
                console.log(this.state.selection)
            })
    }

    render(){
        console.log(this.state)
        return (
            <div className="form">
                <h2>Select number of players and rounds</h2>
            
            <form>
            <input type="number" min="1" max="4" name="players" placeholder="Enter the number of players" value={this.state.players} onChange={this.handleInputChange} />
            </form>
            {/* </div> */}

            <div> 
            <form >
            <input type="number" min="1" max="5" name="rounds" placeholder="Enter the number of rounds" value={this.state.rounds} onChange={this.handleInputChange} />
            </form>
            </div>
            
            <form >
                <h2>Choose a difficulty</h2>
                <button value="easy" name="difficulty"  onClick={this.handleInputChange}> Easy</button>
                <button value="medium" name="difficulty" onClick={this.handleInputChange}> Medium</button>
                <button value="hard" name="difficulty" onClick={this.handleInputChange}> Hard</button>
                <button value="" onClick={this.handleClick}> Random</button>
            </form>
            {/* </div> */}
       
            {/* <h2>{this.state.selection.results}</h2> */}
            </div>
        )}

}

export default Form;

//the thought process here is that when the buttons are clicked they save the state and when the api is called the state is used to from the link to select the right difficulty for the player]
//shoul be a drop down list for the number of players and the number of rounds, max 20 questions
// SO the slider for the players goes from 1 to 4
//the list for the rounds goes form 1 to 5
// minimum number of questions is 1 and the max is 20
//the categories shoudl also be a drop down list use that to add to the url
//I kinda like the buttons idea so ill role with that.
//Cant really use routing becuase the state gets rest apprently.