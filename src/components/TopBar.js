import React from "react";

class TopBar extends React.Component {
  render() {
    return (
      <div id="user-dropdown" className="icon-dropdown">
        <div className="header">
          <a className="close-menu close-wrap" >
            <span>Hi, Audrey</span>
            <i className="las la-times" />
          </a>
        </div>
        <ul className="dropdown-menu">
          <li className="menu-item">
            <a>My Profile</a>
          </li>
          <li className="menu-item">
            <a>Settings</a>
          </li>
          <li className="menu-item">
            <a >Sign Out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopBar;
