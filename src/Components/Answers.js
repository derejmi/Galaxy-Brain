import React from "react";

const Answers = (props) => {
  const arrayIndex = [props.questionNumber] - 1;
  const correct = props.data[arrayIndex]["correct_answer"];
  const answersArray = props.data[arrayIndex]["incorrect_answers"];
  const randomNo = Math.floor(Math.random() * answersArray.length + 1);
  answersArray.splice(randomNo, 0, correct);

  return (
    <div>
      {answersArray.map((elem, idx) => (
        <button key={idx}>{elem}</button>
      ))}
    </div>
  );
};

export default Answers;
