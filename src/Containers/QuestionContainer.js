import React from "react";
// import Score from "../components/Score.js";
import Question from "../components/Question.js";
import Answers from "../components/Answers.js";
import Form from "../components/Form/index";

class QuestionContainer extends React.Component {
  //URL not needed just for reference
  state = {
    questionNumber: 0,
    difficulty: "",
    players: "",
    rounds: "",
    total: "",
    selection: [],
  };
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.fetchAPI();
  };

  setPlayers = () => {
    switch (this.state.players) {
      case "1":
        this.setState({ player1: { score: 0 } });
        break;
      case "2":
        this.setState({ player1: { score: 0 }, player2: { score: 0 } });
        break;
      case "3":
        this.setState({
          player1: { score: 0 },
          player2: { score: 0 },
          player3: { score: 0 },
        });
        break;
      default:
        this.setState({
          player1: { score: 0 },
          player2: { score: 0 },
          player3: { score: 0 },
          player4: { score: 0 },
        });
    }
  };

  fetchAPI = () => {
    console.log("Lets fetch some json");
    const r = this.state.rounds;
    const p = this.state.players;
    const multi = p * r;
    let url = `https://opentdb.com/api.php?amount=${multi}&category=10&difficulty=${this.state.difficulty}&type=multiple&encode=base64`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          selection: data.results,
          questionNumber: 1,
          total: multi,
        });
        this.setPlayers();

        console.log("check here");
        console.log(this.state.selection);
      });
  };

  handleAnswerClick = (e) => {
    const answer = e.target.textContent;
    console.log(e);
    const prevCount = this.state.questionNumber;
    const questionIndex = prevCount - 1;
    const correctAnswer = this.state.selection[questionIndex]["correct_answer"];
    console.log(answer, correctAnswer);
    //if answer = correctAnswer - increment score...
    //
    this.setState({ questionNumber: prevCount + 1 });
  };

  render() {
    const view = () => {
      switch (true) {
        case this.state.questionNumber === 0:
          return (
            <Form
              handleClick={this.handleClick}
              handleInputChange={this.handleInputChange}
              rounds={this.state.rounds}
              players={this.state.players}
              difficulty={this.state.difficulty}
            />
          );
        case this.state.questionNumber > 0 &&
          this.state.questionNumber <= this.state.total:
          return (
            <div>
              <Question
                data={this.state.selection}
                questionNumber={this.state.questionNumber}
              />
              <Answers
                data={this.state.selection}
                questionNumber={this.state.questionNumber}
                handleAnswerClick={this.handleAnswerClick}
              />
            </div>
          );
        case this.state.questionNumber > 0 && !this.state.total:
          return <h1>Please fill in all form fields </h1>;
        default:
          return <h1>Game Over! Winner was player...</h1>;
      }
    };

    return <div>{view()}</div>;
  }
}

export default QuestionContainer;
