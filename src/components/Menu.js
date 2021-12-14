import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="snap-drawer snap-drawer-left">
        <div className="sidebar-header-left">
          <h2>
            <a>OnePoll</a>
          </h2>
          <a className="close-sidebar">
            <i className="las la-times" />
          </a>
        </div>
        <div className="sidebar-menu">
          <a className="menu-item">
            <i className="las la-home" />
            <em>Home</em>
          </a>
          <a className="menu-item">
            <i className="las la-plus-circle" />
            <em>Add New Poll</em>
          </a>
          <a className="menu-item">
            <i className="las la-poll" />
            <em>My Polls</em>
          </a>
          <a className="menu-item">
            <i className="las la-user" />
            <em>My Profile</em>
          </a>
          <a className="menu-item">
            <i className="las la-cog" />
            <em>Settings</em>
          </a>
          <a className="menu-item close-sidebar">
            <i className="las la-times" />
            <em>Close</em>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
