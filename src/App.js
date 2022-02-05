import React, {useEffect, useState} from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import ProfileCrumb from "./components/ProfileCrumb";
import { RecommendedPolls } from "./components/RecommendedPolls";
import SharedWithMe from "./components/SharedWithMe";
import Footer from "./components/Footer";

const App = () => {
    const [isActive, setActive] = useState("false");
    const [isProfile, setProfile] = useState("false");
    const [isSearch, setSearch] = useState("false");

    const handleMenu = () => {
        setActive(!isActive);
    };

    const handleProfile = () => {
        setProfile(!isProfile);
    };

    const handleSearch = () => {
        setSearch(!isSearch);
    };


    return (
        <div className="left-sidebar">


            <div className="gallery-fix"></div>

            <div id="header-fixed" className={isActive ? "header-style-1 close-header" : "header-style-1 open-header"}>
                <a className="header-1 open-left-sidebar" onClick={handleMenu}><i className="las la-bars"></i></a>
                <h2 className="logo"><a href="index.html">OnePoll</a></h2>
                <a id="open-search" className="header-2"  onClick={handleSearch}><span><i className="las la-search flip"></i></span></a>
                <a id="menu-dropdown" className="header-2"  onClick={handleProfile}><span><i className="las la-user flip"></i></span></a>
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
                            <a className="close-sidebar" onClick={handleMenu}><i className="las la-times"></i></a>
                        </div>

                        <div className="sidebar-menu">
                            <SideBar></SideBar>
                            <a className="menu-item close-sidebar"  onClick={handleMenu}>
                                <i className="las la-times"></i>
                                <em>Close</em>
                            </a>
                        </div>

                    </div>

                    <div className={isSearch ? "search-draw hide" : "search-draw show"}>
                        <div className="search-header">
                            <a className="close-wrap"  onClick={handleSearch}><i className="las la-times"></i></a>
                        </div>
                        <SearchBar></SearchBar>
                    </div>
                    <div id="user-dropdown" className={isProfile ? "icon-dropdown hide" : "icon-dropdown show"}>
                        <div className="header">
                            <a className="close-menu close-wrap"  onClick={handleProfile}>
                                <span>Hi, Audrey</span>
                                <i className="las la-times"></i>
                            </a>
                        </div>
                        <ProfileCrumb></ProfileCrumb>
                    </div>


                    <div id="content"className={isActive ? "snap-content close-menu" : "snap-content open-menu"} data-component="MainContent">
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
export default App
