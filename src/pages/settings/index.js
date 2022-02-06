import React, {useState} from 'react'
import RecommendedPolls from "../../components/RecommendedPolls";
import SharedWithMe from "../../components/SharedWithMe";

const Index = ({children}) => {


    return (
        <div className="content">
            <div className="header-clear"></div>

            <div className="container">
                <h2>Global Settings</h2>
            </div>

            <div className="decoration"></div>
            <div className="container">
                <div className="global-settings">

                    <div className="settings-group">
                        <div className="item-title">
                            <h4>Set Poll Duration (Days)</h4>
                        </div>
                        <div className="set-switch">
                            <input className="form-control textField" type="number" id="poll_duration" step="1"
                                   placeholder="30"/>
                        </div>
                    </div>

                    <div className="settings-group">
                        <div className="item-title">
                            <h4>Enable/Disable Deceny Filter</h4>
                        </div>
                        <label className="set-switch">
                            <input type="checkbox"/>
                            <div className="set-slider-wrap">
                                <span className="options">No</span>
                                <span className="set-slider round"></span>
                                <span className="options">Yes</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="show-more-wrap row">
                <div className="col-12">
                    <a href="javascript:void(0);" className="buttonWrap button-blue">Save</a>
                </div>
            </div>
            <div className="bottom-fix"></div>

        </div>
    );
}

export default Index
