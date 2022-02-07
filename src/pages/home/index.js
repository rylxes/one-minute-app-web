import React, {useEffect, useState} from 'react'
import RecommendedPolls from "../../components/RecommendedPolls";
import SharedWithMe from "../../components/SharedWithMe";
import SSRStorage from "../../services/storage";
// import './App.css';


const storage = new SSRStorage();
const Index = ({children}) => {
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        let userDetails = storage.getLocalStorage('USER_DETAILS') || {};
        setUserDetails(userDetails)
    }, []);

    return (
        <div className="content">
            <div className="header-clear"></div>

            <div className="container">
                <h4>Welcome, {userDetails?.name || 'Guest'}</h4>
            </div>

            <div className="decoration"></div>

            <RecommendedPolls> </RecommendedPolls>
            <SharedWithMe> </SharedWithMe>


            <div className="bottom-fix"></div>

        </div>
    );
}

export default Index
