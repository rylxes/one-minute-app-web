import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Centered from './centered'
import SSRStorage from "../services/storage";
import {useHistory} from "react-router-dom";
import {ToastProvider, useToasts} from 'react-toast-notifications'


const storage = new SSRStorage();
const Layouts = ({children}) => {
    const {addToast} = useToasts();
    let location = useLocation()
    const history = useHistory();
    let {pathname} = {...location}
    console.log(pathname)
    return <Centered>{children}</Centered>
}

export default Layouts
