import React from "react";
import Firebase from "firebase";

class Admin extends React.Component {
  state = {
    isAuthorized: false
  }

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
    }, error => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        this.setState({isAuthorized: true});
      }
    }, {
      remember: "sessionOnly"
    });
  }

  render() {
    const {isAuthorized} = this.state;
    if (!isAuthorized) {
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

    return (
      <div>check it</div>
    );
  }
}

React.render(<Admin />, document.getElementById("react_admin"));