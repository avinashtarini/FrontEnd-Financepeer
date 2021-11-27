import { Component } from "react";
import "./index.css";

class Signup extends Component {
  state = { username: "", password: "", name: "", gender: "" };

  navigateToLogin = () => {
    const { history } = this.props;
    history.replace("/login");
  };

  submitForm = async () => {
    const { username, password, name, gender } = this.state;
    console.log(username);
    const userDetails = {
      username: username,
      password: password,
      name: name,
      gender: gender,
    };
    console.log(userDetails);
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userDetails),
    };
    const fetchData = await fetch(
      " https://avinasht-backend.herokuapp.com/signup/",
      options
    );
    console.log(fetchData);
  };

  submitSignup = (event) => {
    event.preventDefault();
    this.submitForm();
  };

  submitUsername = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  submitPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  submitGender = (event) => {
    console.log(event.target.value);
    this.setState({
      gender: event.target.value,
    });
  };

  submitName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <form className="form-class" onSubmit={this.submitSignup}>
        <label htmlFor="userInput" className="label-signup">
          Username
        </label>
        <input
          type="text"
          id="userInput"
          placeholder="Enter Your Username"
          className="input-box"
          onChange={this.submitUsername}
        />
        <br />
        <label htmlFor="userPassword" className="label-signup">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          id="userPassword"
          onChange={this.submitPassword}
          className="input-box1"
        />
        <br />
        <label htmlFor="name" className="label-signup">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="name"
          onChange={this.submitName}
          className="input-box1"
        />
        <br />
        <div onChange={this.submitGender} className="radio-style">
          <input type="radio" name="gender" value="Male" id="choice-yes" />
          <label htmlFor="choice-yes">Male</label>
          <br />
          <input type="radio" name="gender" value="Female" id="choice-no" />
          <label htmlFor="choice-no">Female</label>
        </div>
        <div className="buttons-container">
          <button type="submit" className="button-signup">
            Sign Up
          </button>
          <button
            type="button"
            onClick={this.navigateToLogin}
            className="button-signup"
          >
            Login Again
          </button>
        </div>
      </form>
    );
  }
}

export default Signup;
