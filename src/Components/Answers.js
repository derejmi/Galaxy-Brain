import React from "react";

const Answers = (props) => {
  const arrayIndex = props.questionNumber - 1;
  const correct = props.data[arrayIndex].correctAnswer;

  return (
    <div>
      <p>Answers: </p>
    </div>
  );
};

export default Answers;
