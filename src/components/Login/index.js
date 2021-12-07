import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = { username: "", password: "" };

  formSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.replace("/");
  };

  loginProcess = async () => {
    const { username, password } = this.state;
    const loginDetails = {
      username: username,
      password: password,
    };
    console.log(loginDetails);
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginDetails),
    };
    const loginFetch = await fetch(
      "https://avinashtarini-api.herokuapp.com/login/",
      options
    );
    console.log(loginFetch);
    const jsonLogin = await loginFetch.json();
    console.log(jsonLogin);
  };

  formSubmitLogin = (event) => {
    event.preventDefault();
    console.log("login started");
    this.loginProcess();
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  updateUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.formSubmitLogin}>
        <label htmlFor="emailInput" className="label">
          Username
        </label>
        <input
          type="text"
          id="emailInput"
          placeholder="Enter Your Username"
          className="input-box"
          onChange={this.updateUsername}
        />
        <label htmlFor="passwordInput" className="label">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          id="passwordInput"
          onChange={this.updatePassword}
          className="input-box1"
        />
        <button type="submit" className="button-login">
          Log In
        </button>
        <p>
          {" "}
          <Link to="/signup">
            {" "}
            <span>Click Here</span>{" "}
          </Link>
          to Signup
        </p>
      </form>
    );
  }
}
export default Login;
