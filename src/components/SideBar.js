import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";


const SideBar = () => {

    return (
        <>
            <Link className="menu-item" to="/">
                <i className="las la-home"></i>
                <em>Home</em>
            </Link>
            <Link className="menu-item" to="/add-new">
                <i className="las la-plus-circle"></i>
                <em>Add New Poll</em>
            </Link>

            <Link className="menu-item" to="/my-polls">
                <i className="las la-poll"></i>
                <em>My Polls</em>
            </Link>
            <Link className="menu-item" to="/my-profile">
                <i className="las la-user"></i>
                <em>My Profile</em>
            </Link>
            <Link className="menu-item" to="/settings">
                <i className="las la-cog"></i>
                <em>Settings</em>
            </Link>
        </>
    )
}
export default SideBar

