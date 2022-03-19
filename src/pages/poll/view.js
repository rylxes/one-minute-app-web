import React, {useEffect, useState} from 'react'
import {request} from "../../services/utilities";
import {API_URI} from "../../services/constants";
import SSRStorage from '../../services/storage';
import {useParams, useHistory} from "react-router-dom";
import * as moment from "moment";
import {isNil} from 'lodash-es';
import {ToastContainer} from "react-toastify";
import ChartPoll from "../../components/Chart";

const storage = new SSRStorage();


const Index = () => {
    const [poll, setPoll] = useState({});
    const [pollOptions, setPollOptions] = useState([]);
    const [canEdit, setCanEdit] = useState([]);
    const history = useHistory();
    let {id} = useParams();
    const editPoll = async (id) => {
        history.push('/add-new/' + id);
    }

    useEffect(() => {
        loadPoll();
        loadPollOptions();
    }, [])

    const loadPollOptions = async () => {
        const {data} = await request(`${API_URI}/poll_options/byPoll/${id}`, 'GET', true);
        let pollOptions = data;
        console.log(pollOptions);
        setPollOptions(pollOptions);
    }

    const loadPoll = async () => {
        console.log('dd')
        const {data} = await request(`${API_URI}/polls/${id}`, 'GET', true);

        console.log(data)
        let poll = data;
        let udetails = storage.getLocalStorage('USER_DETAILS') || {};
        let canEdit = false;
        if (udetails?.id === poll.user_id) {
            canEdit = true;
        }
        if (storage.getLocalStorage('UUID') === poll.theuuid) {
            canEdit = true;
        }
        if (poll.hasVoted == 1) {
            canEdit = false;
        }
        if (!isNil(poll.close_date)) {
            const mydate = moment(poll.close_date).startOf('day');
            let hasNotClosed = moment().startOf('day').isSameOrBefore(mydate);
            console.log(mydate)
        }
        setPoll(poll);
        setCanEdit(canEdit);
        console.log(poll);
    }

    return (
        <>
            <div className="content">
                <div className="header-clear"></div>

                <div className="vote-title col-12">
                    <h2>{poll?.title}</h2>
                    <p>{poll?.question} </p>
                </div>

                <div className="decoration"></div>
                <div className="vote-row row">
                    <div className="poll-image col-5">

                        {poll.url && (
                            <img src={poll.url}/>
                        )}

                    </div>
                    <div className="col-1"></div>

                    <div className="col-6">
                        <div className="poll-summary">
                            <h4>Poll Summary</h4>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Poll Type</td>
                                    <td>{poll?.pollType?.name}</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>{poll?.category?.name}</td>
                                </tr>
                                <tr>
                                    <td>Total Votes</td>
                                    <td>{poll?.counters?.value}</td>
                                </tr>

                                {pollOptions.map((eachType) => (
                                    <tr>
                                        <td>{eachType.name} {poll?.pollType?.id == 2 ? "Star" : "Vote"}</td>
                                        <td>{eachType?.counters?.value || 0}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td>Created On</td>
                                    <td>{poll?.created_at}</td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td>Latest Vote</td>*/}
                                {/*    <td>Today, 11:23 AM</td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td>Closes</td>
                                    <td>{poll?.close_date}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

               <ChartPoll poll={poll} pollOptions={pollOptions}></ChartPoll>
                
                <div className="decoration"></div>

                {canEdit && (
                    <div className="formSubmitButtonErrorsWrap row">
                        <div className="col-12">
                            <a onClick={() => editPoll(poll.id)} className="buttonWrap button button-blue searchSubmitButton">Edit Poll
                            </a>
                        </div>
                    </div>
                )}

            </div>

        </>
    )
        ;
}

export default Index
