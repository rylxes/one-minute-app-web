import React, {useState} from 'react'
import RecommendedPolls from "../../components/RecommendedPolls";
import SharedWithMe from "../../components/SharedWithMe";
// import './App.css';

const Index = ({children}) => {

    return (
        <div className="content">
            <div className="header-clear"></div>

            <div className="container">
                <h2>Add New Poll</h2>
                <div className="container no-bottom">
                    <div className="add-new-form poll-form no-bottom">
                        <form action="post-preview.html" method="post" className="newPoll" id="newPoll">
                            <fieldset className="row">
                                <div className="formFieldWrap col-6">
                                    <input type="text" name="titleField" placeholder="Title"
                                           className="contactField textField titleField" id="titleField"/>
                                </div>
                                <div className="formFieldWrap col-6">
                                    <select name="category" className="contactField selectField" id="selectField">
                                        <option value="" title="Select Category">Select Category (Optional)</option>
                                        <option value="General Opinion" title="General Opinion">General Opinion
                                        </option>
                                        <option value="Lifestyle" title="Lifestyle">Lifestyle</option>
                                        <option value="Politics" title="Politics">Politics</option>
                                        <option value="Entertainment" title="Entertainment">Entertainment</option>
                                        <option value="Sports" title="Sports">Sports</option>
                                        <option value="Technology" title="Technology">Technology</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset className="row">
                                <div className="formFieldWrap col-6">
                                        <textarea name="question" placeholder="Type your question here"
                                                  className="textarea" id="question" rows="7"></textarea>
                                </div>
                                <div className="formFieldWrap form-group radio-wrap col-6">
                                    <p>How will people respond to your poll?</p>
                                    <div className="form-radio">
                                        <input className="radio" id="customRadioInline" type="radio"
                                               name="customRadioInline"/>
                                        <span className="radiomark"></span>
                                        <label className="c-label" htmlFor="customRadioInline">Yes / No </label>
                                    </div>
                                    <div className="form-radio">
                                        <input className="radio" id="customRadioInline1" type="radio"
                                               name="customRadioInline"/>
                                        <span className="radiomark"></span>
                                        <label className="c-label" htmlFor="customRadioInline1">1 - 5
                                            Stars</label>
                                    </div>
                                    <div className="form-radio">
                                        <input className="radio" id="customRadioInline2" type="radio" checked
                                               name="customRadioInline"/>
                                        <span className="radiomark"></span>
                                        <label className="c-label" htmlFor="customRadioInline2">A - E
                                            Options</label>
                                    </div>
                                </div>

                                <div className="formFieldWrap col-12">
                                    <p>Upload an image to your poll</p>
                                    <span className="tooltip show-submenu"><i
                                        className="las la-question-circle"></i></span>
                                    <div className="submenu tooltip-info">
                                        Email verification required to edit this item.
                                    </div>
                                    <div className="upload-wrap">
                                        <input name="pollImage" className="pollImage" type="file"
                                               accept="image/png, image/gif, image/jpeg"/>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="row">
                                <div className="formFieldWrap col-6">
                                    <p>Open to Everyone?</p>
                                    <span className="tooltip show-submenu"><i
                                        className="las la-question-circle"></i></span>
                                    <div className="submenu tooltip-info">
                                        Email verification required to edit this item.
                                    </div>
                                    <div className="form-group check-wrap">
                                        <label className="c-label">Yes<input type="checkbox" checked="checked"
                                                                             name="polltype_open_to_all"
                                                                             className="checkbox"/><span
                                            className="checkmark"></span></label>
                                    </div>
                                </div>
                                <div className="formFieldWrap col-6">
                                    <p>Close Date</p>
                                    <input className="form-control textField" type="text" id="date-group1-2"
                                           placeholder="YYYY-MM-DD"/>
                                </div>
                            </fieldset>
                            <div className="row">
                                <div className="reg-notice col-12">
                                    <div className="notice notice-danger">
                                        <h4>Results of your poll will be visible for 2 days after the poll
                                            closes. </h4>
                                        <p className="triggerRegister anchor">Register to save the results
                                            permanently and access other features.</p>
                                    </div>
                                    <div id="registerWrap" className="formFieldWrap">
                                        <p>Your Email Address</p>
                                        <span className="tooltip show-submenu"><i
                                            className="las la-question-circle"></i></span>
                                        <div className="submenu tooltip-info">
                                            Email verification required to edit this item.
                                        </div>
                                        <input type="email" name="emailField" placeholder="you@yourdomain.com"
                                               className="contactField textField" id="emailField"/>
                                    </div>
                                </div>
                                <div className="formSubmitButtonErrorsWrap col-12">
                                    <input type="submit"
                                           className="buttonWrap button button-blue searchSubmitButton"
                                           id="searchSubmitButton" value="Preview" data-formId="contactForm"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Index
