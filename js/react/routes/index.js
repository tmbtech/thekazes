import React from "react";

class Accommodations extends React.Component {
  render() {
    return (
      <span>
        <div className="bottom_icon"><img src="images/icon_vacation.png" alt="" title="" /></div>
          <h2>ACCOMMODATIONS</h2>
          <span className="subtitle">PECHANGA RESORT, CALIFORNIA</span>

          <p> For your convenience, a block of rooms have been reserved at Pechanga Resort & Casino.
              For our special rate, please call <strong>Hotel Reservations</strong> at 888-732-4264 and provide
              the following information:
            <br /><strong>Group Name:</strong> LAM DELA WEDDING <br /><strong>Booking Code:</strong> SLA1215
          </p>
        </span>
    );
  }
}
React.render(<Accommodations />, document.getElementById("react_accommodations"));