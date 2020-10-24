import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.list = [
      "Goa(India)",
      "Amsterdam(Netherlands)",
      "New York(USA)",
      "Darjeeling(India)",
      "Tokyo(Japan)",
      "Lonavala(India)",
    ];
    this.i = 0;
  }
  render() {
    return (
      <>
        <ol>
          {this.list.map((city) => {
            if (city.includes("(India)")) {
              this.i++;
              return <li key={city + this.i}>{city}</li>;
            }
          })}
        </ol>
      </>
    );
  }
}

export default App;
