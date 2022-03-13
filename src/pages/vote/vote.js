import React, { useEffect, useState } from 'react'
import { request, calculateUtils } from "../../services/utilities";
import { API_URI } from "../../services/constants";
import SSRStorage from '../../services/storage';
import { useParams, useHistory } from "react-router-dom";
import * as moment from "moment";
import { isNil } from 'lodash-es';
import { toast, ToastContainer } from "react-toastify";
import VoteOptions from '../../components/vote-options';
import { unitOfTime } from 'moment';
import { useForm } from 'react-hook-form';

const storage = new SSRStorage();
//9,1,

const Index = () => {
  const history = useHistory();
  let { id } = useParams();
  const { control, register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [isAuth, setAuth] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [pollOptions, setPollOptions] = useState(null);
  const [sum, setSum] = useState(0);
  const [vote, setVote] = useState(null);
  const [optionValues, setOptionValues] = useState([]);
  const [poll, setPoll] = useState([]);
  const [hasNotExpired, setHasNotExpired] = useState([]);
  const [isToast, setToast] = useState(false);


  const loadPoll = async () => {

    const { data } = await request(`${API_URI}/polls/${id}`, 'GET', true);
    console.log(data);
    let canEdit = false;
    if (data.hasVoted == 1) {
      let hasNotExpired = false;
    }
    calculate(data);
    console.log({ hasNotExpired, poll: data });
    // console.log({test: this.poll.hasVoted == 1});
    setCanEdit(canEdit)
    setPoll(data)
    // setHasNotExpired(hasNotExpired)
  }

  const calculate = (poll) => {
    let hasNotExpired;
    let canEdit = false;
    if (!isNil(poll)) {
      let { optionValues, sum } = calculateUtils(poll);
      setSum(sum)
      setOptionValues(optionValues)
      if (!isNil(poll.close_date)) {
        const mydate = moment(poll.close_date).startOf('day');
        let hasNotClosed = hasNotExpired = moment().startOf('day').isSameOrBefore(mydate);
      }


      let udetails = storage.getLocalStorage('USER_DETAILS') || {};
      if (udetails?.id === poll.user_id) {
        canEdit = true;
      }
      if (storage.getLocalStorage('UUID') === poll.theuuid) {
        canEdit = true;
      }
      if (poll.hasVoted == 1) {
        hasNotExpired = false;
      }
      if (poll.hasAnyVoted == 1) {
        canEdit = false;
      }

      if (!canEdit) {
        // this.page = 'Home';
      }
      console.log(poll)

      // console.log(moment().startOf('day').isSameOrBefore(mydate))
    }
    setCanEdit(canEdit)
    setHasNotExpired(hasNotExpired)
  }

  const submitForm = async () => {
    console.log({ vote })

    if (!vote) {
      toast.error("Select a Vote before submitting ");
      setToast(true)
      return;
    }
    let toSubmit = {
      uuid: storage.getLocalStorage('UUID'),
      poll_id: id,
      value: vote,
    };

    const { data } = await request(`${API_URI}/votes`, 'POST', true, toSubmit);
    console.log(data);
    history.push('/vote-complete/' + data?.poll_id);
  }
  const onVote = async (id) => {
    setVote(id);
  }
  const loadPollOptions = async () => {
    const { data } = await request(`${API_URI}/poll_options/byPoll/${id}`, 'GET', true);
    console.log(data);
    setPollOptions(data)
  }

  useEffect(async () => {
    await loadPoll();
    await loadPollOptions();
    let isAuth = storage.getLocalStorage('IS_AUTH');
    setAuth(isAuth)
  }, [])


  return (<>
    <div className="content">
      {isToast && (
        <div className="w-full mb-4">
          <ToastContainer/>
        </div>
      )}
      <form
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="header-clear"></div>

        <div className="vote-title full-width">
          <h2>{poll?.title}</h2>
          <p>{poll?.question}</p>
        </div>

        <div className="decoration"></div>
        <div className="vote-rown row">
          <div className="poll-image col-5">

            {poll.url && (
              <>
                <img src={poll.url} alt="Image" width={400} height={400}/>
              </>
            )}

          </div>
          <div className="col-1"></div>

          <VoteOptions poll={poll} hasNotExpired={hasNotExpired} onVote={onVote}/>
        </div>
        <div id="pollResBasic" className="poll-summary">
          <h4>Poll Summary</h4>
          <table className="table">
            <tbody>
            <tr>
              <td>Category</td>
              <td>{poll?.category?.name}</td>
            </tr>
            <tr>
              <td>Total Votes</td>
              <td>{sum}</td>
            </tr>


            {optionValues && optionValues.map((eachValue, index, array) => (
              <>
                <tr key={index}>
                  <td>{eachValue.name} {poll?.pollType?.id == 2 ? "Star" : ""}</td>
                  <td>{eachValue.count}</td>
                </tr>
              </>
            ))}
            </tbody>
          </table>
        </div>
        <div className="decoration"></div>
        <div className="formSubmitButtonErrorsWrap">

          {hasNotExpired && (
            <>
              <input type="submit" className="buttonWrap button button-blue searchSubmitButton"
                     value="Vote"/>
            </>
          )}


        </div>
      </form>

      <div className="bottom-fix"></div>

    </div>

  </>);
}

export default Index
