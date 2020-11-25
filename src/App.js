import React from 'react';
import './App.css';
import logo from './assets/img/BridgeLabzNewLogo.svg'

class App extends React.Component {
  url='http://bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      title: 'hello from Bridgelabz'
    }
  }
  // onClick function
  onClick=($event)=>{
    console.log("save button is clicked!", $event);
    window.open(this.url,"_blank");
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
        alt="The Bridgelabz logo: a Bridge to Employment through lab works"
/>
      </div>
    );
  }
}

export default App;
