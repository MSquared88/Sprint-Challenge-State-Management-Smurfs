import React, { Component } from "react";

// styles
import "./App.css";

// components
import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
