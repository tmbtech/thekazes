import React from "react";
import Firebase from "firebase";
import Instaface from "../components/instaface/instaface";

class PhotoGallery extends React.Component {
  render() {
    return <Instaface />;
  }
}

React.render(<PhotoGallery />, document.getElementById("react_instaface"));