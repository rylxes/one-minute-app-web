import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from "react-router-dom";
import {request} from "../../services/utilities";
import {API_URI} from "../../services/constants";
import SSRStorage from '../../services/storage';
import {Roller} from "react-spinners-css";
import VoteResult from "../../components/alerts/VoteResult";

const storage = new SSRStorage();


const Index = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [pollList, setPollList] = useState([]);
    const [pageNumber, setPageNumber] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        // storage.setLocalStorage("UUID", "ddba9ab1-7c93-4a53-8991-9c2ef21b3902")

        loadData();
    }, [])

    const viewPoll = async (id) => {
        history.push('/view-poll/' + id);
    }

    const loadMorePoll = async () => {
        let page = {
            page: 1,
            size: 15,
        }
        const {data} = await request(`${API_URI}/polls/mine`, 'POST', true, page);
        setPollList(data)
        setPageNumber(2);
        setShowMore(false)
    }

    const loadData = async () => {
        setLoading(true)
        let page = {
            page: 1
        }
        const {data} = await request(`${API_URI}/polls/mine`, 'POST', true, page);
        setPollList(data)
        setPageNumber(2);
        setShowMore(true)
        console.log(data);
        setLoading(false)

    }

    return (
        <>
            <div className="content">
                <div className="header-clear"></div>


                <div className="container">
                    <h4>My Polls</h4>
                    <div className="decoration"></div>
                    <div className="recent-poll-wrap">

                        <div className="recent-polls row">
                            {loading && (
                                <Roller/>
                            )}

                            {!loading && pollList && pollList.map((eachPoll, key) => (
                                <div className="item grid col-5" key={key}>
                                    <div className="grid-top">
                                        <div className="image-holder">
                                            {eachPoll.url && <img src={eachPoll.url}/>}
                                        </div>
                                        <div className="contents">
                                            <h4><a onClick={() => viewPoll(eachPoll.id)} title="View Poll">{eachPoll.title}
                                                <span>{eachPoll.question}</span></a>
                                            </h4>

                                        </div>
                                    </div>
                                    <VoteResult poll={eachPoll}/>
                                    <div className="grid-bottom">
                                        <div className="user-wrap">
                                            <i className="las la-user"></i> {eachPoll?.user?.name || 'Guest'}
                                        </div>
                                        <div className="share-wrap" title="Share">
                                            <em className="share show-submenu"></em>
                                            <div className="submenu share-routes">
                                                <div className="sharePrompt">
                                                    <div className="header">
                                                        <h4>Share Poll With Friends</h4>
                                                        <small>Enter email address of recipients (Unregistered users will
                                                            get an invite).</small>
                                                    </div>
                                                    <div className="sharebox">
                                                    <textarea rows="4" name="shareEmails" id="shareEmails"
                                                              placeholder="Emails separated with commas"></textarea>
                                                    </div>
                                                    <div className="footer">
                                                        <div className="top-buttons">
                                                            <a href="javascript:void(0);"
                                                               className="buttonWrap button-blue">Share</a>

                                                            <a href="javascript:void(0);"
                                                               className="buttonWrap button-red">Cancel</a>
                                                        </div>
                                                        <div className="buttom-link">
                                                            <a href="javascript:void(0);" className="text-link">Share As
                                                                Link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>

                <div className="decoration"></div>
                <div className="show-more-wrap row">
                    <div className="col-12">
                        <a href="javascript:void(0);" className="buttonWrap button-blue">Show More</a>
                    </div>
                </div>
                <div className="bottom-fix"></div>
            </div>
        </>
    );
}

export default Index
