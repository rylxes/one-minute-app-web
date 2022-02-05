require('dotenv').config();

export const DEBUG = process.env.REACT_APP_DEBUG;
export const APP_NAME = process.env.REACT_APP_NAME;
export const BASE_API = process.env.REACT_APP_API;

export const API_URI = `${BASE_API}`;
export const TOKEN_COOKIE = 'ZC:TOKEN_COOKIE';
export const MODE_COOKIE = 'ZC:MODE_COOKIE';
export const FULLSCREEN_COOKIE = 'ZC:FULLSCREEN_COOKIE';
export const USER_RECORD = 'ZC:USER_RECORD';
//export const socket = socketIOClient(API_URI, { transports: ['websocket'] });


export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
export const severity = [
	{
		value: 'mild',
		label: 'mild',
	},
	{ value: 'moderate', label: 'moderate' },
	{ value: 'severe', label: 'severe' },
	{ value: 'intolerance', label: 'intolerance' },
];
