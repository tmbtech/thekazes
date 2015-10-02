import React from "react";
import Firebase from "firebase";
import Instaface from "../components/instaface/instaface_admin.js";
import Login from "../components/login"

class AdminRoute extends React.Component {
  state = {
    isAuthorized: false
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://popping-fire-6215.firebaseio.com");

  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  onLoggedIn = (user) => {
    this.setState({
      user,
      isAuthenticated: true
    });
  }

  render() {
    const {isAuthenticated} = this.state;

    const Component = isAuthenticated ? <Instaface {...this.state} /> : <Login action={this.onLoggedIn} />;

    return (
      <span>
        {Component}
      </span>
    );
  }
}

React.render(<AdminRoute />, document.getElementById("react_admin"));