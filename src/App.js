import React, { Component } from 'react';
import './App.css';
import TimerWrapper from "./components/clock";

class App extends Component {
  render() {
    return (
      <div>
        <TimerWrapper/>
      </div>
    );
  }
}

export default App;
