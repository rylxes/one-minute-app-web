import React, {useEffect, useState} from 'react'
import SideBar from "../../components/SideBar";
import SearchBar from "../../components/SearchBar";
import ProfileCrumb from "../../components/ProfileCrumb";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import SSRStorage from '../../services/storage';
import {isNil} from 'lodash-es';
import {v4 as uuidv4} from 'uuid';

const storage = new SSRStorage();
const Centered = ({children}) => {

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
    useEffect(() => {
        setHash()
    }, [])

    const setHash = async () => {
        let values = await storage.getLocalStorage('UUID')
        let deviceID = await storage.getLocalStorage('DEVICE_ID')
        if (isNil(values)) {
            storage.setLocalStorage('UUID', uuidv4())
        }
        if (isNil(deviceID)) {
            storage.setLocalStorage('DEVICE_ID', uuidv4())
        }
    }

    return (
        <div className="left-sidebar">


            <div className="gallery-fix"></div>

            <div id="header-fixed" className={isActive ? "header-style-1 close-header" : "header-style-1 open-header"}>
                <a className="header-1 open-left-sidebar" onClick={handleMenu}><i className="las la-bars"></i></a>
                <h2 className="logo"><a href="index.html">OnePoll</a></h2>
                <a id="open-search" className="header-2" onClick={handleSearch}><span><i
                    className="las la-search flip"></i></span></a>
                <a id="menu-dropdown" className="header-2" onClick={handleProfile}><span><i
                    className="las la-user flip"></i></span></a>
            </div>

            <div className="add-new">
                <Link className="btn-new add-new-poll" to="/add-new">
                    <span className="plus"><i className="las la-plus"></i></span>
                    <span className="high"><i className="las la-poll"></i></span>
                </Link>
            </div>

            <div className="all-elements">
                <div className="snap-drawers">
                    <div className="snap-drawer snap-drawer-left">
                        <div className="sidebar-header-left">
                            <h2><a href="index.html">OnePoll</a></h2>
                            <a className="close-sidebar" onClick={handleMenu}><i className="las la-times"></i></a>
                        </div>

                        <div className="sidebar-menu">
                            <SideBar/>
                            <a className="menu-item close-sidebar" onClick={handleMenu}>
                                <i className="las la-times"></i>
                                <em>Close</em>
                            </a>
                        </div>

                    </div>

                    <div className={isSearch ? "search-draw hide" : "search-draw show"}>
                        <div className="search-header">
                            <a className="close-wrap" onClick={handleSearch}><i className="las la-times"></i></a>
                        </div>
                        <SearchBar/>
                    </div>
                    <div id="user-dropdown" className={isProfile ? "icon-dropdown hide" : "icon-dropdown show"}>
                        <div className="header">
                            <a className="close-menu close-wrap" onClick={handleProfile}>
                                <span>Hi, Audrey</span>
                                <i className="las la-times"></i>
                            </a>
                        </div>
                        <ProfileCrumb/>
                    </div>


                    <div id="content" className={isActive ? "snap-content close-menu" : "snap-content open-menu"}
                         data-component="MainContent">
                        {children}
                    </div>


                    <Footer> </Footer>

                </div>

            </div>

        </div>
    );
}

export default Centered
