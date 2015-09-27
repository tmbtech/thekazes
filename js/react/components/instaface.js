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
    const images = this.state.images.filter(image => {
      return image.timestamp !== child.val().timestamp
    });

    this.setState({images});
  }

  onDelete = key => (e) => {
    e.preventDefault();
    const path = this.firebaseRef.child(key);
    path.update({isVisible: false});
  }

  renderImages = (image, i) => {
    const className = (i+1) % 4 === 0 ? "left14_last" : "left14";
    const showDelete = this.props.isAuthenticated;

    return (
      <div className={`${className} ${image.key}`} key={image.key}>
        <a href={image.raw} key={image.timestamp}>
          <img src={image.thumb} />
        </a>

        {showDelete ? (
          <div>
            <button onClick={this.onDelete(image.key)}>delete</button>
          </div>
        ) : null}

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
        {images.filter(image => image.isVisible !== false ).map(this.renderImages)}
      </div>
    );
  }
}

