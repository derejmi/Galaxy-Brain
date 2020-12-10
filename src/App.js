import React, { Component } from "react";
// import Form from "./components/Form/index"

import QuestionContainer from "./Containers/QuestionContainer";
// import Background from "./Components/Background/background.gif";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Galaxy Brain</h1>
        <main>
          <QuestionContainer />
        </main>
      </>
    );
  }
}

export default App;
