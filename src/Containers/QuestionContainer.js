import React from "react";
import Score from "../components/Score/Score.js";
import Winner from "../components/Winner/Winner.js";
import Question from "../Components/Question/Question.js";
import Answers from "../Components/Answers/Answers.js";
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
    categories: [],
    OPTION: 0,
    playerStats: [],
    current: 0
  };

  componentDidMount() {
    console.log("mount works");
    const url = "https://opentdb.com/api_category.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          categories: data.trivia_categories,
        });
      });
  }

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

  handleInputC = (e) => {
    e.preventDefault();
    console.log(e, "hello");
    this.setState({
      OPTION: e.target.value,
    });
  };

  setPlayers = () => {
    switch (this.state.players) {
      case "1":
        this.setState({ playerStats: [{ player: "Player 1", score: 0 }], current: 0});
        break;
      case "2":
        this.setState({
          playerStats: [
            { player: "Player 1", score: 0 },
            { player: "Player 2", score: 0 },
          ],
          current: 0
        });
        break;
      case "3":
        this.setState({
          playerStats: [
            { player: "Player 1", score: 0 },
            { player: "Player 2", score: 0 },
            { player: "Player 3", score: 0 },
          ],
          current: 0
        });
        break;
      default:
        this.setState({
          playerStats: [
            { player: "Player 1", score: 0 },
            { player: "Player 2", score: 0 },
            { player: "Player 3", score: 0 },
            { player: "Player 4", score: 0 },
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
    let url = `https://opentdb.com/api.php?amount=${multi}&category=${this.state.OPTION}&difficulty=${this.state.difficulty}&type=multiple&encode=base64`;
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
    const correctAnswer = atob(
      this.state.selection[questionIndex]["correct_answer"]
    );
    console.log(answer, correctAnswer);
    //if answer = correctAnswer - increment score...
    const currentPlayerIndex = this.state.current;
    //
    if (answer === correctAnswer){
      let stateCopy = Object.assign({}, this.state);
      stateCopy.playerStats[currentPlayerIndex].score += 1;
      this.setState(stateCopy)
      this.nextTurn();
    }
    //
    this.setState({ questionNumber: prevCount + 1 });
    this.nextTurn();
  };

  nextTurn = () => {
    const { playerStats, current } = this.state;
    const val = current === playerStats.length - 1 ? 0 : current + 1;
    this.setState({ current: val });
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
              categories={this.state.categories}
              handleInputC={this.handleInputC}
            />
          );
        case this.state.questionNumber > 0 &&
          this.state.questionNumber <= this.state.total:
          return (
            <div>
              <Score 
                current={this.state.current}
                playerData={this.state.playerStats}/>
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
            return <div>
              <Winner 
              player={this.state.players}
              current={this.state.current}
              playerData={this.state.playerStats}/>
            </div>
         }
    };

    return <div>{view()}</div>;
  }
}

export default QuestionContainer;
