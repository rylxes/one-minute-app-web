import React, { useEffect, useState } from 'react'
import { request, calculateUtils } from "../../services/utilities";
import { API_URI } from "../../services/constants";
import SSRStorage from '../../services/storage';
import { useParams, useHistory } from "react-router-dom";
import * as moment from "moment";
import { isNil } from 'lodash-es';
import { ToastContainer } from "react-toastify";
import VoteOptions from '../../components/vote-options';
import { unitOfTime } from 'moment';
import { useForm } from 'react-hook-form';

const storage = new SSRStorage();
//9,1,

const Index = () => {
  const history = useHistory();
  let { id } = useParams();
  const viewPoll = async () => {
    history.push('/view-poll/' + id);
  }

  return (<>
    <div className="content">
      <div className="header-clear"></div>
      <div className="row">
        <div className="col-8 auto-col">
          <div className="notice notice-approve text-center">
            <h4>Thank you for voting, your vote was submitted successfully.</h4>
          </div>
          <div className="check-mark check-mark">
            <div className="icon animate__animated animate__pulse">
              <i className="las la-check"></i>
            </div>
          </div>
          <div className="button-wrap">
            <a onClick={viewPoll} className="buttonWrap button button-blue">Poll Result</a>
          </div>
        </div>
      </div>
      <div className="bottom-fix"></div>
    </div>
  </>);
}

export default Index
