import React from "react";
import data from "../api/dummyData.js";
import Score from "../Components/Score.js";
import Question from "../Components/Question.js";
import Answers from "../Components/Answers.js";

class QuestionContainer extends React.Component {
  //URL not needed just for reference
  state = {
    URL:
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
    questionData: data,
    questionNumber: 9,
  };

  render() {
    console.log(this.state.questionData);
    return (
      <div>
        <Form />
        <Score />
        <Question
          data={this.state.questionData.results}
          questionNumber={this.state.questionNumber}
        />
        <Answers
          data={this.state.questionData.results}
          questionNumber={this.state.questionNumber}
        />
      </div>
    );
  }
}

export default QuestionContainer;
