import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";


const ProfileCrumb = () => {

    return (

        <>
            <ul className="dropdown-menu">
                <li className="menu-item">
                    <Link to="/my-profile">
                        My Profile
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/settings">
                        Settings
                    </Link>
                </li>
                {/*<li className="menu-item"><a href="javascript:void(0);">Sign Out</a></li>*/}
            </ul>

        </>

    )
}
export default ProfileCrumb

