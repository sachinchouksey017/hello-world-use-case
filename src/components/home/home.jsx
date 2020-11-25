import React from 'react';
import logo from '../../assets/img/BridgeLabzNewLogo.svg'
import './home.css'
class Home extends React.Component {
    url = 'https://www.bridgelabz.com/'
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
        console.log("value is ", event.target.value);
        const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        // set the title using setState method
        this.setState({ userName: event.target.value })
        if (nameRegex.test(event.target.value)) {
            this.setState({ nameError: '' })
        } else {
            this.setState({ nameError: 'Name is Incorrect' })
        }
    }

    render() {
        return (
            <div className="app-main">
                <div className="main">
                    <div>
                        <h1>Hello {this.state.userName} from Bridgelabz</h1>
                        <img src={logo} onClick={this.onClick}
                            alt="The Bridgelabz logo: a Bridge to Employment through lab works" />
                    </div>
                    <div className="text-box">
                        <input onChange={this.onNameChange} />
                        <span className="error-output">{this.state.nameError}</span>
                    </div>
                    <div>
                        At Bridgelabz we're a community of
            <ul>
                            <li>technologists</li>
                            <li>thinkers</li>
                            <li>builders</li>
                        </ul>
            Working together to keep the Tech Employebility of Engineers alive.......
            <br />
                        <br />
            To know about us,visit <a href="http://bridgelabz.com/" target="_blank">Bridgelabz</a> to learn even more about our mission <br />
            i.e <b>Employebility to All</b>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;