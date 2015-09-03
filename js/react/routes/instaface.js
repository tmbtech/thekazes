import React from "react";
import Firebase from "firebase";

class Instaface extends React.Component {
  state = {
    images: []
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://popping-fire-6215.firebaseio.com/images");
    this.firebaseRef
      .orderByKey()
      .limitToLast(25)
      .on("child_added", this.childAdded);
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  childAdded = dataSnapshot => {
    const images = [
      dataSnapshot.val(),
      ...this.state.images
    ];

    this.setState({images});
  }

  renderImages = (image, i) => {
    const className = (i+1) % 4 === 0 ? "left14_last" : "left14";
    return (
      <div className={className}>
        <a href={image.raw} key={image.timestamp}>
          <img src={image.thumb} />
        </a>
      </div>
    );
  }

  render() {
    const {images} = this.state;
    if (!images.length) {
      return null;
    }

    return (
      <div>
        {images.map(this.renderImages)}
      </div>
    );
  }
}

React.render(<Instaface />, document.getElementById("react_instaface"));