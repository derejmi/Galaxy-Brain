import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="form">
        <h2 id="select">Select number of players and rounds</h2>

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
        {/* </div> */}

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

        <form id="form-difficulty">
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
          <button
            id="button-random"
            value="random"
            name="difficulty"
            onClick={this.props.handleInputChange}
          >
            Random
          </button>
        </form>

        <select onClick={this.props.compClick}>
          {this.props.categories.map((category) => {
            return (
              <option
                value={category.id}
                name="id"
                key={category.id}
                onClick={this.props.handleInputC}
              >
                {category.name}{" "}
              </option>
            );
          })}
        </select>

        <button id="button-start" onClick={this.props.handleClick}>
          Start game
        </button>
      </div>
    );
  }
}

export default Form;
