import React from "react";
import InstaFace from "./instaface"

class Admin extends React.Component {
  render() {
    return <InstaFace isAuthenticated={true} />;
  }
}

export default Admin;

