import React from 'react';
import numeral from 'numeral';
import {confirmAlert} from 'react-confirm-alert';
import JwtDecode from 'jwt-decode';
import moment from 'moment';

import SSRStorage from './storage';
import {TOKEN_COOKIE} from './constants';
import axios from 'axios';

export const formatCurrency = amount => `₦${numeral(amount).format('0,0.00')}`;

export const isUnset = o => typeof o === 'undefined' || o === null;

export const isSet = o => !isUnset(o);

export function encodeValue(val) {
    if (typeof val === 'string') {
        return val;
    }

    return JSON.stringify(val);
}


export function decodeValue(val) {
    if (typeof val === 'string') {
        try {
            return JSON.parse(val);
        } catch (_) {
        }
    }

    return val;
}

const checkStatus = async response => {
    if (!response.ok) {
        if (response.statusText === 'Unauthorized') {
            // prettier-ignore
            (new SSRStorage()).removeItem(TOKEN_COOKIE);
        }
        const message = await response.text();
        const err = JSON.parse(message);
        throw Object.freeze({message: err});
    }
    return response;
};

export const defaultHeaders = {
    Accept: 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Content-Type': 'application/json',
};

export const defaultUploadHeaders = {
    Accept: 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    //'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'multipart/form-data',
};

// export const patchHeaders = {
// 	Accept: 'application/json',
// 	'Access-Control-Allow-Origin': '*',
// 	'Content-Type': 'application/json',
// };


const headers = user => {
    if (user) {
        const storage = new SSRStorage();
        const TOKEN_KEY = 'jwt-token';
        const token = storage.getLocalStorage(TOKEN_KEY);
        let isAuth = storage.getLocalStorage('IS_AUTH');
        if (isAuth) {
            isAuth = false;
        }
        let headers = {
            ...defaultHeaders, ...{
                Authorization: 'Bearer ' + token,
                HasAuth: "YES",
                AUTHENTICATED: isAuth,
                UUID: storage.getLocalStorage('UUID')
            }
        };
        console.log(headers)
        return headers;
    } else {
        return defaultHeaders;
    }
};

// const headersPatch = token => {
// 	const jwt = `Bearer ${token}`;
// 	return { ...patchHeaders, Authorization: jwt };
// };

const parseJSON = response => response.json();

export const requestPatch = async (url, authed = false, data) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] =
        'GET, POST,HEAD, OPTIONS,PUT, DELETE';
    axios.defaults.headers.post['Access-Control-Request-Headers'] = '*';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Accept'] = 'application/json';
    if (authed) {
        // console.log('f');
        // prettier-ignore
        const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
        axios.defaults.headers.common['Authorization'] = user.token;
    }
    const result = await axios.patch(url, data);
    return parseJSON(result);
};

export const request = async (url, method, authed = false, data) => {
    // prettier-ignore
    const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
    // console.log(user);
    const response = await fetch(url, {
        method: method,
        headers: authed ? headers(authed) : {...defaultHeaders},
        body: JSON.stringify(data),
    });
    const result = await checkStatus(response);

    //this is going to affect other API implementations where delete is used and an actual result was expected to be returned and used. Lets comment it out for now.
    if (method === 'DELETE') {
        return {result};
    }
    return parseJSON(result);
};

export const upload = async (url, method, body) => {
    // prettier-ignore
    const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
    const jwt = `Bearer ${user.token}`;
    let headers = {Authorization: jwt};
    const response = await fetch(url, {method, headers, body});
    const result = await checkStatus(response);
    return parseJSON(result);
};

// prettier-ignore
export const renderTextInput = ({input, label, type, id, placeholder, readOnly = false, meta: {touched, error}}) => (
    <div
        className={`form-group ${touched &&
        (error ? 'has-error has-danger' : '')}`}>
        <label htmlFor={id}>{label}</label>
        <input
            {...input}
            type={type}
            className="form-control"
            placeholder={placeholder || label}
            readOnly={readOnly}
        />
        {touched && error && (
            <div className="help-block form-text with-errors form-control-feedback">
                <ul className="list-unstyled">
                    <li>{error}</li>
                </ul>
            </div>
        )}
    </div>
);

export const renderTextArea = ({
                                   input,
                                   label,
                                   type,
                                   id,
                                   placeholder,
                                   meta: {touched, error},
                               }) => (
    <div
        className={`form-group ${touched &&
        (error ? 'has-error has-danger' : '')}`}>
        <label htmlFor={id}>{label}</label>
        <textarea
            {...input}
            type={type}
            className="form-control"
            placeholder={placeholder || label}></textarea>
        {touched && error && (
            <div className="help-block form-text with-errors form-control-feedback">
                <ul className="list-unstyled">
                    <li>{error}</li>
                </ul>
            </div>
        )}
    </div>
);

