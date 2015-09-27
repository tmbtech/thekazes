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
      <div className="page_content">
        <div className="full_width_centered">
          <div className="form_content">
            <form>
              <h3 className="form_subtitle">Admin login</h3>

              <div className="form_row_full">
                <label>Username</label>
                <input type="text" className="form_input required" ref="username" />
              </div>
              <div className="form_row_full">
                <label>Password</label>
                <input type="password" className="form_input required" ref="password" />
              </div>
              <div className="form_row_full">
                <input type="submit" className="form_submit_contact" value="Enter" onClick={this.onClick}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
