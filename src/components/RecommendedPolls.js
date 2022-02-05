import React, {useEffect, useState, useRef} from 'react'
import {request} from "../services/utilities";
import {API_URI} from "../services/constants";
import { geolocated } from "react-geolocated";

const getDirection = (degrees, isLongitude) =>
    degrees > 0 ? (isLongitude ? "E" : "N") : isLongitude ? "W" : "S";

// adapted from http://stackoverflow.com/a/5786281/2546338
const formatDegrees = (degrees, isLongitude) =>
    `${0 | degrees}° ${
        0 | (((degrees < 0 ? (degrees = -degrees) : degrees) % 1) * 60)
    }' ${0 | (((degrees * 60) % 1) * 60)}" ${getDirection(
        degrees,
        isLongitude,
    )}`;

const RecommendedPollsCore = (props) => {


  useEffect(() => {
    __List();
  }, []);


  const __List = async () => {
    try {
      console.log(formatDegrees(props.coords.latitude, false))
      console.log({available: !props.isGeolocationAvailable, enabled: !props.isGeolocationEnabled, cords : props.coords})
      const rs = await request(`${API_URI}/polls/listAll`, 'POST', true, {});
      console.log(rs)

      //setItems([]);
    } catch (e) {
      console.log(e)

    }
  }

  return (

      <>
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

      </>

  )
}

RecommendedPollsCore.propTypes = { ...RecommendedPollsCore.propTypes };

export const RecommendedPolls = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(RecommendedPollsCore);

