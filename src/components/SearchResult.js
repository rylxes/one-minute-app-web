import React, { useEffect, useState } from 'react';
import { request } from "../services/utilities";
import { API_URI } from "../services/constants";
import SSRStorage from '../services/storage';
import { Roller } from "react-spinners-css";
import VoteResult from "./alerts/VoteResult";
import { useHistory } from "react-router-dom";

const storage = new SSRStorage();

function SearchResult() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isActive, setActive] = useState("false");
  const handleShare = () => {
    setActive(!isActive);
  };

  const viewPoll = async (id) => {
    history.push('/view-poll/' + id);
  }

  useEffect(() => {
    let data = storage.getLocalStorage('SEARCH_RESULT');
    setData(data);
  }, []);

  // render() {

  return (
    <div className="container">
      <h4>Search Result</h4>
      {loading && (
        <Roller/>
      )}
      <div className="decoration"/>
      <div className="recent-poll-wrap">
        <div className="recent-polls row">

          {!loading && data && data.map((eachPoll, key) => (
            <div key={key} className="item grid col-5">
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
              </div>
            </div>))}


        </div>
      </div>
    </div>
  );
}

//}
export default SearchResult;
