import React from "react";

import "./Answers.css";

// const Answers = (props) => {
//   debugger;
//   const arrayIndex = [props.questionNumber] - 1;
//   const correct = props.data[arrayIndex]["correct_answer"];
//   const answersArray = props.data[arrayIndex]["incorrect_answers"];
//   const randomNo = Math.floor(Math.random() * answersArray.length);
//   answersArray.splice(randomNo, 0, correct);

//   return (
//     <div>
//       {answersArray.map((elem, idx) => (
//         <button onClick={props.handleAnswerClick} key={idx + 1}>
//           {elem}
//         </button>
//       ))}
//     </div>
//   );
// };

class Answers extends React.Component {
  render() {
    const arrayIndex = [this.props.questionNumber] - 1;
    const correct = this.props.data[arrayIndex]["correct_answer"];
    const answersArray = this.props.data[arrayIndex]["incorrect_answers"];
    const randomNo = Math.floor(Math.random() * answersArray.length);
    const newArray = [...answersArray];
    newArray.splice(randomNo, 0, correct);
    return (
      <div className="answerButtonsContainer">
        {newArray.map((elem, idx) => (
          <button onClick={this.props.handleAnswerClick} key={idx + 1}>
            {atob(elem)}
          </button>
        ))}
      </div>
    );
  }
}

export default Answers;
