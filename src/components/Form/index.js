import React, { Component } from 'react';

class Form extends Component {
    state = {
        diff: "",
        players: "",
        rounds: "",
        selection: []
    }




    handleInputChange = (e) => {
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
        const multi = p*r*4
        let url  = `https://opentdb.com/api.php?amount=${multi}&category=10&difficulty=easy&type=multiple`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({selection: data.category })
                console.log(this.state.questions)
            })
    }

    render(){
        console.log(this.state)
        return (
            <div>
            <div> 
            
            <form >
            <input type="text"  name="players" placeholder="Enter the number of players" value={this.state.players} onChange={this.handleInputChange} />
            <input type="submit" id="submit" value="Submit" />
            </form>
            </div>
            <div> 
            
            <form >
            <input type="text"  name="rounds" placeholder="Enter the number of rounds" value={this.state.rounds} onChange={this.handleInputChange} />
            <input type="submit" id="submit" value="Submit" />
            </form>
            </div>
            <form >
                <button value="easy" onClick={this.handleClick}> Easy</button>
                <button value="medium"> medium</button>
                <button value="hard"> Hard</button>
                <button value=""> random</button>
            </form>
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