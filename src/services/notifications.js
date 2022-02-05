import React from 'react'
import {NotificationManager} from 'react-notifications'
import '../css/react-notifications.css'
import {Alert} from "../components/alerts";


export const NotificationError = ({message}) => {
	return (
		<Alert
			color="bg-transparent border-red-500 text-red-500"
			borderLeft
			raised>
			{message}
		</Alert>
	)
}

export const NotificationSuccess = ({message}) => {
	return (
		<Alert
			color="bg-transparent border-green-500 text-green-500"
			borderLeft
			raised>
			{message}
		</Alert>
	)
}
