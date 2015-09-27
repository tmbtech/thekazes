import React from "react";
import Firebase from "firebase";

export default class Login extends React.Component {
  componentWillMount() {
    this.firebaseRef = new Firebase("https://popping-fire-6215.firebaseio.com");

  }
  componentWillUnmount() {
    this.firebaseRef.off();
  }
  onClick = (e) => {
    e.preventDefault();
    const username = React.findDOMNode(this.refs.username).value;
    const password = React.findDOMNode(this.refs.password).value;

    this.firebaseRef.authWithPassword({
      email: username,
      password: password
    }, (error, user) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Logged in");
        const {action} = this.props;
        action(user);
      }
    }, {
      remember: "sessionOnly"
    });
  }

  render() {
      return (
        <form>
          <p>
            Username: &nbsp;
            <input type="text" ref="username" />
          </p>

          <p>
            Password:&nbsp;
            <input type="password" ref="password" />
          </p>

          <p>
            <button onClick={this.onClick}>click</button>
          </p>
        </form>
      );
  }
}
