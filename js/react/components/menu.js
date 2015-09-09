import React from "react";
import classNames from "classnames";

/**
 * Top menu
 */
class Menu extends React.Component {
  render() {
    const pageName = window.pageName;
    return (
      <ul id="main_menu">
        <li><a className={classNames({selected:pageName==="index"})} href="index.html">HOME</a></li>
        <li><a className={classNames({selected:pageName==="shareit"})} href="photos.html">SHARE WITH US</a></li>
        <li><a className={classNames({selected:pageName==="contact"})} href="contact.html">GET IN TOUCH</a></li>
      </ul>
    );
  }
}
React.render(<Menu />, document.getElementById("react_menu"));

// Todo add selected
// <li><a className="selected" href="index.html">HOME</a></li>

/**
 * footer menu
 */
class Footer extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    window.jQuery('html, body').animate({scrollTop: 0}, 'slow');
  }

  render() {
    const pageName = window.pageName;
    return (
      <div className="footer">
        <div className="full_width_centered">
          <div className="footer_sign">
            <span className="swirl_left_transparent">
              <span className="swirl_right_transparent">
                <img src="images/birds_icon.png" alt="" title="" />
              </span>
            </span>
          </div>
          <div className="footer_names">VERONICA &amp; ROBBIE</div>
          <nav className="footer_menu">
            <ul>
              <li><a className={classNames({selected:pageName==="index"})} href="index.html">HOME</a></li>
              <li><a className={classNames({selected:pageName==="contact"})} href="contact.html">GET IN TOUCH</a></li>
              <li><a onClick={this.onClick} className="gotop" title="Go on top">TOP</a></li>
            </ul>
          </nav>
          <div className="footer_copyright">Made with love by <a href="http://thekazes.com">THEKAZES.COM</a></div>
        </div>
      </div>
    );
  }
}
React.render(<Footer />, document.getElementById("react_footer"));
