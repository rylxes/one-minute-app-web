import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="static-footer">
        <div className="footer-wrap">
          <div className="footer-menu">
            <ul className="h-menu">
              <li className="menu-item current-item">
                <a>
                  <i className="las la-home" />
                  <span>Home</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <i className="las la-poll" />
                  <span>Polls</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <i className="las la-user" />
                  <span>Profile</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <i className="las la-cog" />
                  <span>Help</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
