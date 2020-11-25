import React from 'react';
import './App.css';
import logo from './assets/img/BridgeLabzNewLogo.svg'

class App extends React.Component {
  url = 'http://bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }
  // onClick function
  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    this.setState({ userName: event.target.value })
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    } else {
      this.setState({ nameError: 'Name is Incorrect' })
    }
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
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}

export default App;
