import React from "react";
import Score from "../components/Score.js";
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
    playerStats: [],
    current: 0
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
        this.setState({ playerStats: [{ id: 1, player: "Player 1", score: 0 }], current: 0});
        console.log("hi",this.state);
        break;
      case "2":
        this.setState({
          playerStats: [
            { id: 1, player: "Player 1", score: 0 },
            { id: 2, player: "Player 2", score: 0 },
          ],
          current: 0
        });
        break;
      case "3":
        this.setState({
          playerStats: [
            { id: 1, player: "Player 1", score: 0 },
            { id: 2, player: "Player 2", score: 0 },
            { id: 3, player: "Player 3", score: 0 },
          ],
          current: 0
        });
        break;
      default:
        this.setState({
          playerStats: [
            { id: 1, player: "Player 1", score: 0 },
            { id: 2, player: "Player 2", score: 0 },
            { id: 3, player: "Player 3", score: 0 },
            { id: 4, player: "Player 4", score: 0 },
          ],
          current: 0
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
        console.log("playerStats ->", this.state.playerStats)
        console.log("current-player",this.state.playerStats[0].player)
      });
  };

  handleAnswerClick = (e) => {
    const answer = e.target.textContent;
    console.log(e);
    const prevCount = this.state.questionNumber;
    const questionIndex = prevCount - 1;
    const correctAnswer = atob(
      this.state.selection[questionIndex]["correct_answer"]
    );
    console.log(answer, correctAnswer);
    //
    const currentPlayerIndex = this.state.current;
    console.log("currentPlayerIndex",currentPlayerIndex)
    //
    if (answer === correctAnswer){
      let stateCopy = Object.assign({}, this.state);
      stateCopy.playerStats[currentPlayerIndex].score += 1;
      this.setState(stateCopy)
      this.nextTurn();
    }
    console.log("playerStats ->", this.state.playerStats)
    console.log("current-score",this.state.playerStats[currentPlayerIndex].score)
    //
    this.setState({ questionNumber: prevCount + 1 });
    this.nextTurn();
  };

  nextTurn = () => {
    const { playerStats, current } = this.state;
    const val = current === playerStats.length - 1 ? 0 : current + 1;
    this.setState({ current: val });
    console.log("current-new",current)
    console.log("val",val)
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
              <Score 
              current={this.state.current}/>
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