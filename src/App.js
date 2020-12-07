import React, { Component } from "react";
import Form from "./components/Form/index"

import QuestionContainer from "./Containers/QuestionContainer";


class App extends React.Component {
  render() {
    return (
      <main>

        <h1>Galaxy Brain</h1>
        <Form />

        <QuestionContainer />

      </main>
    );
  }
}

export default App;
