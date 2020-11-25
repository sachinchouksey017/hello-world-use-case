import React from 'react';
import './App.css';
import logo from './assets/img/BridgeLabzNewLogo.svg'

class App extends React.Component {
  url = 'http://bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }
  // onClick function
  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    this.setState({ userName: event.target.value })
  }
  render() {
    return (
      <div>
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
            alt="The Bridgelabz logo: a Bridge to Employment through lab works"
          />
        </div>
        <div className="text-box">
          <input onChange={this.onNameChange} />
        </div>
      </div>
    );
  }
}

export default App;
