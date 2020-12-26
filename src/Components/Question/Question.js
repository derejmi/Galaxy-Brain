import React from "react";

import "./Question.css";

const Question = (props) => {
  const arrayIndex = props.questionNumber - 1;
  const question = props.data[arrayIndex].question;

  return (
    <div>
      <p>{atob(question)}</p>
    </div>
  );
};

export default Question;
