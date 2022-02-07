import React, {useEffect, useState, useRef} from 'react'
import {request} from "../services/utilities";
import {API_URI} from "../services/constants";
import {Roller} from "react-spinners-css";

const RecommendedPolls = (props) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const load = async () => {
        try {
            setLoading(true)

            const error = (error) => {
                console.log(error)
                setLoading(false)
            }

            const success = async (position) => {
                let cord = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                }
                const {data} = await request(`${API_URI}/polls/listAll`, 'POST', true, cord);
                setData(data);
                setLoading(false)
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error);
            }else{
                setLoading(false)
            }

        } catch (e) {
            setLoading(false)
            console.log(e)

        }
    }
    useEffect(() => {
        load()
    }, []);



    return (

        <>
            <div className="container">
                <h4>Recommended Polls</h4>
                <div className="recent-poll-wrap">
                    <div className="recent-polls home-polls">
                        {loading && (
                            <Roller/>
                        )}

                        {data && data.map((eachPoll, key) => (
                            <div className="item" key={key}>
                                <h4>
                                    <a href="vote-now.html">{eachPoll.question}</a>
                                </h4>
                                <span className="votes">
                                <a href="vote-now.html">{eachPoll?.counters?.value || 0} / {eachPoll.category.name}</a>
                              </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    )
}


export default RecommendedPolls;

