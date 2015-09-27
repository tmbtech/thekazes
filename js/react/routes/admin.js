import React from "react";
import Firebase from "firebase";
import Admin from "../components/admin";
import Login from "../components/login"

class AdminRoute extends React.Component {
  state = {
    isAuthorized: true
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://popping-fire-6215.firebaseio.com");

  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  onLoggedIn = (user) => {
    this.setState({isAuthorized: true});
    console.log(user);
  }

  render() {
    const {isAuthorized} = this.state;

    const Component = isAuthorized ? <Admin /> : <Login action={this.onLoggedIn} />;

    return (
      <span>
        {Component}
      </span>
    );
  }
}

React.render(<AdminRoute />, document.getElementById("react_admin"));