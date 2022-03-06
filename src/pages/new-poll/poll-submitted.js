import React, {useEffect, useState} from 'react'
import SSRStorage from '../../services/storage';
import {useParams, useHistory} from "react-router-dom";

const storage = new SSRStorage();


const Index = () => {
    const history = useHistory();
    let {id} = useParams();

    const viewPoll = async () => {
        history.push('/view-poll/' + id);
    }
    useEffect(() => {

    }, [])


    return (
        <>
            <div className="content">
                <div className="header-clear"></div>
                <div className="row">
                    <div className="col-8 auto-col">
                        <div className="notice notice-approve text-center">
                            <h4>Thank you for creating a poll, your poll is now live.</h4>
                        </div>
                        <div className="check-mark check-mark">
                            <div className="icon animate__animated animate__pulse">
                                <i className="las la-check"></i>
                            </div>
                        </div>
                        <div className="button-wrap">
                            <a onClick={viewPoll} className="buttonWrap button button-blue">View Poll</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-fix"></div>
            </div>
        </>
    );
}

export default Index
