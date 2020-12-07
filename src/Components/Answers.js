import React from "react";

const Answers = (props) => {
  const arrayIndex = [props.questionNumber] - 1;
  const correct = props.data[arrayIndex]["correct_answer"];
  const answersArray = props.data[arrayIndex]["incorrect_answers"];
  const randomNo = Math.floor(Math.random() * answersArray.length);
  answersArray.splice(randomNo, 0, correct);

  return (
    <div>
      {answersArray.slice(0, 4).map((elem, idx) => (
        <button onClick={props.handleAnswerClick} key={idx + 1}>
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Answers;
