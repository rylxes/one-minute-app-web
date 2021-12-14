import React from "react";

class SharedWithMe extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>Polls Shared With Me</h4>
        <div className="decoration" />
        <div className="recent-poll-wrap">
          <div className="recent-polls row">
            <div className="item grid col-5">
              <div className="grid-top">
                <div className="image-holder">
                  <img src="uploads/test/nigeria-rename.jpg" />
                </div>
                <div className="contents">
                  <h4>
                    <a href="view-poll.html" title="View Poll">
                      Which state is richer?
                      <span>
                        There are 36 States in Nigeria, which do you think is
                        richer?
                      </span>
                    </a>
                  </h4>
                </div>
              </div>
              <div className="summary">
                <div className="votes">
                  <i className="las la-poll" /> <span>577</span>
                </div>
                <div className="results">
                  <span title="Lagos" className="options">
                    <em>A</em> 75%
                  </span>
                  <span title="Edo" className="options">
                    <em>B</em> 3%
                  </span>
                  <span title="Ogun" className="options">
                    <em>C</em> 14%
                  </span>
                  <span title="Oyo" className="options">
                    <em>D</em> 8%
                  </span>
                </div>
              </div>
              <div className="grid-bottom">
                <div className="user-wrap">
                  <i className="las la-user" /> Audrey
                </div>
                <div className="share-wrap" title="Share">
                  <em className="share show-submenu" />
                  <div className="submenu share-routes">
                    <div className="sharePrompt">
                      <div className="header">
                        <h4>Share Poll With Friends</h4>
                        <small>
                          Enter email address of recipients (Unregistered users
                          will get an invite).
                        </small>
                      </div>
                      <div className="sharebox">
                        <textarea
                          rows={4}
                          name="shareEmails"
                          id="shareEmails"
                          placeholder="Emails separated with commas"
                          defaultValue={""}
                        />
                      </div>
                      <div className="footer">
                        <div className="top-buttons">
                          <a
                            href="javascript:void(0);"
                            className="buttonWrap button-blue"
                          >
                            Share
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="buttonWrap button-red"
                          >
                            Cancel
                          </a>
                        </div>
                        <div className="buttom-link">
                          <a href="javascript:void(0);" className="text-link">
                            Share As Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item grid col-5">
              <div className="grid-top">
                <div className="image-holder">
                  <img src="images/bola_ahmed_tinubu_2023.jpg" />
                </div>
                <div className="contents">
                  <h4>
                    <a href="view-poll.html" title="View Poll">
                      Will Tinubu run in 2023?
                      <span>
                        Senator Bola Ahmed Tinubu is considered to be interested
                        in 2023 Presidential Elections, do yo think he'll
                        contest?
                      </span>
                    </a>
                  </h4>
                </div>
              </div>
              <div className="summary">
                <div className="votes">
                  <i className="las la-poll" /> <span>22,576</span>
                </div>
                <div className="results">
                  <span className="options agree">
                    <i className="report yes"> Yes </i> 81%
                  </span>
                  <span className="options disagree">
                    <i className="report no"> No </i> 19%
                  </span>
                </div>
              </div>
              <div className="grid-bottom">
                <div className="user-wrap">
                  <i className="las la-user" /> Audrey
                </div>
                <div className="share-wrap" title="Share">
                  <em className="share show-submenu" />
                  <div className="submenu share-routes">
                    <div className="sharePrompt">
                      <div className="header">
                        <h4>Share Poll With Friends</h4>
                        <small>
                          Enter email address of recipients (Unregistered users
                          will get an invite).
                        </small>
                      </div>
                      <div className="sharebox">
                        <textarea
                          rows={4}
                          name="shareEmails"
                          id="shareEmails"
                          placeholder="Emails separated with commas"
                          defaultValue={""}
                        />
                      </div>
                      <div className="footer">
                        <div className="top-buttons">
                          <a
                            href="javascript:void(0);"
                            className="buttonWrap button-blue"
                          >
                            Share
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="buttonWrap button-red"
                          >
                            Cancel
                          </a>
                        </div>
                        <div className="buttom-link">
                          <a href="javascript:void(0);" className="text-link">
                            Share As Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item grid col-5">
              <div className="grid-top">
                <div className="image-holder">
                  <img src="images/cameroon-vs-nigeria.jpg" />
                </div>
                <div className="contents">
                  <h4>
                    <a href="view-poll.html" title="View Poll">
                      Super Eagles vs Cameroun?
                      <span>
                        Super Eagles of Nigeria played a two-legged friendly
                        against Cameroun, what do you make of their performance?{" "}
                      </span>
                    </a>
                  </h4>
                </div>
              </div>
              <div className="summary">
                <div className="votes">
                  <i className="las la-poll" /> <span>1,281</span>
                </div>
                <div className="results">
                  <span title="Below Average" className="options">
                    <em>A</em> 15%
                  </span>
                  <span title="Average" className="options">
                    <em>B</em> 33%
                  </span>
                  <span title="Good" className="options">
                    <em>C</em> 45%
                  </span>
                  <span title="Excellent" className="options">
                    <em>D</em> 7%
                  </span>
                </div>
              </div>
              <div className="grid-bottom">
                <div className="user-wrap">
                  <i className="las la-user" /> Audrey
                </div>
                <div className="share-wrap" title="Share">
                  <em className="share show-submenu" />
                  <div className="submenu share-routes">
                    <div className="sharePrompt">
                      <div className="header">
                        <h4>Share Poll With Friends</h4>
                        <small>
                          Enter email address of recipients (Unregistered users
                          will get an invite).
                        </small>
                      </div>
                      <div className="sharebox">
                        <textarea
                          rows={4}
                          name="shareEmails"
                          id="shareEmails"
                          placeholder="Emails separated with commas"
                          defaultValue={""}
                        />
                      </div>
                      <div className="footer">
                        <div className="top-buttons">
                          <a
                            href="javascript:void(0);"
                            className="buttonWrap button-blue"
                          >
                            Share
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="buttonWrap button-red"
                          >
                            Cancel
                          </a>
                        </div>
                        <div className="buttom-link">
                          <a href="javascript:void(0);" className="text-link">
                            Share As Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SharedWithMe;
