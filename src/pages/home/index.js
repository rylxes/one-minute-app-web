import React, {useState} from 'react'
import RecommendedPolls from "../../components/RecommendedPolls";
import SharedWithMe from "../../components/SharedWithMe";
// import './App.css';

const Index = ({children}) => {


    return (
        <div className="content">
            <div className="header-clear"></div>

            <div className="container">
                <h4>Welcome, Audrey</h4>
            </div>

            <div className="decoration"></div>

            <RecommendedPolls> </RecommendedPolls>
            <SharedWithMe> </SharedWithMe>


            <div className="bottom-fix"></div>

        </div>
    );
}

export default Index
