import React, {useEffect, useState} from 'react'


const ProfileCrumb = ({click = false}) => {

    const [profileClick, setProfileClick] = useState(false);
    useEffect(() => {
        console.log(click)
        setProfileClick(click)
    }, [click])

    return (

        <div>
            {profileClick &&
            <div id="user-dropdown" className="icon-dropdown">

                <div className="header"><a className="close-menu close-wrap"
                                           onClick={() => setProfileClick(false)}><span>Hi, Audrey</span><i
                    className="las la-times"></i></a></div>
                <ul className="dropdown-menu">
                    <li className="menu-item"><a href="my-profile.html">My Profile</a></li>
                    <li className="menu-item"><a href="settings.html">Settings</a></li>
                    <li className="menu-item"><a href="javascript:void(0);">Sign Out</a></li>
                </ul>
            </div>
            }
        </div>

    )
}
export default ProfileCrumb

