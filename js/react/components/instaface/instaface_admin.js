import React from "react";
import Firebase from "firebase";

export default class Instaface extends React.Component {
  state = {
    images: []
  }

  static propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://popping-fire-6215.firebaseio.com/images");
    this.firebaseRef
      .orderByKey()
      .on("child_added", this.childAdded);

    this.firebaseRef.on("child_changed", this.childChanged);
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  childAdded = dataSnapshot => {
    const val = dataSnapshot.val();
    const key = dataSnapshot.key();
    const images = [
      {
        ...val,
        key: key
      },
      ...this.state.images
    ];

    this.setState({images});
  }

  childChanged = (child) => {
    const {timestamp, isVisible} = child.val();
    const images = this.state.images.map(image => {
      if (image.timestamp === timestamp) {
        image.isVisible = isVisible;
      }

      return image;
    });

    this.setState({images});
  }

  onClick = (key, isVisible) => (e) => {
    e.preventDefault();
    const path = this.firebaseRef.child(key);
    path.update({isVisible: !isVisible});
  }

  renderImages = (image, i) => {
    const className = (i + 1) % 4 === 0 ? "left14_last" : "left14";
    const {timestamp, isVisible, key, raw, disabled} = image;
    let {thumb} = image;

    if (isVisible === false && disabled)
      thumb = disabled;

    return (
      <div className={`${className} ${key}`} key={key}>
        <a href={raw} key={timestamp}>
          <img src={thumb} />
        </a>

        <div style={{backgroundColor: "#b5af47", cursor:"pointer"}} onClick={this.onClick(key, isVisible)}>
          <p style={{color:"white", textAlign:"center"}}>
            {isVisible === false ? "SHOW" : "HIDE"}
          </p>
        </div>

      </div>
    );
  }

  render() {
    let {images} = this.state;
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

