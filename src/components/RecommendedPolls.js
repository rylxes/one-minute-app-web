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
                <a >Which state is richer?</a>
              </h4>
              <span className="votes">
                <a >576 / public</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a >Will Tinubu run in 2023?</a>
              </h4>
              <span className="votes">
                <a >22,576 / politics</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a >
                  Bitcoin, will it be legalized in Nigeria?
                </a>
              </h4>
              <span className="votes">
                <a >91,198 / economy</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a >Who wins 20/21 Champions League?</a>
              </h4>
              <span className="votes">
                <a >11,223 / sports</a>
              </span>
            </div>
            <div className="item">
              <h4>
                <a >
                  Would you generate your own electricity?
                </a>
              </h4>
              <span className="votes">
                <a >6,346 / public</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedPolls;
