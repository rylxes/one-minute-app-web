import React, {useEffect, useState} from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import ProfileCrumb from "./components/ProfileCrumb";
import RecommendedPolls from "./components/RecommendedPolls";
import SharedWithMe from "./components/SharedWithMe";
import Footer from "./components/Footer";

function App2() {
    const [searchClick, setSearchClick] = useState(false);
    const [profileClick, setProfileClick] = useState(false);
    const [sideBarClick, setSideBarClick] = useState(false);

    return (
        <div className="left-sidebar">


            <div className="gallery-fix"></div>

            <div id="header-fixed" className="header-style-1">
                <a className="header-1 open-left-sidebar" onClick={() => setSideBarClick(!sideBarClick)}><i className="las la-bars"></i></a>
                <h2 className="logo"><a href="index.html">OnePoll</a></h2>
                <a id="open-search" className="header-2" onClick={() => setSearchClick(true)}><span><i
                    className="las la-search flip"></i></span></a>
                <a id="menu-dropdown" className="header-2" onClick={() => setProfileClick(true)}><span><i
                    className="las la-user flip"></i></span></a>
            </div>

            <div className="add-new">
                <a className="btn-new add-new-poll" href="add-new.html">
                    <span className="plus"><i className="las la-plus"></i></span>
                    <span className="high"><i className="las la-poll"></i></span>
                </a>
            </div>

            <div className="all-elements">
                <div className="snap-drawers">
                    <div className="snap-drawer snap-drawer-left">
                        <div className="sidebar-header-left">
                            <h2><a href="index.html">OnePoll</a></h2>
                            <a className="close-sidebar"><i className="las la-times"></i></a>
                        </div>

                        <SideBar click={sideBarClick}/>

                    </div>


                    <SearchBar click={searchClick}/>

                    <ProfileCrumb click={profileClick}/>


                    <div id="content" className="snap-content" data-component="MainContent">
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
                    </div>

                    <Footer> </Footer>

                </div>

            </div>

        </div>
    );
}

export default App2;
