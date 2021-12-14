import React from "react";
import RecommendedPolls from "./RecommendedPolls";
import SharedWithMe from "./SharedWithMe";

class MainContent extends React.Component {
  render() {
    return (
      <div id="content" className="snap-content">
        <div className="content">
          <div className="header-clear" />
          {}
          <div className="container">
            <h4>Welcome, Audrey</h4>
          </div>
          <div className="decoration" />
          <RecommendedPolls></RecommendedPolls>
          <SharedWithMe></SharedWithMe>
          <div className="bottom-fix" />
          {}
        </div>
      </div>
    );
  }
}

export default MainContent;
