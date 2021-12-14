import React, {useEffect} from "react";
import RecommendedPolls from "./RecommendedPolls";
import SharedWithMe from "./SharedWithMe";



const MainContent = ({welcome = "Welcome, Audrey"}) => {
  useEffect(() => {
    console.log('ddeed')
  })
  return (
      <div className="snap-content">

        <div className="content">
          <div className="header-clear" />
          <div className="container">
            <h4>{welcome} </h4>
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
export default MainContent
