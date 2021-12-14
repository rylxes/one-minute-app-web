import React from "react";

class RecommendedPolls extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>Recommended Polls</h4>
        <div className="recent-poll-wrap">
          <div className="recent-polls home-polls">
            <div className="item">
              <h4>
                <a href="vote-now.html">Which state is richer?</a>
              </h4>
              <span className="votes">
                <a href="vote-now.html">576 / public</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a href="vote-now.html">Will Tinubu run in 2023?</a>
              </h4>
              <span className="votes">
                <a href="vote-now.html">22,576 / politics</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a href="vote-now.html">
                  Bitcoin, will it be legalized in Nigeria?
                </a>
              </h4>
              <span className="votes">
                <a href="vote-now.html">91,198 / economy</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a href="vote-now.html">Who wins 20/21 Champions League?</a>
              </h4>
              <span className="votes">
                <a href="vote-now.html">11,223 / sports</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a href="vote-now.html">
                  Would you generate your own electricity?
                </a>
              </h4>
              <span className="votes">
                <a href="vote-now.html">6,346 / public</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedPolls;
