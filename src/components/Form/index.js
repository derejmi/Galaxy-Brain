import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="form">
        <p>
          Welcome to Galaxy Brain, a multiplayer game where users can take turns
          to answer trivia questions!
        </p>

        <div className="playerandrounds">
          <h2>Select number of players and rounds</h2>

          <form>
            <input
              className="players"
              type="number"
              min="1"
              max="4"
              name="players"
              placeholder="Enter the number of players"
              value={this.props.players}
              onChange={this.props.handleInputChange}
            />
          </form>

          <form>
            <input
              className="rounds"
              type="number"
              min="1"
              max="5"
              name="rounds"
              placeholder="Enter the number of rounds"
              value={this.props.rounds}
              onChange={this.props.handleInputChange}
            />
          </form>
        </div>

        <div className="difficulty">
          <h3>Choose a difficulty</h3>
          <form>
            <button
              value="easy"
              name="difficulty"
              onClick={this.props.handleInputChange}
            >
              {" "}
              Easy
            </button>
            <button
              value="medium"
              name="difficulty"
              onClick={this.props.handleInputChange}
            >
              {" "}
              Medium
            </button>
            <button
              value="hard"
              name="difficulty"
              onClick={this.props.handleInputChange}
            >
              {" "}
              Hard
            </button>
          </form>

          <button onClick={this.props.handleClick}>Start game</button>
        </div>
      </div>
    );
  }
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