// prettier-ignore
export const renderTextInputGroup = ({input, append, label, icon, type, id, placeholder, meta: {touched, error}}) => (
    <div
        className={`form-group ${touched &&
        (error ? 'has-error has-danger' : '')}`}>
        <label htmlFor={id}>{label}</label>
        <div className="input-group">
            {!append && (
                <div className="input-group-prepend">
                    <div className="input-group-text">{icon}</div>
                </div>
            )}
            <input
                {...input}
                type={type}
                className="form-control"
                placeholder={placeholder || label}
            />
            {append && (
                <div className="input-group-append">
                    <div className="input-group-text">{icon}</div>
                </div>
            )}
        </div>
        {touched && error && (
            <div className="help-block form-text with-errors form-control-feedback">
                <ul className="list-unstyled">
                    <li>{error}</li>
                </ul>
            </div>
        )}
    </div>
);


export const confirmAction = (action, payload, alertText, alertHead) => {
    confirmAlert({
        customUI: ({onClose}) => {
            const onclick = async () => {
                action(payload);
                onClose();
            };
            return (
                <div className="custom-ui text-center">
                    <h1 className="">{alertHead ? alertHead : 'Are you sure?'}</h1>
                    <p>{alertText ? alertText : 'You want to delete this remove'}</p>
                    <div>
                        <button
                            className="btn btn-danger"
                            style={{margin: 10}}
                            onClick={onClose}>
                            No
                        </button>
                        <button
                            className="btn btn-primary"
                            style={{margin: 10}}
                            onClick={onclick}>
                            Yes
                        </button>
                    </div>
                </div>
            );
        },
    });
};

export const renderSelectWithDefault = ({
                                            input,
                                            label,
                                            placeholder,
                                            id,
                                            defaultVal,
                                            data,

                                            meta: {touched, error},
                                        }) => {
    return (
        <div
            className={`form-group ${touched &&
            (error ? 'has-error has-danger' : '')}`}>
            <label htmlFor={id}>{label}</label>
            <select {...input} className="form-control">
                <option value="">{placeholder}</option>
                {data.map((d, i) => {
                    let def = d.id === defaultVal;
                    return (
                        <option key={i} value={d.id} defaultChecked={def}>
                            {d.name}
                        </option>
                    );
                })}
            </select>
            {touched && error && (
                <div className="help-block form-text with-errors form-control-feedback">
                    <ul className="list-unstyled">
                        <li>{error}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export const renderSelect = ({
                                 input,
                                 label,
                                 placeholder,
                                 id,
                                 data,
                                 meta: {touched, error},
                             }) => (
    <div
        className={`form-group ${touched &&
        (error ? 'has-error has-danger' : '')}`}>
        <label htmlFor={id}>{label}</label>
        <select {...input} className="form-control">
            <option value="">{placeholder}</option>
            {data.map((d, i) => (
                <option key={i} value={d.id}>
                    {d.name}
                </option>
            ))}
        </select>
        {touched && error && (
            <div className="help-block form-text with-errors form-control-feedback">
                <ul className="list-unstyled">
                    <li>{error}</li>
                </ul>
            </div>
        )}
    </div>
);


export const getUser = async () => {
    const date = new Date();
    // prettier-ignore
    const user = await (new SSRStorage()).getItem(TOKEN_COOKIE);
    if (user) {
        const token = user.token;
        const decoded = JwtDecode(token);
        if (decoded.exp > date.getTime() / 1000) {
            return user;
        }
    }

    return null;
};

export const redirectToPage = (role, history) => {
    let uri = '';
    uri = '/dashboard';
    if (uri !== '') {
        history.push(uri);
    } else {
        history.push('/?not-authenticated');
    }
};

export const fullname = user => `${user.first_name} ${user.last_name}`;

export const formatNumber = n =>
    parseFloat(n).toLocaleString(undefined, {maximumFractionDigits: 2});

export const getPeriod = () => {
    const qtr = moment().format('Qo');
    const start = moment()
        .startOf('quarter')
        .format('MMM');
    const end = moment()
        .endOf('quarter')
        .format('MMM');

    return `${qtr} Quarter [${start} - ${end}]`;
};

export const errorMessage = error => {
    return (
        error && (
            <div
                className="alert alert-danger"
                dangerouslySetInnerHTML={{
                    __html: `<strong>Error!</strong> ${error}`,
                }}
            />
        )
    );
};

export const findByID = (array, id) => {
    return array.find(item => item.id === id);
};

export const calculateAge = dob => {
    let test = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    //check if date is dd/mm/yyyy:if yes turn to mm/dd/yyyy
    if (!test.test(dob)) {
        // console.log(dob);
        let arr = dob.split('/');

        let newDate = [arr[1], arr[0], arr[2]];
        dob = newDate.join('/');
    }
    let db = moment(dob).format('MM/DD/YYYY');
    let diff_ms = Date.now() - new Date(db).getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
};

// export const getAge = dateString => {
// 	let today = new Date();
// 	let birthDate = new Date(dateString);
// 	let age = today.getFullYear() - birthDate.getFullYear();
// 	let m = today.getMonth() - birthDate.getMonth();
// 	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
// 		age--;
// 	}
// 	return age;
// };
