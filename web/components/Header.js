import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div id="header-fixed" className="header-style-1">
        <a className="header-1 open-left-sidebar" href="#">
          <i className="las la-bars" />
        </a>
        <h2 className="logo">
          <a href="index.html">OnePoll</a>
        </h2>
        <a id="open-search" className="header-2" href="#">
          <span>
            <i className="las la-search flip" />
          </span>
        </a>
        <a id="menu-dropdown" className="header-2" href="#">
          <span>
            <i className="las la-user flip" />
          </span>
        </a>
      </div>
    );
  }
}

export default Header;
