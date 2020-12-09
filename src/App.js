import React, { Component } from "react";
// import Form from "./components/Form/index"

import QuestionContainer from "./Containers/QuestionContainer";
import Background from "./Components/Background/background.gif";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Galaxy Brain</h1>
        <main>
          {/* <img
            src={Background}
            alt=""
            style={{
              zIndex: "-1",
              backgroundRepeat: "repeat",
            }}
          /> */}
          {/* <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src={Background} type="video/mp4" />
          </video> */}
          <QuestionContainer />
        </main>
      </>
    );
  }
}

export default App;
