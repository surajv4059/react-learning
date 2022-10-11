import React, { Component } from "react";
import "./App.css";

class App extends Component {
  fooo = () => "in class";
  render() {
    const name = "Suraj";
    const foo = () => "Bar";
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
        <h1>Hello {name.toUpperCase()} </h1>
        <h1>Hello {foo()} </h1>
        <h1>Hello {this.fooo()} </h1>
      </div>
    );
  }
}

export default App;
