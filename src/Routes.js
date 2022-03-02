import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './pages/home'
import NewPoll from './pages/new-poll/index'
import PollPreview from './pages/new-poll/preview'
import Settings from './pages/settings'
import MyPoll from './pages/my-poll'
import MyProfile from './pages/my-profile'


const Routes = () => {
    return (
        <Switch>

            <Route path="/my-profile">
                <MyProfile/>
            </Route>
            <Route path="/add-new">
                <NewPoll/>
            </Route>
            <Route path="/poll-preview">
                <PollPreview/>
            </Route>
            <Route path="/my-polls">
                <MyPoll/>
            </Route>
            <Route path="/settings">
                <Settings/>
            </Route>

            <Route exact path="/">
                <Dashboard/>
            </Route>
        </Switch>
    )
}
export default Routes
