import React, {useState} from 'react'
import RecommendedPolls from "../../components/RecommendedPolls";
import SharedWithMe from "../../components/SharedWithMe";
// import './App.css';

const Index = ({children}) => {


    return (
        <>
            <div id="content" className="snap-content">
                <div className="content">
                    <div className="header-clear"></div>

                    <div className="container">
                        <div className="profile-title">
                            <h4>Hi Audrey,</h4>
                            <p>Update your profile</p>
                        </div>
                        <div className="profile-image">
                            <div className="profile-image-wrap">
                                <img src="images/user_d.png" alt="Profile Image"/>
                                <div className="edit-profile-image">
                                    <span onClick="editProfileImage()">Edit <i className="las la-edit"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="decoration"></div>
                    <div className="container">
                        <div className="container no-bottom">
                            <div className="profile-form poll-form no-bottom">
                                <form action="#" method="post" className="updateProfile" id="updateProfile">
                                    <fieldset>
                                        <div className="formFieldWrap">
                                            <label htmlFor="userName">Username</label>
                                            <input type="text" name="userName" value="Audery" className="textField bg"
                                                   id="userName"/>
                                        </div>
                                        <div className="formFieldWrap">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" name="firstName" value="Audery" className="textField bg"
                                                   id="firstName"/>
                                        </div>
                                        <div className="formFieldWrap">
                                            <label htmlFor="lastName">Surname</label>
                                            <input type="text" name="lastName" value="Njemena" className="textField bg"
                                                   id="lastName"/>
                                        </div>
                                        <div className="formFieldWrap">
                                            <label htmlFor="userEmail">Email Address</label>
                                            <input type="email" name="userEmail" value="auderyn@gmail.com"
                                                   className="textField bg" id="userEmail" readOnly/>
                                        </div>

                                        <div className="formFieldWrap">
                                            <label htmlFor="userGender">Gender</label>
                                            <select name="category" className="contactField selectField"
                                                    id="userGender">
                                                <option value="Male" title="Male">Male</option>
                                                <option value="Female" title="Female" selected>Female</option>
                                            </select>
                                        </div>

                                        <div className="formFieldWrap">
                                            <label htmlFor="userPass">Password</label>
                                            <input type="password" name="userPass" value="1234567890"
                                                   className="textField bg" id="userPass"/>
                                        </div>
                                        <div className="formFieldWrap">
                                            <label htmlFor="userPassC">Password</label>
                                            <input type="password" name="userPassC" value="" className="textField bg"
                                                   id="userPassC"/>
                                        </div>

                                        <div className="formSubmitButtonErrorsWrap">
                                            <input type="submit"
                                                   className="buttonWrap button button-blue searchSubmitButton"
                                                   id="searchSubmitButton" value="Save" data-formId="contactForm"/>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="bottom-fix"></div>
                </div>
            </div>
        </>
    );
}

export default Index
