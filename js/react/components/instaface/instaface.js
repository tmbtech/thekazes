import React from "react";
import Firebase from "firebase";

export default class Instaface extends React.Component {
  state = {
    images: []
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
    const changedImage = child.val();
    const {images}  = this.state;

    if (changedImage.isVisible) {
      return this.setState({
        images: [
          changedImage,
          ...images
        ]
      })
    }

    const filteredSet = images.filter(image => {
      return image.timestamp !== child.val().timestamp
    });

    this.setState({images: filteredSet});
  }

  renderImages = (image, i) => {
    const className = (i + 1) % 4 === 0 ? "left14_last" : "left14";
    const {timestamp, key, raw, thumb} = image;

    return (
      <div className={`${className} ${key}`} key={key}>
        <a href={raw} key={timestamp}>
          <img src={thumb} />
        </a>
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
        {images.filter(image => image.isVisible !== false).map(this.renderImages)}
      </div>
    );
  }
}

