import React, {useEffect, useState} from 'react'


const SideBar = () => {
    
    return (
        <>
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
        </>
    )
}
export default SideBar

