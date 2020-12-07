import React from "react";
// import Score from "../components/Score.js";
// import Question from "../components/Question.js";
// import Answers from "../components/Answers.js";
import Form from "../components/Form/index"

class QuestionContainer extends React.Component {
  //URL not needed just for reference
  state = {
      questionNumber: 1,
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
          this.setState({selection: data.results })
          console.log("check here")
          console.log(this.state.selection)
      })
}

  

  render() {
    // console.log(this.state.questionData);
    return (

      
      <div>
        <Form handleClick={this.handleClick} handleInputChange={this.handleInputChange} rounds={this.state.rounds} players={this.state.players} difficulty={this.state.difficulty}/>

      </div>
    );
  }
}

export default QuestionContainer;
