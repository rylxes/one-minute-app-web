import React, {useEffect, useState} from 'react';
import {request} from "../services/utilities";
import {API_URI} from "../services/constants";
import SSRStorage from '../services/storage';
import {Roller} from "react-spinners-css";
import VoteResult from "./alerts/VoteResult";

const storage = new SSRStorage();

function SharedWithMe() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isActive, setActive] = useState("false");
    const handleShare = () => {
        setActive(!isActive);
    };

    const load = async () => {
        try {
            setLoading(true)
            //storage.setLocalStorage('UUID', "4cc367cb-929d-49c3-8cd8-e4d0f012423d");
            let page = {
                page: 1
            }
            const {data} = await request(`${API_URI}/polls/sharedWithMe`, 'POST', true, page);
            setData(data);
            console.log(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)

        }
    }

    useEffect(() => {
        load()
    }, []);

    // render() {

    return (
        <div className="container">
            <h4>Polls Shared With Me</h4>
            {loading && (
                <Roller/>
            )}
            <div className="decoration"/>
            <div className="recent-poll-wrap">
                <div className="recent-polls row">

                    {!loading && data && data.map((eachPoll, key) => (<div key={key} className="item grid col-5">
                        <div className="grid-top">
                            <div className="image-holder">
                                {eachPoll.url && <img src={eachPoll.url}/>}
                            </div>
                            <div className="contents">
                                <h4>
                                    <a href="view-poll.html" title="View Poll">
                                        {eachPoll.title}
                                        <span>
                        {eachPoll.question}
                      </span>
                                    </a>
                                </h4>
                            </div>
                        </div>
                        <VoteResult poll={eachPoll}/>


                        <div className="grid-bottom">
                            <div className="user-wrap">
                                <i className="las la-user"/> {eachPoll?.user?.name || 'Guest'}
                            </div>
                            <div className="share-wrap" title="Share">
                                <em className="share show-submenu" onClick={handleShare}/>
                                <div
                                    className={isActive ? "submenu share-routes" : "submenu share-routes submenu-active"}>
                                    <div className="sharePrompt">
                                        <div className="header">
                                            <h4>Share Poll With Friends</h4>
                                            <small>
                                                Enter email address of recipients (Unregistered users
                                                will get an invite).
                                            </small>
                                        </div>
                                        <div className="sharebox">
                        <textarea
                            rows={4}
                            name="shareEmails"
                            id="shareEmails"
                            placeholder="Emails separated with commas"
                            defaultValue={""}
                        />
                                        </div>
                                        <div className="footer">
                                            <div className="top-buttons">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="buttonWrap button-blue"
                                                >
                                                    Share
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="buttonWrap button-red"
                                                >
                                                    Cancel
                                                </a>
                                            </div>
                                            <div className="buttom-link">
                                                <a href="javascript:void(0);" className="text-link">
                                                    Share As Link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}


                </div>
            </div>
        </div>
    );
}

//}
export default SharedWithMe;
