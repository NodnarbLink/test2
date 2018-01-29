import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import INSstats2 from './components/statscomponent2/stats2.jsx';
import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Digital Gaming League Stats</h1>
        </header>

        <INSstats2 />

      </div>
    );
  }
}

export default App;
