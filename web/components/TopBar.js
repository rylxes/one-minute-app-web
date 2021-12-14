import React from "react";

class TopBar extends React.Component {
  render() {
    return (
      <div id="user-dropdown" className="icon-dropdown">
        <div className="header">
          <a className="close-menu close-wrap" href="#">
            <span>Hi, Audrey</span>
            <i className="las la-times" />
          </a>
        </div>
        <ul className="dropdown-menu">
          <li className="menu-item">
            <a href="my-profile.html">My Profile</a>
          </li>
          <li className="menu-item">
            <a href="settings.html">Settings</a>
          </li>
          <li className="menu-item">
            <a href="javascript:void(0);">Sign Out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopBar;
