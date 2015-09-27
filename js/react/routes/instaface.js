import React from "react";
import Firebase from "firebase";
import InstaFace from "../components/instaface";

class PhotoGallery extends React.Component {
  render() {
    return <InstaFace isAuthenticated={false} />;
  }
}

React.render(<PhotoGallery />, document.getElementById("react_instaface"));