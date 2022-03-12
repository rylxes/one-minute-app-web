import React, { useEffect, useState } from 'react'
import { request, calculateUtils } from "../../services/utilities";
import { API_URI } from "../../services/constants";
import SSRStorage from '../../services/storage';
import { useParams, useHistory } from "react-router-dom";
import * as moment from "moment";
import { isNil } from 'lodash-es';
import { ToastContainer } from "react-toastify";

const storage = new SSRStorage();


const VoteOptions = ({ poll, hasNotExpired, onVote }) => {

  return (<>
    <div className="vote-wrap col-6">

      {hasNotExpired && (
        <>
          {poll?.pollType?.id == 1 && (
            <>
              <div className="formFieldWrap form-group radio-wrap radio-group">

                {poll?.valueVote && poll?.valueVote.map((eachType, index, array) => (
                  <>
                    <label className="radio-item" htmlFor={eachType.value}>
                      <p>{eachType.value}</p>
                      <input className="radio" id={eachType.value}
                             onClick={() => onVote(eachType.id)}
                             value={eachType.id} type="radio" name="vote"/>
                      <span className="checkmark"></span>
                    </label>
                  </>
                ))}

              </div>
            </>
          )}

          {poll?.pollType?.id == 2 && (
            <>
              <div className="formFieldWrap form-group radio-wrap radio-group">
                <h5>5 Stars Rating</h5>
                <div className="rate">
                  <div className="stars">

                    {poll?.valueVote && poll?.valueVote.map((eachType, index, array) => (
                      <>
                        <input type="radio" id={'star' + eachType.id} name="rating"
                               onClick={() => onVote(eachType.id)}
                               value={eachType.id}/>
                      </>
                    ))}

                    {poll?.valueVote && poll?.valueVote.map((eachType, index, array) => (
                      <>
                        <label htmlFor={'star' + eachType.id}
                               aria-label="Banana">{eachType.id} star</label>
                      </>
                    ))}

                  </div>

                </div>

              </div>
            </>
          )}


          {poll?.pollType?.id == 3 && (
            <>
              <div className="formFieldWrap form-group radio-wrap border-bottom">
                <h5>A - E Options</h5>

                {poll?.pollOptions && poll?.pollOptions.map((eachType, index, array) => (
                  <>
                    <div className="form-radio">
                      <input className="radio" id="customRadioInline" type="radio"
                             onClick={() => onVote(eachType.vote_value_id)}
                             value={eachType.vote_value_id} name="answer"/>
                      <span className="radiomark"></span>
                      <label className="c-label"
                             htmlFor="customRadioInline">{eachType.value}</label>
                    </div>
                  </>
                ))}

              </div>
            </>
          )}
        </>
      )}


    </div>
  </>);
}

export default VoteOptions
