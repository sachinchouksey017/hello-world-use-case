import React from 'react';
import './App.css';
import Home from './components/home/home';

class App extends React.Component {

  render() {
    return (
      <div className="app-main">
        <Home />
      </div>
    );
  }
}

export default App;
