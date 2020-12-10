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
          <h2 id="select-header">Select number of players and rounds</h2>

          <form id="form-players">
            <input
              id="input-players"
              type="number"
              min="1"
              max="4"
              name="players"
              placeholder="Enter the number of players"
              value={this.props.players}
              onChange={this.props.handleInputChange}
            />
          </form>
        </div>

        <form id="form-rounds">
          <input
            id="input-rounds"
            type="number"
            min="1"
            max="5"
            name="rounds"
            placeholder="Enter the number of rounds"
            value={this.props.rounds}
            onChange={this.props.handleInputChange}
          />
        </form>

        <h2 id="select">Choose a category</h2>
        <select onChange={this.props.handleInputC}>
          {this.props.categories.map((category) => {
            return (
              <option value={category.id} name="id" key={category.id}>
                {category.name}{" "}
              </option>
            );
          })}
        </select>

        <div id="form-difficulty">
          <h2>Choose a difficulty</h2>
          <button
            id="button-easy"
            value="easy"
            name="difficulty"
            onClick={this.props.handleInputChange}
          >
            Easy
          </button>
          <button
            id="button-medium"
            value="medium"
            name="difficulty"
            onClick={this.props.handleInputChange}
          >
            Medium
          </button>
          <button
            id="button-hard"
            value="hard"
            name="difficulty"
            onClick={this.props.handleInputChange}
          >
            Hard
          </button>
        </div>

        <button id="button-start" onClick={this.props.handleClick}>
          Start game
        </button>
      </div>
    );
  }
}

export default Form;
