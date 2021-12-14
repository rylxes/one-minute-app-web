import React from "react";

class AddNew extends React.Component {
  render() {
    return (
      <div className="add-new">
        <a className="btn-new add-new-poll" href="add-new.html">
          <span className="plus">
            <i className="las la-plus" />
          </span>
          <span className="high">
            <i className="las la-poll" />
          </span>
        </a>
      </div>
    );
  }
}

export default AddNew;
