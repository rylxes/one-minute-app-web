import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import {request} from "../services/utilities";
import {API_URI} from "../services/constants";
import SSRStorage from '../services/storage';
import {Roller} from "react-spinners-css";
import VoteResult from "./alerts/VoteResult";
import {useHistory} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
const storage = new SSRStorage();

function SharedWithMe() {
    const history = useHistory();
    const {control, register, handleSubmit, reset, formState} = useForm();
    const {errors} = formState;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isActive, setActive] = useState(false);
    const [activeId, setActiveId] = useState(0);
    const [isToast, setToast] = useState(false);


    const handleShare = (key) => {
        setActive(!isActive);
        setActiveId(key);
    };

    const viewPoll = async (id) => {
        history.push('/view-poll/' + id);
    }
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

    const submitForm = async (event)  =>{
        setLoading(true)
        try {
            event.preventDefault();
            const {shareEmails } = event.target.elements
                console.log(shareEmails.value)
        
                
            
                let toSubmit = {
                  'poll_id': activeId,
                  'emails': shareEmails.value,
                }
            
                
                const {data} = await request(`${API_URI}/polls/sharePolls`, 'POST', true, toSubmit);
                console.log(data)
                const response = data
          
                let shared = "";
                if (response.shared.length > 0) {
                  shared = "Successfully shared with: " + response.shared + "\n\n"
                }
                if (response.unregistered.length > 0) {
                  shared = shared + "Unregistered emails were sent invitations: " + response.unregistered
                }
          
                setLoading(false)
                toast(shared);
                setToast(true)
            
                console.log(response)
                history.push('/share-success/' + activeId);
        } catch (error) {
            setLoading(false)
            toast(error);
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
            {isToast && (
                <div className="w-full mb-4">
                    <ToastContainer/>
                </div>
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
                                    <a onClick={() => viewPoll(eachPoll.id)} title="View Poll">
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
                                <em className="share show-submenu" onClick={() => handleShare(eachPoll.id)}/>
                                <div
                                    className={isActive && eachPoll.id === activeId ? "submenu share-routes submenu-active" : "submenu share-routes"}>

                                    <form
                                    onSubmit={submitForm}
                                    className="newPoll">
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
                            placeholder="Emails separated with commas"
                        />
                                        </div>
                                        <div className="footer">
                                            <div className="top-buttons">
                                                <button
                                                    type="submit"
                                                    className="buttonWrap button-blue"
                                                >
                                                    Share
                                                </button>
                                                <a
                                                onClick={() => handleShare(eachPoll.id)}
                                                    className="buttonWrap button-red"
                                                >
                                                    Cancel
                                                </a>
                                            </div>
                                            <div className="buttom-link">
                                                <a
                                                    
                                                 className="text-link">
                                                    Share As Link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
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
