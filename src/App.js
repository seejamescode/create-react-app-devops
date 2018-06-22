import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    fetch(`/api/v1/github`, {
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const repos = data.map(repo => <p key={repo.id}>{repo.name}</p>);
          this.setState({ repos });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>App Creator's Repos:</h3>
        {this.state.repos}
      </div>
    );
  }
}

export default App;
