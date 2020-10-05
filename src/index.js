import React, { Component } from "react";
import ReactDOM from "react-dom";

class SignIn extends Component {
  state = {
    user: "",
    rememberMe: false,
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User:{" "}
          <input
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

ReactDOM.render(<SignIn />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
