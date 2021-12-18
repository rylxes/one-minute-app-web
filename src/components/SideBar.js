import React, {useEffect, useState} from 'react'


const SideBar = ({click = false}) => {
    const [sideBarClick, setSideBarClick] = useState(false);
    useEffect(() => {
        setSideBarClick(click)
    }, [click])
    return (
        <div>
            {sideBarClick &&
            <div className="sidebar-menu">

                <a className="menu-item" href="index.html">
                    <i className="las la-home"></i>
                    <em>Home</em>
                </a>
                <a className="menu-item" href="add-new.html">
                    <i className="las la-plus-circle"></i>
                    <em>Add New Poll</em>
                </a>
                <a className="menu-item" href="my-polls.html">
                    <i className="las la-poll"></i>
                    <em>My Polls</em>
                </a>

                <a className="menu-item" href="my-profile.html">
                    <i className="las la-user"></i>
                    <em>My Profile</em>
                </a>
                <a className="menu-item" href="settings.html">
                    <i className="las la-cog"></i>
                    <em>Settings</em>
                </a>
                <a className="menu-item close-sidebar" href="javascript:void(0)">
                    <i className="las la-times"></i>
                    <em>Close</em>
                </a>
            </div>
            }
        </div>
    )
}
export default SideBar

