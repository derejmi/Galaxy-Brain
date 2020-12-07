import React from "react";
import data from "../api/data.js";
import Score from "../Components/Score.js";
import Question from "../Components/Question.js";
import Answers from "../Components/Answers.js";

class QuestionContainer extends React.Component {
  //URL not needed just for reference
  state = {
    URL:
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
    questionData: data,
    questionNumber: 1,
  };

  render() {
    return (
      <div>
        <Score />
        <Question
          data={this.state.questionData.results}
          questionNumber={this.state.questionNumber}
        />
        <Answers data={this.state.questionData.results} />
      </div>
    );
  }
}

export default QuestionContainer;
