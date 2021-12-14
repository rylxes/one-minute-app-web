import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="snap-drawer snap-drawer-left">
        <div className="sidebar-header-left">
          <h2>
            <a href="index.html">OnePoll</a>
          </h2>
          <a className="close-sidebar" href="#">
            <i className="las la-times" />
          </a>
        </div>
        <div className="sidebar-menu">
          <a className="menu-item" href="index.html">
            <i className="las la-home" />
            <em>Home</em>
          </a>
          <a className="menu-item" href="add-new.html">
            <i className="las la-plus-circle" />
            <em>Add New Poll</em>
          </a>
          <a className="menu-item" href="my-polls.html">
            <i className="las la-poll" />
            <em>My Polls</em>
          </a>
          <a className="menu-item" href="my-profile.html">
            <i className="las la-user" />
            <em>My Profile</em>
          </a>
          <a className="menu-item" href="settings.html">
            <i className="las la-cog" />
            <em>Settings</em>
          </a>
          <a className="menu-item close-sidebar" href="javascript:void(0)">
            <i className="las la-times" />
            <em>Close</em>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
