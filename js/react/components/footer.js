import React from "react";

class Location extends React.Component {
  render() {
    return (
      <span>
        <div className="bottom_icon">
          <img src="images/icon_location.png" alt="" title="" />
        </div>
        <h2>WEDDING LOCATION</h2>
        <span className="subtitle">VILLA DE AMORE, TEMECULA, CALIFORNIA</span>
          <p>
            Upon arriving at Villa de Amore,
            we both knew that this would be the venue where we would get married.
            The private estate (yes, that's right!) has a gorgeous 360 degree view, the ballroom is spacious
            (bring your dancing shoes!), and most importantly,
            they had just remodeled the bar!
          </p>
        </span>
    );
  }
}

React.render(<Location />, document.getElementById("react_location"));

class Registry extends React.Component {
  render() {
    return (
      <span>
        <div className="bottom_icon"><img src="images/icon_gifts.png" alt="" title="" /></div>
          <h2>GIFT REGISTRY</h2>
          <span className="subtitle">GIVEN FREELY AND OUT OF PURE LOVE</span>
          <p>Your presence at our wedding is present enough. But if we are honored with a gift from you, a
             monetary gift will be
             very much appreciated. </p>
        </span>
    );
  }
}
React.render(<Registry />, document.getElementById("react_registry"));


