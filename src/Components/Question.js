import React from "react";

const Question = (props) => {
  const arrayIndex = props.questionNumber - 1;
  const question = props.data[arrayIndex].question;

  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
