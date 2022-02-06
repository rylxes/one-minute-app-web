import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Layouts from './layouts'
import Routes from './Routes'
import history from './services/history';
import {ToastProvider, useToasts} from 'react-toast-notifications'
import './App.css';
const Wrapper = ({children}) => {
    return <Layouts>{children}</Layouts>
}


const App = () => {
    return (
        <Router history={history}>
            <ToastProvider>
                <Wrapper>
                    <Routes/>
                </Wrapper>
            </ToastProvider>
        </Router>
    )
}
export default App
