import React, { Component } from "react";

import "./App.css";
import DashBoard from "./components/Dashboard";
import Header from "./components/Layout/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DashBoard />
      </div>
    );
  }
}

export default App;
